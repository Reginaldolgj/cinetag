import styles from './NaoEncontrada.module.css'
import pug from './pug.jpeg'

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <h2>Opa❗</h2>
            <p>O conteudo que você procura não foi encontrado.</p>
            <img src={pug} 
            alt='foto de um pug, com cara de perdido'
            className={styles.imagem}
            ></img>
        </section>
    )
}

export default NaoEncontrada;