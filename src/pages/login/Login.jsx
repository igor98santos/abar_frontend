import { useRef } from 'react'
import LayoutFeed from '../../Components/LayoutFeed/LayoutFeed'
import api from '../../service/api'
const Login = () => {

    const username = useRef()
    const password = useRef()

    const nome = useRef()

    function logar(event) {
        event.preventDefault()
        api.post('/login', {
            username: username.current.value,
            password: password.current.value
        }).then((res) => {
            localStorage.setItem("token", res.headers.authorization)
            window.location.reload()
        })
            .catch((err) => alert("Usuario ou senha invalidos"))
    }

    function sair() {
        localStorage.removeItem("token")
        window.location.reload()
    }

    function enviarDados(event){
        event.preventDefault()
        api.post('/pessoa/admin/add', {
            nome: nome.current.value
        }, {
            headers: {
                "Authorization" : localStorage.getItem("token")
            }
        }).then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

    return (
        <div className="container mt-5">
            {localStorage.getItem("token") === null ?
                <>
                    <h1>Login</h1>
                    <form onSubmit={logar}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" ref={username} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" ref={password} />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                   

                </>
                : 
                <>
                  <LayoutFeed></LayoutFeed>
                </>
                }
        </div>
    )
}

export default Login;