import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import backgroundImage from './assets/7474.jpg';
function App() {
  return (
    <div className="App">
      <div className='title-box'>
        <h1>GIFS GENARATOR</h1>
      </div>
     
      <div className='components'>
     <Random/>
     <Tag/>
      </div>
     <div></div>
    </div>
  );
}

export default App;
