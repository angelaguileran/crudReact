const Buscador = ({ search, onChange }) => {
  return (
    <>
      <form className="d-flex text-white" role="search">
        <input
          className="form-control mb-3"
          type="search"
          placeholder="Filtrar"
          aria-label="Search"
          value={search}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default Buscador;
