import React, { useState, useEffect } from "react";
import {
  getAllItemsService,
  getOneItemService,
  createItemService,
} from "../services/ItemServices";

import { getAllUserService } from "../services/UserServices";

const Home = () => {
  const [itemsList, setItemsList] = useState([]);
  const token = localStorage.getItem("token");

  

  useEffect(() => {
    const getAllitems = async () => {
      try {
        const response = await getAllItemsService();
        if (response.status === 200) {
          setItemsList(response.data);
        }
      } catch (error) {
        console.log("Hubo un error al obtener los items");
      }
    };

    getAllitems()
  }, []);

  const dataToCreateItem = {
    product_name: "Awesome Granite Bacon",
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    price: 962,
    category: "Kids",
    brand: "Osinski - Prosacco",
    sku: "e9cbfac1-301a-42c3-b94a-711a39dc7ed1",
    image:
      "https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg",
  };

  return (
    <>
      <h1>Home</h1>

      <div className="d-flex flex-row">
        <button
          onClick={async () => {
            try {
              const response = await getAllUserService(token);
              if (response.status === 200) {
                alert("solicitud exitosa, verifica la consola");
                console.log(response.data);
              }
            } catch (error) {
              console.log("Hubo un problema al obtener los usuarios");
            }
          }}
        >
          Ver todos los usuarios en consola
        </button>

        <button
          onClick={async () => {
            try {
              const response = await createItemService(
                token,
                JSON.stringify(dataToCreateItem)
              );
              if (response.status === 200) {
                alert("Solicitud exitosa, revisa la consola");
                console.log(response.data.message);
              }
            } catch (error) {
              console.log("Hubo un error al crear el item");
            }
          }}
        >
          Crear un item en consola
        </button>
      </div>

      <div className="d-flex flex-row flex-wrap justify-content-center">
        {itemsList &&
          itemsList.map((item) => (
            <div className="card" style={{width: '18rem'}} key={item.id}>
            <img
              className="card-img-top"
              style={{ maxHeight: "300px" }}
              src={item.image}
              alt={item.product_name}
            />
            <div className="card-body">
            <h5 className="card-title">{item.product_name}</h5>
            <p className="card-text">{item.description}</p>
            <a
              className="btn btn-primary"
              href="#"
              onClick={async () => {
                try {
                  const response = await getOneItemService(item.id);
                  if (response.status === 200) {
                    alert("Solicitud exitosa, revisa la consola");
                    console.log(response.data);
                  }
                } catch (error) {
                  console.log("Hubo un error al obtener los detalles del item");
                }
              }}
            >
              Ver detalles en consola
            </a>
          </div>
          </div>
          ))}

      </div>
    </>
  );
};

export default Home;
