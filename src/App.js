import './App.css';
import { Route, Routes } from 'react-router-dom';
import Indexpage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Laout from './component/Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './component/UserContext';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Laout/>}>
            <Route index element={<Indexpage/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage/>} />
          </Route>
        </Routes>
      </UserContextProvider>
  );
}

export default App;
