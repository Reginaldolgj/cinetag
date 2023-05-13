import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Card from "componentes/Cards";
import styles from "./inicio.module.css";
import { useEffect, useState } from "react";

function Inicio() {
const [videos, Setvideos] = useState([]);

useEffect(() => {
    fetch("https://my-json-server.typicode.com/Reginaldolgj/cine-tag/videos")
        .then(respostas => respostas.json())
        .then(dados => {
            Setvideos(dados)
        }, [])
})
return (
    <>

        <Banner imagem="home" />
        <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes !!!</h1>
        </Titulo>
        <section className={styles.container}>
            {videos.map((video) => {
                return <Card {...video} key={video.id} />
            })}
        </section>

    </>
)
}

export default Inicio;