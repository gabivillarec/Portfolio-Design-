import style from "./section.module.css"



const Section = (props) =>{

    return (
        <div className={style.container}>

            <h2>{props.titulo}</h2>
            <div className={style.line}>Fecha Proyecto tecnología</div>
            <p>{props.text}</p>
            <img className={style.img} src={props.image} alt=''/>
            
        </div>
    )
}

 export default Section