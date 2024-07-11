import React from 'react';

const UserCard = ({ user }) => (
  <div className="user-card">
    <h2>{user.name}</h2>
    <p><strong>Username:</strong> {user.username}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>City:</strong> {user.address.city}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Company:</strong> {user.company.name}</p>
  </div>
);

export default UserCard;