import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

function Sign()
{
    return(
<>
<body>
   <div className='container'>
    <div className='row'>
       
        <div className='col-sm-4'>
    <form className='form'>
    <h1>B Login</h1>
    <div className='form-group'>
        <label>Email Id:</label>
   <input type='text' placeholder='Enter user Email ID' className='form-control'/>
   
    </div>
    <div className='form-group'>
        <label>Password:</label>
   <input type='password' placeholder='Enter user Password' className='form-control'/>
    </div>
    <button className='btn btn-info'>Login</button>
   
    <div>
    <br/>
    <Link to='/' >
    <span>Forgot Password</span>
    </Link>
    <br/>
    <Link to='/' >
        <span>Create a New Account?</span>
        </Link>
    </div>
   </form>
   </div>
   </div>
   </div>
   </body>

</>

    )
}
export default Sign;