import './App.css';

import { Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">
        <div className="left">
          <Link to="/marvel">
            <img src="https://www.komar.de/en/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg" alt="Marvel"/>
          </Link>
        </div>
        <div className="right">
            <Link to="/nasa">
              <img src="https://images.hdqwalls.com/download/nasa-logo-blue-5k-p0-1920x1080.jpg" alt="Nasa"/>
           </Link>
        </div>
    </div>
  );
}

export default App;
