import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'
import PropTypes from "prop-types"
import Spinner from './Spinner'

export default function Login(props) {
    let navigate = useNavigate()
    const [logging, setLogging] = useState(false)
    const [credentials, setCredentials] = useState({email:"",password:""})
    const getUserInfo=async()=>{
        const response = await fetch("http://localhost:5000/api/auth/getuser",{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'auth-token': localStorage.getItem("token")
            },
        })
        const json = await response.json()
        localStorage.setItem("name",json.name)
        localStorage.setItem("email",json.email)
    }
    const handleSubmit=async (e)=>{
        setLogging(true)
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password})
        })
        const json = await response.json()
        if(json.success){
            localStorage.setItem("token",json.authtoken)
            navigate('/')
            await getUserInfo()
            props.showAlert("Success","You are logged in")
        }
        else
            props.showAlert("Failed",json.error)
        setLogging(false)
    }
    const handleChange=(e)=>{
        setCredentials({
          ...credentials,[e.target.id]:e.target.value
        })
    }
  return (
    <>
        <div className="mt-4 px-2">
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-4 px-6 py-8 rounded-xl border-2 border-sky-500/50 bg-gray-800 backdrop-blur">
                <h1 className="text-2xl font-bold text-blue-300 after:content-['_login']">
                    <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
                        iNotebook
                    </span>
                </h1>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput onChange={handleChange} value={credentials.email} id="email" name="email" placeholder="name@inotebook.com" required type="email" />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password" value="Your password"/>
                    </div>
                    <TextInput onChange={handleChange} value={credentials.password} id="password" name="password" required type="password"/>
                </div>
                <Button type="submit" className="mt-2 bg-pink-600">
                    {logging && <Spinner size={"4"}/>}Login
                </Button>
            </form>
        </div>
    </>
  )
}
Login.propTypes = {
    showAlert: PropTypes.func,
  }
