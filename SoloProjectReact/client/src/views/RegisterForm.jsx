import {React,useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


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
    const [errors,setErrors] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch("http://localhost:8080/api/register",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",

            },
            body:JSON.stringify({
                email:formData.get('email'),
                password:formData.get('password'),
                firstName:formData.get('firstName'),
                lastName:formData.get('lastName'),
                confirmPassword:formData.get('confirmPassword')
            }),
        })
        .then((response) => response.json())
        .then((data)=>{
            if(data.fieldErrors){
                data.fieldErrors.forEach(fieldError=>{
                    if(fieldError.field === 'email'){
                        setErrors({...errors,[e.target.name]: fieldError.message})
                        console.log(errors)
                    }
                    if(fieldError.field === 'password'){
                        setErrors({...errors,[e.target.name]: fieldError.message})
                    }
                    if(fieldError.field === 'firstName'){
                        setErrors({...errors,[e.target.name]: fieldError.message})
                    }
                    if(fieldError.field === 'lastName'){
                        setErrors({...errors,[e.target.name]: fieldError.message})
                    }
                    if(fieldError.field === 'confirmPassword'){
                        setErrors({...errors,[e.target.name]: fieldError.message})
                    }
                });
            }else {
                alert("Successful Registration");
            }
        })
        .catch((err) => err);
        
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
    <div>
    <h2>Register a Wizard!</h2>
    <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" value={user.firstName} name="firstName" onChange={handleChange} />
            {/* {formErrors.title ? <p>{formErrors.title}</p> : null} */}
            {errors.firstName ? <p>{errors.firstName}</p> : null}
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" value={user.lastName} name="lastName" onChange={handleChange} />
            {/* {formErrors.author ? <p>{formErrors.author}</p> : null} */}
            {errors.lastName ? <p>{errors.lastName}</p> : null}
        <label htmlFor="email">Email:</label>
        <input type="text" value={user.email} name="email" onChange={handleChange} />
            {/* {formErrors.pages ? <p>{formErrors.title}</p> : null} */}
            {errors.email ? <p>{errors.email}</p> : null}
        <label htmlFor="password">Password:</label>
        <input type="text" value={user.password} name="password" onChange={handleChange} />
            {errors.password ? <p>{errors.password}</p> : null}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="text" value={user.confirmPassword} name="confirmPassword" onChange={handleChange} />
            {errors.confirmPassword ? <p>{errors.confirmPassword}</p> : null}
        <input type="hidden" name="goldCoins" value={user.goldCoins} onChange={()=> setUser({...user,[e.target.name]:100})} />
        <button>Register</button>
    </form>
</div>
  )
}

export default RegisterForm