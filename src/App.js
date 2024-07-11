import React, {useState, useEffect} from 'react';
import UserList from './UserList'
import AddUser from './AddUser'
import './App.css';

const App =()=> {
  const [users, setUsers]= useState([])
  const [nextId, setNextId]=useState(1000)

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers([...storedUsers, ...data]);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users.filter(user => user.id >= 10000)));
  }, [users]);

  const addUser = (user) => {
    user.id = nextId; 
    setNextId(nextId + 1); 
    setUsers([...users, user]);
  };


  return (
    <div className="App">
      <h1>Usuarios - Challenge</h1>
      <AddUser addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;