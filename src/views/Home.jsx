import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
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
    const res = await fetch('http://localhost:5000/api/pizzas');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizza();
  }, []);

  
  

  return (
    <> 
    <Header/>
    <div className="pizza-container my-5 py-5">
      <h2 className="text-center mb-4 shadow ">Nuestras Pizzas</h2>
        <div className="row">
            {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                  id={pizza.id}
                  title={pizza.name}
                  description={pizza.desc}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  price={pizza.price}
                  onAddToCart={() => addToCart(pizza)}
              /> 
            </div> 
              ))
            }
        </div>
    </div>
    <Footer/>
    </>
  );
}


    
   
    
    