import style from "./home.module.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import Spread from "../Spread/Spread";

const Home = ()=>{

    

    return(
        <div className={style.container}>
            <NavBar/>
            <Hero/>
            <Spread/>
            <Section 
            key = "0" 
            titulo = "Proyecto 0"
            text = "Texto descriptivo que explica el proyecto , tony putitoooo klhgalskgh jsafk jsfiw sjeiql ppremvcwo sialfjwq oiefowimcoq ioffqinoais qwgionso wqifgn."
            link = "http://www.google.com" 
            image = "https://davidhellmann.com/uploads/imager/uploads/work/concept-schwarzkopf-227/344/schwarzkopf_01_image_01_86ad6ebaa7a034c0be58ed4e71db04e2.jpg"
            />
            <Spread/>
            <Section 
            key = "0" 
            titulo = "Proyecto 1"
            text = "Texto descriptivo que explica el proyecto , tonyy comilonn mmm klhgalskgh jsafk jsfiw sjeiql ppremvcwo sialfjwq oiefowimcoq ioffqinoais qwgionso wqifgn."
            link = "http://www.google.com" 
            image = "https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg"
            />
            <Spread/>
        </div>
    );
}

export default Home