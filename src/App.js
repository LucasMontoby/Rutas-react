import {BrowserRouter as Router} from 'react-router-dom';
import Public from './Routes/Public';
import NavBar from './component/NavBar'

function App() {
  return (
    <div className="App">
      <Router>

        <NavBar/>
        
        <Public/>  

      </Router>
    </div>
  );
}

export default App;
