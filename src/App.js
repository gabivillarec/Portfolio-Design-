import style from './App.module.css'
import { Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {

  
  return (
    <div className={style.App}>
      <Home/>
    </div>
  );
};

export default App;
