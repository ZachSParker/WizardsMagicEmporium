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
    const [errors,setErrors] = useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/auth/registration", user)
        .then((res) =>{
            console.log(res,"user added successfully")
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err)
        });
        
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
            {/* {errors.firstName ? <p>{errors.firstName.message}</p> : null} */}
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" value={user.lastName} name="lastName" onChange={handleChange} />
            {/* {formErrors.author ? <p>{formErrors.author}</p> : null} */}
            {/* {errors.lastName ? <p>{errors.lastName.message}</p> : null} */}
        <label htmlFor="email">Email:</label>
        <input type="text" value={user.email} name="email" onChange={handleChange} />
            {/* {formErrors.pages ? <p>{formErrors.title}</p> : null} */}
            {/* {errors.email ? <p>{errors.email.message}</p> : null} */}
        <label htmlFor="password">Password:</label>
        <input type="text" value={user.password} name="password" onChange={handleChange} />
            {/* {errors.password ? <p>{errors.password.message}</p> : null} */}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="text" value={user.confirmPassword} name="confirmPassword" onChange={handleChange} />
            {/* {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null} */}
        <input type="hidden" name="goldCoins" value={user.goldCoins} onChange={()=> setUser({...user,[e.target.name]:100})} />
        <button>Register</button>
    </form>
</div>
  )
}

export default RegisterForm