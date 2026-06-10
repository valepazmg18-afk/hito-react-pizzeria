import React from "react";
import CardPizza from "./CardPizza";
import { useState } from "react";
import {useContext} from 'react';
import { CartContext } from '../Contexts/CartContext';
import { UserContext } from '../Contexts/UserContext';


export default function Cart() {
  const { cart, increase, decrease } = useContext(CartContext);
  const {total} = useContext(CartContext);
  console.log(cart);
  const {user} = useContext(UserContext);
  const [message, setMessage] = useState("");
  const handleCheckout = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/checkouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`
      }
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("¡Compra realizada con éxito!");
    } else {
      setMessage(data.error || "Error al realizar la compra");
    }
  } catch (error) {
    console.error(error);
    setMessage("Error de conexión");
  }
};
  
  return (
    <>
      <div className="container bg-dark text-white my-5 py-5 text-center" style={{borderRadius:"10px"}}>
        <h1>Carrito de Compras</h1>
        <div className="row my-5 justify-content-center">
          <div className="col-md-3">
              {cart.filter(p => p).map((p, id) => (
                <div className="card mb-3" key={p.id}>
                  <p className="card-header">{p.name}</p>
                  <p>Cantidad: {p.cantidad}</p>
                  <p>${(p.price * p.cantidad).toLocaleString("es-CL")}</p>
                  <button className="btn btn-dark m-2" onClick={() => increase(p.id)}>+</button>
                  <button className="btn btn-dark m-2" onClick={() => decrease(p.id)}>-</button>
                </div>
              ))}
          </div>
        </div>
        <h2>Total a pagar: ${total.toLocaleString("es-CL")}</h2>
        <button className="btn btn-light" disabled={!user} onClick={handleCheckout}> Finalizar Compra </button>
        {message && (<p className="mt-3 text-success">{message}</p>)}
      </div>
    </>
  );

}
