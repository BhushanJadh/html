import React from 'react';
import {Link} from 'react-router-dom';
import '../Component/Style.css';
function Navbar()
{
return(
    <>
    <nav className='navbar'>
    <div className='logo'>
        <Link to='/Home'>
     <h2>BHUSHAN</h2> 
     </Link>
    </div>
    <div className='navitem'>
   <ul>
    <li>
     <Link to='/Home' ><p>Home</p></Link>  
    </li>
    <li>
    <Link to='/About' ><p>About</p></Link> 
    </li>
    <li>
    <Link to='/Servicess' ><p>Services</p></Link>  
    </li>
    <li>
    <Link to='/Carieer' ><p>Career</p></Link>
    </li>
    <li>
    <Link to='/Contact' ><p>Contact</p></Link> 
    </li>
    <li>
    <Link to='/Blog' ><p>Blog</p></Link> 
    </li>
   </ul>
    </div>
    <div className='sign'>
        <li>
    <Link to='./Sign' ><button>Sign</button></Link>
    </li>
    </div>


    </nav>
    <div className='contain'>
     <div className='para'>
     <h1>I am Front End Developer:<span>React JS & Next JS</span> </h1>
     <h6>React is a JavaScript-based UI development library. 
        Facebook and an open-source developer community run it.
         Although React is a library rather than a language, it is widely used in web development.
          The library  appeared in May 2013 and is now one of the most commonly used frontend 
          libraries for web development</h6>
          <Link to='/Sign'>
       <button>Please Login</button>
       </Link>
     </div>

    </div>
    </>
  
)

}
export default Navbar;