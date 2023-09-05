import './App.css';
import { Route, Routes } from 'react-router-dom';
import Indexpage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Laout from './component/Layout';
import RegisterPage from './pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './component/userContext';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import PlacesFormPage from './pages/PlacesFormPage';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Laout/>}>
            <Route index element={<Indexpage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/account' element={<ProfilePage/>}/>
            <Route path='/account/places' element={<PlacesPage/>}/>
            <Route path='/account/places/new' element={<PlacesFormPage/>}/>
          </Route>
        </Routes>
      </UserContextProvider>
  );
}

export default App;
