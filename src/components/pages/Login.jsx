import { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import useUser from "../../hooks/useUser";
import { Container } from "../ui/Container";
import { Password } from "../ui/Password";

export const Login = () => {
  const history = useHistory();
  const { login } = useUser();
  const { toast, setToast } = useContext(AppContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const obj = {
      email: username.value,
      password: password.value,
    };
    login(obj)
      .then((data) => {
        const { token } = data;
        localStorage.setItem("token", token);
        history.push("/home");
      })
      .catch((err) => {
        setToast({
          ...toast,
          visible: true,
          message: err.status,
          type: "danger",
        });
      });
  };

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <div className="w-100 text-center">
          <img src="/src/assets/med.png" width="200" height="150" />
          <h3 className="text-black">INICIAR SESION</h3>
        </div>

        <div className="form-group">
          <label htmlFor="usuario" className="text-dark">
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
        <Password
          identifier="password"
          placeholder="Digite su contraseña"
          label="Contraseña"
        />
        <div className="mt-2 mb-3 text-center">
          <Link to="/register">¿Olvidaste tu contraseña?</Link> <br />
          <strong>¿No tienes cuenta?</strong> &nbsp;
          <Link to="/register">regístrese</Link>
          <br />
        </div>
        <div className="w-100 text-center">
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </div>
      </form>
    </Container>
  );
};
