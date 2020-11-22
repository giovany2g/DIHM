import React from 'react';
import {FormGroup,Jumbotron, Label,Input, Col, Container, Row} from "reactstrap"

const formV = props => {
    return (
        <Container>
            <Jumbotron>
            <FormGroup row >
                <Label style={styles.azul} className ="text-white" sm={12} >Reporte de actividades</Label>
            </FormGroup>

            <FormGroup row>
                <Label  for="Proyecto" className="text-left" sm={2}>Proyecto</Label>
                <Col sm={10}>
                    <Input type="text" name="Proyecto" id="idProyecto" placeholder="" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Empresa" className="text-left" sm={2}>Empresa</Label>
                <Col sm={10}>
                    <Input type="text" name="Empresa" id="idEmpresa" placeholder="" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Datos" className="text-left" sm={2}>Datos de contacto de la empresa</Label>
                <Col sm={10}>
                    <Input type="text" name="Datos" id="idDatos" placeholder="" />
                </Col>
            </FormGroup>

            <FormGroup row>
                <Label style={styles.azul} className ="text-white" sm={12} >Reporte</Label>
            </FormGroup>

            <FormGroup row>
                <Label for="Actividades" className="text-left" sm={2}>Descripción de las actividades</Label>
                <Col sm={10}>
                    <Input type="text" name="Actividades" id="idActividades" placeholder="" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Avances" className="text-left" sm={2}>Avances de las actividades</Label>
                <Col sm={10}>
                    <Input type="text" name="Avances" id="idAvances" placeholder="" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Dificultades" className="text-left" sm={2}>Dificultades presentadas</Label>
                <Col sm={10}>
                    <Input type="text" name="Dificultades" id="idDificultades" placeholder="" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="Comentarios" className="text-left" sm={2}>Comentarios para el asesor</Label>
                <Col sm={10}>
                    <Input type="text" name="Comentarios" id="idComentarios" placeholder="" />
                </Col>
            </FormGroup>
            <Row >            
            <Col sm={9}>
            <button type="button" style = {styles.btnCustom} className="btn text-center text-white"> Enviar</button>
            </Col>
            <Col>
            <button type="button" style = {styles.btnCustom} className="btn text-center text-white"> Cancelar</button>
            </Col>
            </Row>  
            </Jumbotron>
        </Container>        
    )
}

export default formV;

const styles ={
    azul:{
        backgroundColor: "#0E153B",
        borderRadius: 20,
        fontSize: 26,
    },
    btnCustom: {
        position: "absolute",
        width: 120,
        height: 40,
        backgroundColor: "#0E153B",
        borderRadius: 14, 
    }
  }