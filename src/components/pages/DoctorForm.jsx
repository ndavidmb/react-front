import React from "react";
import useCrudApi from "../../hooks/useCrudApi";

export const DoctorForm = ({ closeModal, edit }) => {
  const [specialties, setSpecialties] = React.useState([]);
  const { getAll } = useCrudApi("specialty");
  const { create, update } = useCrudApi("doctor");

  React.useEffect(() => {
    getAll()
      .then(({ data }) => {
        setSpecialties(data);
        const sel = document.querySelector("#specialty");
        sel.value = edit?.obj?.idEspecialidad;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const { name, surname, specialty } = e.target;
    const obj = {
      nomDoctor: name.value,
      apellDoctor: surname.value,
      idEspecialidad: specialty.value,
    };

    if (edit?.edit) {
      obj.id = edit.obj.idDoctor;
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

  return (
    <>
      <h3 className="title">Crear doctor</h3>
      <div className="body">
        <form onSubmit={handleForm}>
          <div className="d-flex">
            <div className="w-50 pe-1">
              <label htmlFor="name" className="form-label">
                Nombre del doctor
              </label>
              <input
                name="name"
                defaultValue={edit?.obj?.nomDoctor}
                className="form-control"
                id="name"
              />
            </div>
            <div className="w-50 ps-1">
              <label htmlFor="surname" className="form-label">
                Apellidos del doctor
              </label>
              <input
                defaultValue={edit?.obj?.apellDoctor}
                className="form-control"
                id="surname"
                name="surname"
              />
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="specialty" className="form-label">
              Especialidad
            </label>
            <select className="form-select" name="specialty" id="specialty">
              <option value={null}>Ninguno</option>
              {specialties.map((specialty) => (
                <option
                  key={specialty.idEspecialidad}
                  value={specialty.idEspecialidad}
                >
                  {specialty.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="w-100 mt-2 text-end">
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
