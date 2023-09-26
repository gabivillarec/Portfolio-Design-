import style from './hero.module.css'


const Hero = ()=>{

    return(

        <div className={style.container}>
            <h1>Diseño. Estilos.<br/>
                Gráficos. Videos.<br/>
                3D. Fotografía.
            </h1>
            <div className={style.line}></div>
            <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ad iste ducimus repudiandae. Voluptas voluptates facere id possimus quam eaque dolor modi, et maiores vitae porro sapiente consequatur expedita illum!</p>
            
        </div>
    )
};

export default Hero;