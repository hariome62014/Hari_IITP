

const express = require("express")
const path = require("path");
const router = express.Router();
const fs = require('fs');

function requireLogin(req, res, next) {
    if (req.session.loggedInUser) {
        // User is logged in, proceed to next middleware
        next();
    } else {
        // User is not logged in, redirect to login page
        res.redirect('/');
    }
}

router.get('/thesis_course', requireLogin, (req, res) => {
    // Read the HTML file
    const filePath = path.join(__dirname, '..', 'views', 'thesis_course6.html');
    fs.readFile(filePath, 'utf8', function(err, html) {
        if (err) {
            // If there's an error reading the file, send an error response
            return res.status(500).send('Error reading file');
        }

        // Extract user data
        const firstName = req.session.loggedInUser.firstName;
        const lastName = req.session.loggedInUser.lastName;
        const email = req.session.loggedInUser.email;
        const Application_id = req.session.loggedInUser.Application_id;

        // Replace placeholders in HTML with user data
        const modifiedHtml = html.replace('<strong>{{ firstName }} {{ lastName }}</strong>', `<strong>${firstName} ${lastName}</strong>`);
        

        // Send the modified HTML content as the response
        res.send(modifiedHtml);
    });
});

router.post('/thesis_course', (req, res) => {
    const {
        phd_scholar1,
        phd_thesis1,
        phd_role1,
        phd_ths_status,
        phd_ths_year,
        pg_scholar,
        pg_thesis,
        pg_role,
        pg_status,
        pg_ths_year,
        ug_scholar,
        ug_thesis,
        ug_role,
        ug_status,
        ug_ths_year
    } = req.body;

    // Get Application_id from session
    const { Application_id } = req.session.loggedInUser;

    const db = req.db;

    // SQL query for inserting or updating thesis_course data
    const query = `
        INSERT INTO research (
            phd_scholar1,
            phd_thesis1,
            phd_role1,
            phd_ths_status,
            phd_ths_year,
            pg_scholar,
            pg_thesis,
            pg_role,
            pg_status,
            pg_ths_year,
            ug_scholar,
            ug_thesis,
            ug_role,
            ug_status,
            ug_ths_year,
            Application_id
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            phd_scholar1 = VALUES(phd_scholar1),
            phd_thesis1 = VALUES(phd_thesis1),
            phd_role1 = VALUES(phd_role1),
            phd_ths_status = VALUES(phd_ths_status),
            phd_ths_year = VALUES(phd_ths_year),
            pg_scholar = VALUES(pg_scholar),
            pg_thesis = VALUES(pg_thesis),
            pg_role = VALUES(pg_role),
            pg_status = VALUES(pg_status),
            pg_ths_year = VALUES(pg_ths_year),
            ug_scholar = VALUES(ug_scholar),
            ug_thesis = VALUES(ug_thesis),
            ug_role = VALUES(ug_role),
            ug_status = VALUES(ug_status),
            ug_ths_year = VALUES(ug_ths_year);
    `;

    const values = [
        phd_scholar1,
        phd_thesis1,
        phd_role1,
        phd_ths_status,
        phd_ths_year,
        pg_scholar,
        pg_thesis,
        pg_role,
        pg_status,
        pg_ths_year,
        ug_scholar,
        ug_thesis,
        ug_role,
        ug_status,
        ug_ths_year,
        Application_id
    ];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error("Error occurred:", error);
            res.status(500).send("Error occurred while saving thesis_course data.");
        } else {
            // res.status(200).send("Thesis course data saved successfully.");
            res.redirect('/rel_info');
        }
    });
});




module.exports = router;