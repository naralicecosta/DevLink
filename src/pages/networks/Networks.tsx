import { useState, FormEvent } from "react";
import { Header } from "../../components/header/Header";
import { Input } from "../../components/input/Input";

import { db } from "../../services/firebaseConnection";
import {setDoc, doc, getDoc} from 'firebase/firestore'
import { set } from "firebase/database";

export function Networks() {
    const [linkedin, setLinkedin] = useState("")
    const [instagram, setInstragram] = useState("")
    const [github, setGithub] = useState("")

    function handleRegister(e: FormEvent){
        e.preventDefault();

        setDoc(doc(db, "social", "link"),{
            linkedin: linkedin,
            instagram: instagram,
            github: github,
        })
        .then(() =>{
            console.log("cadastrado com sucesso")
        })
        .catch((error) =>{
            console.log("Erro ao salvar" + error);
        } )
    }

    return(
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>
            <h1 className="text-white text-2xl font-medium nt-8 mb-4">Página redes sociais</h1>

            <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
                <label className="text-white font-medium mt-2 mb-2">Link do Linkedin</label>
                    <Input 
                    type="url"
                    placeholder="Digite a url do Linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}/>

                <label className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
                    <Input 
                    type="url"
                    placeholder="Digite a url do Instagram"
                    value={instagram}
                    onChange={(e) => setInstragram(e.target.value)}/>

                <label className="text-white font-medium mt-2 mb-2">Link do Github</label>
                    <Input 
                    type="url"
                    placeholder="Digite a url do Github"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}/>

                    <button
                     type="submit"
                     className="text-white bg-blue-600 h-9 rounded-md items-center flex mb-7 font-medium">
                        Salvar Links
                    </button>
                
                
            </form>
        </div>
    )
}