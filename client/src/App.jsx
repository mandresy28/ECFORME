import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import RegisterChoice from './components/pages/RegisterChoice';
import Registerentreprise from './components/pages/Registerenterprise';
import Saisie from './components/section/saisie';
import About from './components/About';
import Add from './components/pages/Add';
import Update from './components/pages/Update';
import EntrepriseForm from './components/pages/EntrepriseForm';
import TaskList from './dashboard/TaskList';
import TaskForm from './dashboard/TaskForm';
import TaskDetail from './dashboard/TaskDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use "element" instead of "Component" */}
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registerchoice" element={<RegisterChoice />} />
          <Route path="/registerentreprise" element={<Registerentreprise />} />
          <Route path="/saisie" element={<Saisie />} />
          <Route path="/about" element={<About />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path='/entrepriseform' element={ <EntrepriseForm /> } />
          <Route path='/tasklist' element={<TaskList />}/>
          <Route path='/taskform' element={<TaskForm />}/>
          <Route path='/taskdetail' element={ <TaskDetail taskId={1} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
