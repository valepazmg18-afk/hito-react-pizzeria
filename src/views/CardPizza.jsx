import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import { Link } from "react-router-dom";


export default function CardPizza(props) {
 

  return (
    

    <Card
        className="shadow d-flex flex-column"
        style={{ width: "100%", gap: "10px" }}
        
    >
        <Card.Img
          variant="top"
          src={props.img}
          style={{ height: "250px", width: "100%", objectFit: "cover",}}
        />
        <Card.Body style= {{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          gap: "10px",
          }}
        >
        <Card.Title style={{fontSize: "20px", fontWeight:"400",}}>{props.title}</Card.Title>
        <Card.Text style={{flexGrow: 1, minHeight: "80px", color: "#555",}}>
          {props.description}
        </Card.Text>
        <div style={{flexGrow: 1, fontSize: "16px", color: "#555",}}>
          <ul>{props.ingredients.map((ingredient, indice) => (
            <li key={indice} className="badge bg-dark text-white me-1" style={{fontSize: "12px",}}>
              {ingredient}
            </li>
          ))}</ul>
          </div>
          <Link to={`/pizza/${props.id}`} className="btn btn-outline-dark">Ver Detalles</Link>
        <button onClick={props.onAddToCart} className="btn btn-dark mt-auto">Añadir al Carrito</button>
        
      </Card.Body>
      
    </Card>
  );
}

