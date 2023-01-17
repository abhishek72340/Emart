import React, { useEffect } from "react";
import './Login.css'


import { useGlobalLogin } from "../loginContext/login-context";
import { useNavigate } from "react-router-dom";



export default function Sign() {

    const { input, setInput, dummyData, loginAction, userToken } = useGlobalLogin()

    const navigate = useNavigate()

    useEffect(() => {
        if (userToken) {
            navigate('/');
        }
     
      
    }, [userToken])

  
    


    const setDummyData = (event) => {
        event.preventDefault();
        setInput(dummyData)
    }

    const setInputUsername = (event) => {
        setInput({ userName: event.target.value })
    }

    const setInputPassword = (event) => {
        setInput({ password: event.target.value })
    }

   
    return (
        <div>
            <form action="" id='abhishek'>
                <div className="sign">
                    <img src="https://icons8.com/icon/117562/microsoft-outlook-2019" alt="" />
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="Enter username" value={input.userName} onChange={setInputUsername} className='ashu1' />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter password" value={input.password} onChange={setInputPassword}  className='ashu2'/><br />
                    <h5>Forget Password <a href=""> -&gt;click here</a></h5><br />
                    <button className="button-66" onClick={setDummyData}>Apply Dummy Data</button><br />
                    <button className="button-66" onClick={loginAction} >Login</button><br />
                    <h5>Create new acount <a href=""> -&gt;click here</a></h5><br /><br />
                    <div className="log-with">
                        <div> login with</div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/732/732223.png" alt="" /></a></div>
                        <div> <a href=""><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="" /></a></div>
                    </div>
                </div>
            </form>
        </div>
    )

}