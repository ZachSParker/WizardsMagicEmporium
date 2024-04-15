import axios from 'axios'
import {useState,React} from 'react'
import { Container,Form } from 'react-bootstrap'
const LoginForm = () => {
    const [loginUser,setLoginUser] = useState({
        email:"",
        password:"",
    })
    const [errors,setErrors] = useState([{}])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/login",loginUser)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.log(error.response.data.fieldErrors)
            setErrors(error.response.data.fieldErrors)
        })
    }
    const handleChange = (e) => {
        // if (e.target.name == 'title' && e.target.value.length <= 2) {
        //     setFormErrors({ ...formErrors, [e.target.name]: "title needs to be longer than 2 characters" })
        // }
        // else if (e.target.name == 'author' && e.target.value.length <= 4) {
        //     setFormErrors({ ...formErrors, [e.target.name]: "author needs to be longer than 4 characters" })
        // }
        // else {
        //     setFormErrors({ ...formErrors, [e.target.name]: "" })
        // }
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value })
    }
  return (
    <Container>
        <h5 className='text-light'>{errors[0]["message"]}</h5>
        
        <h2 className='text-muted mb-2' style={{fontFamily:'inherit'}}>Login</h2>
        <Form onSubmit={submitHandler} className='border border-warning bg-success border-3 rounded-4 text-warning' style={{height:'40vh',width:'60vh'}}>
            <label className="form-label" htmlFor="email"style={{fontSize:'4vh'}}>Email:</label>
            <input className='form-control mt-2 border border-1 rounded-4 mx-auto' style={{width:'40vh'}} type="email" value={loginUser.email} name="email" onChange={handleChange} />

            <label className="form-label" htmlFor="password" style={{fontSize:'4vh'}}>Password:</label>
            <input className='form-control mt-2 border border-1 rounded-4 mx-auto ' style={{width:'40vh'}} type="password" value={loginUser.password} name="password" onChange={handleChange} />
            <button className='btn btn-primary mt-3 col-6 mx-auto bg-danger text-warning'>Login</button>
        </Form>
    </Container>
  )
}

export default LoginForm