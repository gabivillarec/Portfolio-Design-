import style from "./home.module.css"
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero"

const Home = ()=>{

    return(
        <div className={style.container}>
            <NavBar/>
            <Hero/>
        </div>
    );
}

export default Home