
import './App.css';
import PvvListUsers from './components/PvvListUsers';
import axios from './api/pvvApi';
import { useEffect, useState } from 'react';
function PvvApp() {
    const [pvvListUsers,setPvvListUsers]=useState([]);
    //doc du lieu tu api
    const pvvGetAllUsers = async ()=>{
        const pvvResponse =await axios.get("pvvUsers");
        console.log("Api Data:",pvvResponse.data);
        setPvvListUsers(pvvResponse.data)
    }
    useEffect(()=>{
        pvvGetAllUsers();
        console.log("State Date:",pvvListUsers);
    })
  return (
    <div className="container border my-3">
      <h1>lam viec voi mock api</h1>
      <hr/>
      <PvvListUsers renderPvvListUsers={pvvListUsers}/>

    </div>
  );
}

export default PvvApp;
