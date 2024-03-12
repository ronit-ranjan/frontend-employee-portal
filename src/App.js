import './App.css';
import Login from './pages/loginPage';
import PageLayout from './pages/details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AnimatedDrawer from './pages/community';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/user" element={<PageLayout />} />
        <Route path="/community" element={<AnimatedDrawer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
