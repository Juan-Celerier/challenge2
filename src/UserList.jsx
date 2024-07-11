import React, { useState} from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
  const [filter, setFilter] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase()) ||
    user.email.toLowerCase().includes(filter.toLowerCase()) ||
    user.address.city.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre, email o ciudad"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <div className="user-list">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;