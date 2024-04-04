import React, { useState } from "react";
import Listado from "./components/Listado/Listado";
import Formulario from "./components/Formulario/Formulario";
import { colaboradores } from "./assets/colaboradores";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";

function App() {
  const [workers, setWorkers] = useState(colaboradores);

  const addWorker = (worker) => {
    setWorkers([...workers, worker]);
  };
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: "",
  });

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const workerFilter = workers.filter((worker) => {
    if (
      worker.nombre.toLowerCase().includes(search.toLowerCase()) ||
      worker.correo.toLowerCase().includes(search.toLowerCase()) ||
      worker.edad.toLowerCase().includes(search.toLowerCase()) ||
      worker.cargo.toLowerCase().includes(search.toLowerCase()) ||
      worker.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="m-4">
          <Listado workers={workerFilter} />
        </div>
        <div className="m-4">
          <Buscador search={search} onChange={handleChange} />
          <h3 className="mb-3">Agregar trabajadores</h3>
          <Formulario onSubmit={addWorker} setAlert={setAlert} />
          {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </div>
      </div>
    </>
  );
}

export default App;
