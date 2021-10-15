import React from "react";
import useCrudApi from "../../hooks/useCrudApi";

export const SpecialtyForm = ({ closeModal, edit }) => {
  const { create, update } = useCrudApi("specialty");
  const [editable, setEditable] = React.useState(edit);

  React.useEffect(() => {
    console.log(edit);
    setEditable(edit);
    console.log(editable);
    console.log(!!editable);
  }, [edit]);

  const handleForm = (e) => {
    e.preventDefault();
    const { name } = e.target;
    const obj = {
      nomEspecialidad: name.value,
    };
    if (editable?.edit) {
      obj.id = editable.obj.idEspecialidad;
      update(obj)
        .then(() => {
          closeModal();
        })
        .catch(console.error);
      return;
    }

    create(obj)
      .then(() => {
        closeModal();
      })
      .catch((err) => {
        console.log("failed", err);
      });
  };

  const Label = () => {
    return Object.keys(editable).length === 0 ? "Crear" : "Editar";
  };

  return (
    <>
      <h3 className="title">{Label()} especialidad</h3>
      <div className="body">
        <form onSubmit={handleForm}>
          <div className="mt-2">
            <label htmlFor="name" className="form-label">
              Nombre de la especialidad
            </label>
            <input
              name="name"
              defaultValue={editable?.obj?.nombre}
              className="form-control"
              id="name"
            />
          </div>
          <div className="w-100 mt-2 text-end">
            <button type="submit" className="btn btn-primary">
              {Label()}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
