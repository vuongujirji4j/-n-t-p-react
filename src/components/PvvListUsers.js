import React from 'react'

export default function PvvListUsers(renderPvvListUsers) {
  console.log("PvvListUsers:",renderPvvListUsers);
  //hien thi du lieu
  let pvvElementUser =renderPvvListUsers.map((pvvUser,index)=>{
    return(
      <>
      <tr>
      
          <td>{pvvUser.id}</td>
          <td>{pvvUser.UserName}</td>
          <td>{pvvUser.Password}</td>
          <td>{pvvUser.Email}</td>
          <td>{pvvUser.Phone}</td>
          <td>chuc nang</td>
      </tr>
      </>
    )
  })
  return (
    <div className='row'>
      <div className='col-md-12'>
<table className='table table-bordered'>
       <thead>
        <tr>
          <th>Id</th>
          <th>userName</th>
          <th>PassWord</th>
          <th>Email</th>
          <th>Phone</th>
          <th>chuc nang</th>
        </tr>
       </thead>
       <tbody>
        {pvvElementUser}
       </tbody>
</table>
    </div></div>
  )
}
