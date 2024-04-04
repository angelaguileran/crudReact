import React from "react";
import Table from "react-bootstrap/Table";

const Listado = ({ workers }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {workers.map((worker, index) => (
          <tr key={index}>
            <td>{worker.nombre}</td>
            <td>{worker.correo}</td>
            <td>{worker.edad}</td>
            <td>{worker.cargo}</td>
            <td>{worker.telefono}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
