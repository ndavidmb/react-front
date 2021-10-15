import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useCrudApi from "../../hooks/useCrudApi";
import { Container } from "../ui/Container";
import { Password } from "../ui/Password";

export const Register = () => {
  const history = useHistory();
  const [insurances, setInsurances] = React.useState([]);
  const { create } = useCrudApi("patient");
  const { getAll } = useCrudApi("insurance");

  React.useEffect(() => {
    getAll()
      .then(({ data }) => {
        setInsurances(data);
      })
      .catch(console.err);
  }, []);
  const handleRegister = (e) => {
    e.preventDefault();
    const { password, password2, email, username, names, surnames, insurance } =
      e.target;
    if (password.value !== password2.value) return;

    const obj = {
      nomPaciente: names.value,
      apellPaciente: surnames.value,
      idSeguro: insurance.value,
      nomUsuario: username.value,
      correo: email.value,
      contra: password.value,
      idPerfil: 1,
    };
    create(obj)
      .then(() => {
        console.log("bien hecho maquina");
        history.push('/');
      })
      .catch(console.error);
  };
  return (
    <Container>
      <form onSubmit={handleRegister}>
        <h1>Registrarse</h1>
        <div className="d-flex justify-content-between">
          <div className="form-group w-50 pe-1">
            <label htmlFor="names" className="text-dark">
              Nombres
            </label>
            <input
              type="text"
              name="names"
              id="names"
              className="form-control"
              placeholder="Digite sus nombres"
            />
          </div>
          <div className="form-group w-50 ps-1">
            <label htmlFor="surnames" className="text-dark">
              Apellidos
            </label>
            <input
              type="text"
              name="surnames"
              id="surnames"
              className="form-control"
              placeholder="Digite sus apellidos"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="form-group w-50 pe-1">
            <label htmlFor="username" className="text-dark">
              Usuario
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Digite su usuario"
            />
          </div>
          <div className="form-group w-50 ps-1">
            <label htmlFor="email" className="text-dark">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Digite su correo"
            />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="profile" className="form-label">
            Seguro
          </label>
          <select className="form-select" name="insurance" id="insurance">
            <option value={null}>Ninguno</option>
            {insurances.map((insurance) => (
              <option key={insurance.idSeguro} value={insurance.idSeguro}>
                {insurance.nombre}
              </option>
            ))}
          </select>
        </div>
        <Password
          label="Contraseña"
          placeholder="Ingrese la contraseña"
          identifier="password"
        />
        <Password
          label="Repita la contraseña"
          placeholder="Repita la contraseña"
          identifier="password2"
        />
        <div className="w-100 text-end mt-2">
          <Link to="/" className="btn btn-light me-1">
            Volver
          </Link>
          <button type="submit" className="btn btn-primary ms-1">
            Registrarme
          </button>
        </div>
      </form>
    </Container>
  );
};
