# CodeCrave

CodeCrave is an ED Tech (Education Technology) web application developed using the MERN stack.

## Note

This project is intended as a learning tool and can be used as a sample project for educational or personal projects.

## Table of Contents

- [Features](#features)
- [Screenshots](#screenshots)
- [Important](#important)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

* **User Authentication:** CodeCrave provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their profiles with ease.
* **Courses and Lessons:** Instructors can create and edit courses. Students can enroll in courses, access course materials, and track their progress.
* **Progress Tracking:** CodeCrave allows students to track their progress in enrolled courses. They can view completed lessons, scores on quizzes and assignments, and overall course progress.
* **Payment Integration:** CodeCrave integrates with Razorpay for payment processing. Users can make secure payments for course enrollment and other services using various payment methods supported by Razorpay.
* **Search Functionality:** Users can easily search for courses, lessons, and resources using the built-in search feature. This makes it convenient to find relevant content quickly.
* **Instructor Dashboard:** Instructors have access to a comprehensive dashboard to view information about their courses, students, and income. The dashboard provides charts and visualizations to present data clearly and intuitively. Instructors can monitor the total number of students enrolled in each course, track course performance, and view their income generated from course sales.

## Screenshots

<details>
  <summary>More screenshots</summary>
  <!-- Add screenshots here -->
</details>

## Important

* The backend is in the `server` folder.
* Before uploading courses or anything else, create categories (e.g., web dev, Python, etc.) without which courses cannot be added. To create categories, create an Admin account and go to the dashboard, then the admin panel.
* To create an Admin account, first sign up with a student or instructor account, then go to your Database under the users model and change the 'accountType' to 'Admin'.

## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/hariome62014/Hari_IITP.git
    ```

2. Install the required packages.
    ```sh
    cd Study-Notion-master
    npm install
    
    cd server
    npm install
    ```

## Environment Variables

Create a `.env` file in the root directory and in the `/server` directory. Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations. Check the `.env.example` files for more information.

Example `.env` file in the root directory:
```plaintext
REACT_APP_API_URL=http://localhost:5000
