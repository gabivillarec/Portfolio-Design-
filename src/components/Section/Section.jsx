import style from "./section.module.css"



const Section = (props) =>{

    return (
        <div className={style.container}>

            <h2>{props.titulo}</h2>

            <div className={style.info}>
                <div className={style.line}></div>
                <p>Fecha Proyecto tecnología</p>
            </div>
            
            <p className={style.text}>{props.text}</p>
            <a className={style.link} href={props.link}>ver proyecto</a>
            <div className={style.imagen}>
            <img src={props.image} alt=''/>
            </div>

        </div>
    )
}

 export default Section