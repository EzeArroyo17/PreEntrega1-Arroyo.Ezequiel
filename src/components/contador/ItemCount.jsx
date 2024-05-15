import { useState } from 'react'

const Contador = ({ stock }) => {

    const [count, setCount] = useState(1);

    const restar = ()=>{
        //No se debe manipular directamente algo sino usar el set...
        if(count>1){
        setCount(count -1)
    }}

const agregarAlCarrito = ()=>{
    console.log(count);
}
const sumar = ()=>{
if(count < stock){
    setCount(count +1)
}}
    return (

        <div>
            <button onClick={restar} >-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
            <button onClick={agregarAlCarrito}>agregar al carrito</button>
        </div>

    )
}

export default Contador