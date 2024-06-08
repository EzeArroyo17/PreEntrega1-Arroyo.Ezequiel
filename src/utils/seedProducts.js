//este archivo sube todos los datos directamente y te ahorra la tarea de subir producto por producto
import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        id: "accion.2",
        name: "PUGB",
        descriptcion:"PUBG (PlayerUnknown's Battlegrounds) es un juego de supervivencia y disparos en línea donde hasta cien jugadores saltan en paracaídas a una isla, buscan armas y equipo, y luchan entre sí hasta que solo quede uno en pie.",
        price: 300,
        stock: 20,
        category: "accion",
        image: "/image/accion/PUGB.jpg",
    },
    {
        id: "aventura.1",
        name: "Cyberpunk",
        descriptcion:"Cyberpunk es un juego de rol de mundo abierto ambientado en Night City, una metrópolis futurista obsesionada con el poder, la tecnología y la decadencia. Los jugadores asumen el papel de V, un mercenario que busca un implante único que promete la clave de la inmortalidad.",
        price: 1200,
        stock: 10,
        category: "aventura",
        image: "/image/aventura/Cyberpunk.jpg",
    },
    {
        id: "aventura.2",
        name: "Pokemon",
        descriptcion:"En este juego, los jugadores asumen el papel de entrenadores Pokémon, criaturas ficticias que viven en el mundo del juego. El objetivo principal es capturar y entrenar Pokémon para convertirse en el campeón de la región, al mismo tiempo que se enfrentan a otros entrenadores y luchan contra organizaciones malvadas.",
        price: 800,
        stock: 4,
        category: "aventura",
        image: "/image/aventura/Pokemon.jpg",
    },
    {
        id: "deportes.1",
        name: "Efootball",
        descriptcion:"eFootbal es un videojuego de fútbol desarrollado y publicado por Konami. Es una evolución de la serie de juegos de fútbol de larga duración de Konami, que anteriormente se conocía como Pro Evolution Soccer o PES. eFootball se distingue por su enfoque en el juego en línea y su modelo de negocio gratuito para jugar. Ofrece partidos de fútbol realistas con una jugabilidad enfocada en la simulación y la estrategia.",
        price: "GRATIS",
        stock: 100,
        category: "deportes",
        image: "/image/deportes/Efootball.png",
    },
    {
        id: "deportes.2",
        name: "NBA 2K",
        descriptcion:"NBA 2K es una serie de videojuegos de simulación de baloncesto desarrollada y publicada por 2K Sports. El juego ofrece una experiencia realista de la NBA, con una jugabilidad que se asemeja al baloncesto profesional y una presentación que incluye equipos, jugadores y estadios auténticos.",
        price: 850,
        stock: 30,
        category: "deportes",
        image: "/image/deportes/NBA2K.jpg",
    },
]

const seedProducts = () =>{
    products.map (({id, ...rest}) =>{//aca se estrae el id de cada objeto y se sube el resto de la info
        addDoc(collection(db,"products"), rest)
    })
}

seedProducts()