import React, { useState } from 'react';
import Header from './components/UI/Header/Header';
// import Card from './components/Card/Card'
import UserForm from './components/UserForm/UserForm';
 import UserOutput from './components/UserOutput/UserOutput';
import './App.css';

function App() {
  const [data, setData ] = useState([
    {
      Name: 'Johny',
      Age: '15',
      id: '0.885'
    },
  
    {
      Name: 'Micheal',
      Age: '7',
      id: '0.454'
    }
  ])

  const addDataHandler = (enteredName, enteredAge) => {
    setData(prevData => {
      const updatedGoals = [...prevData];
      updatedGoals.unshift({ 
        Name: enteredName,
        Age: enteredAge,
         id: Math.random().toString() });
  
      return updatedGoals;
    });
  }

  return (
    <div className="App">
      <Header/>
      <UserForm onAddData={addDataHandler}/>
   <UserOutput users={data} />
    </div>
  );
}

export default App;
