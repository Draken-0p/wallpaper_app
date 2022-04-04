
import { useQuery } from 'react-query';
import './App.css';
import Api from './Api'
import Navbar from './pages/Navbar';

function App() {

 

  return (
    <div className="App">
      <Navbar/>
    <Api/>
    </div>
  );
}

export default App;
