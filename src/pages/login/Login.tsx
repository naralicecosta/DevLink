import {  FormEvent, useState } from"react"

import { Link, useNavigate} from "react-router-dom"
import { Input } from "../../components/input/Input"

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

export function Login() {
    //pegar os dados
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e: FormEvent){
        e.preventDefault(); // para nao atualizar a pagina

        if (email === '' || password === ''){
            alert("Preencha todos os campos!")
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("logado com sucesso")
            navigate("/admin", { replace: true })
        })
        .catch((error) => {
            console.log("ERRO AO FAZER O LOGIN:")
            console.log(error);
          })

    }

    return(
        <div className="flex w-full  h-screen items-center justify-center flex-col">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                <span className="bg-gradient-to-r from-yellow-600 to-pink-500 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>

            <form onSubmit={handleSubmit} className="w-full max-w-full flex flex-col px-2">
                <Input
                placeholder="Digite seu email..."
                type="email"
                value={email}
                onChange={ (e) => setEmail(e.target.value) }/> {/*pega o que digita no email e passa para dentro do usestate*/}
                
                <Input
                placeholder="*******"
                type="password"
                value={password}
                onChange={ (e) => setPassword(e.target.value) }/> {/*pega o que digita no password e passa para dentro do usestate*/}
                
                <button
                 type="submit"
                 className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>
        </div>
    )
}