import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Formulario({ onSubmit, setAlert }) {
  const [worker, setWorker] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      worker.nombre === "" ||
      worker.correo === "" ||
      worker.edad === "" ||
      worker.cargo === "" ||
      worker.telefono === ""
    ) {
      setAlert({
        error: true,
        msg: "Todos los campos son obligatorios",
        color: "danger",
      });
      return;
    }

    onSubmit(worker);
    setAlert({
      error: false,
      msg: "Trabajador agregado con exito",
      color: "success",
    });
  };

  const handleChange = (e) => {
    const newWorker = { ...worker };
    newWorker[e.target.name] = e.target.value;
    setWorker(newWorker);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre."
            name="nombre"
            onChange={handleChange}
            value={worker.nombre}
          />

          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo."
            name="correo"
            onChange={handleChange}
            value={worker.correo}
          />

          <Form.Label>Edad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu edad."
            name="edad"
            onChange={handleChange}
            value={worker.edad}
          />

          <Form.Label>Cargo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu cargo."
            name="cargo"
            onChange={handleChange}
            value={worker.cargo}
          />

          <Form.Label>Telefono</Form.Label>
          <Form.Control
            placeholder="Ingresa tu telefono."
            name="telefono"
            onChange={handleChange}
            value={worker.telefono}
          />

          <Button variant="primary" type="submit" className="mt-3 w-100">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default Formulario;
