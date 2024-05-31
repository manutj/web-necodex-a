import "./App.css";
import React, {useState, useEffect} from 'react'
import axiosInstance from "./config";
import { Container, Row, Col } from "reactstrap";
import DataTable from "./components/table/DataTable";
import ModalForm from "./components/modal/ModalForm";

function App() {

  const [items, setItems] = useState([])

    const getItems = async () => {
        try {
          const res = await axiosInstance.get("/persons")
          setItems(res.data)
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
      getItems();
    }, [])
    

  return (
    <Container className="App">
      <Row>
        <Col>
          <h1>CRUD DE USUARIOS</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable items={items} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ModalForm buttonLabel={'Agregar usuario'}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
