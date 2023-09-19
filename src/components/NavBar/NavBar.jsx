import style from "./navBar.module.css"
import { useNavigate , useLocation } from 'react-router-dom'
import { useState } from 'react';

const NavBar = ()=>{



    const navigate = useNavigate()
    const location = useLocation()


    return(
        <div className={style.container}>
            <div className={style.contenedorLogo}>
            <button onClick={()=> navigate('/Home')} className={style.logo}>AB</button>
            <h3 onClick={()=> navigate('/Home')} className={style.name}>Antonio Beorchia</h3>
            </div>

            <div>
            <button onClick={()=> navigate('/Works')} className={style.btn}><h3>Works</h3></button>
            <button onClick={()=> navigate('/About')} className={style.btn}><h3>About</h3></button>
            </div>   

        </div>
    )
};

export default NavBar