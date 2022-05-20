import React from 'react';
import { useQuery } from 'react-query';
import UserRow from './UserRow';

const Users = () => {
  const url = 'http://localhost:5000/user'
  const { data: users, isLoading, refetch } = useQuery('users', () => fetch(url, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));
  if (isLoading) {
    return <p>Loading.................................</p>
  }

  return (
    <div className='mt-8'>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <UserRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default Users;