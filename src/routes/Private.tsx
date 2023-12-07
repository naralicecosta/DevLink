import {ReactNode, useState, useEffect} from 'react'

import { auth } from "../services/firebaseConnection"; 
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';

interface PrivateProps{
    children: ReactNode
}
export function Private({ children }: PrivateProps): any{
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)
    
    //chamar o comp enquanto estiver carregando, esta passando e verificando la no admin se tem usuario logado ou nao
    useEffect(() => {
        const onsub = onAuthStateChanged(auth, (user) => {
            if(user){
                const userData = {
                    uid: user?.uid,
                    email: user?.email
                }
                localStorage.setItem("@reactLinks", JSON.stringify(userData))
                setLoading(false)
                setSigned(true)
            }else{
                setLoading(false)
                setSigned(true)
            }
        })
        return() =>{
            onsub()
        }

    },[])

    if(loading){
        return<div></div>
    }
    if(signed){
        return <Navigate to="/login" />
    }


    return children;
}