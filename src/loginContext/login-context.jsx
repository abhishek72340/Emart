import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const loginContext = createContext();

const LoginProvider = ({ children }) => {
 

    const [userToken, setUserToken] = useState();
    const [userDetail, setUserDetail] = useState();
    const [input, setInput] = useState({
        userName: '',
        password: ''
    })

    const toastify = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    }

    const notifyInfo = (content) => toast.info(content, toastify);
    const notifySuccess = (content) => toast.success(content, toastify);
    const notifyWarn = (content) => toast.warn(content, toastify);
    const notifyError = (content) => toast.error(content, toastify);


    const getUserDetails = async (userId) => {
        let res = await fetch(`https://dummyjson.com/users/${userId}`);
        let data = await res.json()
        setUserDetail(data)
    }

    useEffect(() => {
        let token = localStorage.getItem('anixCartUserToken');
        if (token) {
            setUserToken(token);
            let userId = localStorage.getItem('userId');
            getUserDetails(userId);
        }
    }, [userToken])

    const dummyData = {
        userName: 'kminchelle',
        password: '0lelplR'
    }

    const userLogin = async () => {
        let res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR'
            })
        })
        let data = await res.json()
        console.log(data.token);
        localStorage.setItem('anixCartUserToken', data.token);
        localStorage.setItem('userId', data.id);
        setUserToken(data.token);
        setUserDetail(data);
     
    }

 const loginAction = (event) => {
        event.preventDefault();
        userLogin();
        setInput({
            userName: '',
            password: ''
        })
        notifySuccess("LOGIN SUCCESSFULL");
     
    
    
    }



    const logoutUser = () => {
        localStorage.removeItem('anixCartUserToken')
        localStorage.removeItem('userId')
        setUserToken('')
        setUserDetail('')
        notifyInfo('Logout Successfull!')
    }

    return (
        <loginContext.Provider value={{ input, setInput, dummyData, loginAction, userToken, logoutUser, userDetail }}>
            {children}
        </loginContext.Provider>
    )
}

const useGlobalLogin = () => useContext(loginContext)

export { LoginProvider, useGlobalLogin };