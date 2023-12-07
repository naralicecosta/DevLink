import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header>
            <nav>
                <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/admin">
                        Meus links
                    </Link>
                    <Link to="/admin/social">
                        Redes sociais
                    </Link>
                </div>

                <button>
                    <BiLogOut size={28} color="#db2629"
/>
                </button>
            </nav>
        </header>
    )
}