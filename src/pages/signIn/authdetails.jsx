import React,{useEffect, useState} from 'react'
import { auth } from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Authdetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user) => {
            if (user){
                setAuthUser(user);
            }
            else{
                setAuthUser(null);
            }

        });

        return () => {
            listen();
        }

    },[]);

    const userSignOut = ()=>{
        signOut(auth).then(()=>{
            console.log("Signed Out")
        }).catch(error => console.log(error));
    } 
  return (
    <div className='auth-user'> {authUser ? <><img src={authUser.photoURL}/><button onClick={userSignOut}>Sign Out</button></>: <p></p>} </div>
  )
} 

export default Authdetails