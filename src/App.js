import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoratuiesView } from './Pages/FavoratuiesView';
import { ListView } from './Pages/ListView';
import { NavBar } from './Componenets/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <div className={styles.appBody}>
      <BrowserRouter>
      <Routes>
          <Route element={<ListView/>}path ='/'>

          </Route>
          <Route element={<FavoratuiesView/>}path ='/favourites'>

          </Route>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
