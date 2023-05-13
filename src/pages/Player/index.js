/* eslint-disable react-hooks/rules-of-hooks */
import Banner from 'componentes/Banner';
import styles from './player.module.css'
import Titulo from 'componentes/Titulo';
import { useParams } from 'react-router-dom';
import videos from "json/db.json";
import { useState, useEffect } from 'react';
import NaoEncontrada from 'pages/NaoEncontratada';

function player() {
    const [video, setVideo] = useState();
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/Reginaldolgj/cine-tag/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])

    if(!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.Titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default player;