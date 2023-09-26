import style from "./home.module.css";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";

const Home = ()=>{

    

    return(
        <div className={style.container}>
            <NavBar/>
            <Hero/>
            <Section 
            key = "0" 
            titulo = "Proyecto 0"
            text = "texto descriptivo que explica el proyecto , klhgalskgh jsafk jsfiw sjeiql ppremvcwo sialfjwq oiefowimcoq ioffqinoais qwgionso wqifgn." 
            image = "https://davidhellmann.com/uploads/imager/uploads/work/concept-schwarzkopf-227/344/schwarzkopf_01_image_01_86ad6ebaa7a034c0be58ed4e71db04e2.jpg"/>
        </div>
    );
}

export default Home