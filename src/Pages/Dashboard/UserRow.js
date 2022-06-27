import React from 'react';
import Swal from 'sweetalert2';

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        if (res.status === 403) {
          Swal.fire(
            'Failed',
            `Failed to make an admin`,
            'error'
          )
        }
        return res.json()
      })
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire(
            'Success',
            `Successfully made an admin`,
            'success'
          )
        }
      })
  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
      <td><button className="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;