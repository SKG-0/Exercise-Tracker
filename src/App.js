import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbarcomponent'
import ExercisesList from './components/exercise-listcomponent'
import EditExercise from './components/edit-exercisecomponent'
import CreateExercise from './components/create-exercisecomponent'
import CreateUser from './components/create-usercomponent'
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
