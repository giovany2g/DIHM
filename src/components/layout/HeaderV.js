import React from 'react';
import './StyleHF.css'
import {Navbar, Col} from "reactstrap"

const headerV = props => {
    return (
        <Navbar style={styles.azul} dark expand="md">
                <Col md = {3}> 
                   <img style={styles.logo} src = {props.image} alt ={props.title} />     
                </Col>
                <Col md = {3}>
                    <button type="button" className="btn btn-link text-white"> REPORTES</button>
                </Col>
                <Col md = {3}>
                    <button type="button" className="btn btn-link text-white"> OFERTA DE PROYECTOS</button>
                </Col>
                <Col md = {3}>
                    <button type="button" className="btn btn-link text-white"> CERRAR SESIÓN</button>
                </Col>
        </Navbar>
    )
}

export default headerV;

const styles ={
    logo: {
       maxWidth:200,
       background: "#F0F4F8",
       border: 3,
       solid: "#0E153B",
       borderRadius: 50,
    },
    azul:{
        backgroundColor: "#0E153B",
    }
  }