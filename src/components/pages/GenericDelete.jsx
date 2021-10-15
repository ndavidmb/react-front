import React from "react";

export const GenericDelete = ({ id, remove, closeModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    remove(id)
      .then(() => {
        closeModal();
      })
      .catch(console.error);
  };

  return (
    <>
      <h3 className="title">Eliminar registro</h3>
      <div className="body">
        <form onSubmit={handleSubmit}>
          <p className="text-center">
            ¿Esta seguro que desea eliminar el registro? <br />
            Esta acción no tiene reversa
          </p>

          <div className="text-end w-100">
            <button className="btn btn-light me-1" onClick={() => closeModal()}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-danger ms-1">
              Eliminar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
