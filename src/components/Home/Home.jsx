import style from "./home.module.css"
import NavBar from "../NavBar/NavBar";

const Home = ()=>{

    return(
        <div className={style.container}>
            <NavBar/>
        </div>
    );
}

export default Home