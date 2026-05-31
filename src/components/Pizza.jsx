import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Pizza() {

    const {id} = useParams();
    console.log(id);

    const [pizza, setPizza] = useState(null);
    

  useEffect(() => {
     const getPizza = async () => {
    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setPizza(data);
  };
    getPizza();
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }


return (
    <>
        <div key={id} className="pizza-container my-5 py-5 ">
        <h2 className="text-center mb-4 shadow ">Nuestras Pizzas</h2> 
            <div className="row g-0 shadow mx-auto d-flex justify-content-center" style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", width: "350px", height:"650px" }}>
                {pizza && (
                <div className="col-md-4 mx-auto d-flex justify-content-center flex-column flex-grow-1 gap-3" key={pizza.id}>
                    <img src={pizza.img} alt={pizza.name} className="card-img-top" style={{ height: "250px", width: "330px", objectFit: "cover",}}/>
                    <p className="card-text" style={{ flexGrow: 1, minHeight: "80px", color: "#555", fontSize: "16px",}}>
                        {pizza.desc}
                    </p>
                    <p className="card-text" style={{flexGrow: 1, fontSize: "16px", color: "#555",}}>
                        <small className="text-muted">Ingredientes: {pizza.ingredients?.join(" , ")}</small>
                    </p>
                    <p>$ {pizza.price.toLocaleString("es-CL")}</p>
                </div>
                )}
            </div>
        </div> 
    </>
  );
}
