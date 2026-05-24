import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import React from "react";
import CardPizza from "./CardPizza";
import NavbarComponent from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';


export default function Home() {

  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  const getPizza = async () => {
    const res = await fetch('https://hito-react-pizzeria.onrender.com/api/pizzas');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  
  

  return (
    <> 
    <NavbarComponent/>
    <Header/>
    <div className="pizza-container my-5 py-5">
      <h2 className="text-center mb-4 shadow ">Nuestras Pizzas</h2>
        <div className="row">
            {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <div className="card h-100 shadow">
                <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ height: "250px", objectFit: "cover",}}/>
                <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{fontSize: "20px", fontWeight:"400",}}>{pizza.name}</h5>
                <p className="card-text" style={{ flexGrow: 1, minHeight: "80px", color: "#555", }}>
                    {pizza.desc}
                </p>
                <p className="card-text" style={{flexGrow: 1, fontSize: "16px", color: "#555",}}>
                    <small className="text-muted">Ingredientes: {pizza.ingredients?.join(" , ")}</small>
                </p>
                <p>$ {pizza.price.toLocaleString("es-CL")}</p>
                  <button className="btn btn-dark" onClick={() => addToCart(pizza)}>Añadir al Carrito</button> 
              </div>
            </div>
            </div>
            ))
            }
        </div>
    </div>
    <Footer/>
    </>
  );
}


    
   
    
    