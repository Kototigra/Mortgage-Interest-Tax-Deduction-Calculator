import { Routes, Route} from 'react-router-dom'
import './App.css';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="container py-5">
      <Routes> 
      <Route path='/' element={<Search/>} />
      </Routes> 
    </div>
  );
}

export default App;
