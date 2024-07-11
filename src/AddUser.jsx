import React, { useState } from 'react';


const AddUser = ({ addUser }) => {
   
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    
    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      address: { city },
      phone,
      company: { name: company }
    };
    addUser(newUser);
    setName('');
    setUsername('');
    setEmail('');
    setCity('');
    setPhone('');
    setCompany('');
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required />
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="text" placeholder="Ciudad" value={city} onChange={e => setCity(e.target.value)} required />
      <input type="text" placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)} required />
      <input type="text" placeholder="Nombre de la empresa" value={company} onChange={e => setCompany(e.target.value)} required />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default AddUser;

