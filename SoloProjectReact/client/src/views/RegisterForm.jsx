import {React,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {Container, Form} from 'react-bootstrap'

const RegisterForm = (props) => {
    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        goldCoins:0
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState([])
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/register",user)
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
            setUser({ ...user, [e.target.name]: e.target.value })
        }
  return (
    <Container className=' mx-auto border border-warning bg-dark' style={{height:'600px'}}>
    <h2 className='text-warning'>Register a Wizard!</h2>
    <Container className='col-12 d-inline-flex' style={{overflowY:'scroll', width:'100vh'}}>

    {errors.map((item,index)=>(
        <Container className='text-danger col-6  justify-content-center align-items-center col-1 ' style={{overflowWrap:'anywhere'}} key={index}>
        <p style={{overflow:"auto"}}> {item.message}</p>
        </Container>
            ))}
    </Container>
    <Form onSubmit={submitHandler} className='form-control text-warning bg-dark ' style={{height:'40vh',width:'100vh'}}>
        <label className="form-label" htmlFor="firstName">First Name:</label>
        <input className='form-control mt-2' type="text" value={user.firstName} name="firstName" onChange={handleChange} />
            
        <label className="form-label"  htmlFor="lastName">Last Name:</label>
        <input className='form-control mt-2' type="text" value={user.lastName} name="lastName" onChange={handleChange} />
            
        <label className="form-label" htmlFor="email">Email:</label>
        <input className='form-control mt-2' type="text" value={user.email} name="email" onChange={handleChange} />
            
        <label className="form-label" htmlFor="password">Password:</label>
        <input className='form-control mt-2' type="text" value={user.password} name="password" onChange={handleChange} />
            
        <label className="form-label" htmlFor="confirmPassword">Confirm Password:</label>
        <input className='form-control mt-2' type="text" value={user.confirmPassword} name="confirmPassword" onChange={handleChange} />
            
        <input  type="hidden" name="goldCoins" value={user.goldCoins} onChange={()=> setUser({...user,[e.target.name]:100})} />
        <button className='btn btn-primary'>Register</button>
        
    </Form>
</Container>
  )
}

export default RegisterForm