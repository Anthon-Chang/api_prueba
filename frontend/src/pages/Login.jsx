import { useState } from "react"
import { Link } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import Button from '../components/Button';
import "../styles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">

      {/* Imagen */}
      <div
        className="login-image"
        style={{ backgroundImage: "url('https://png.pngtree.com/png-clipart/20220823/original/pngtree-rooted-oak-tree-logo-vector-png-image_8473775.png')" }}
      ></div>

      {/* Formulario */}
      <div className="login-form-container">
        <div className="login-form-box">

          <h1 className="login-title">Bienvenido(a)</h1>
          <p className="login-subtitle">Por favor ingresa tus datos</p>

          <form>
            {/* Correo */}
            <div className="mb-3">
              <label className="login-label">Correo electrónico</label>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="login-input"
              />
            </div>

            {/* Contraseña */}
            <div className="mb-3">
              <label className="login-label">Contraseña</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                  className="login-input"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
            </div>

            <Link to="/dashboard">
              <Button variant="primary">Iniciar sesión</Button>
            </Link>
          </form>

          {/* Separador */}
          <div className="separator">
            <hr />
            <span>O</span>
            <hr />
          </div>

          {/* Google */}
          <Button className="google-btn" variant="secondary"> 
            <img
              className="w-5"
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              width="20"
            />
            Sign in with Google
          </Button>

          {/* Olvidaste contraseña */}
          <div className="mt-5">
            <Link className="login-link" to="/forgot/id">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* Footer links */}
          <div className="login-footer-links">
            <Link className="login-link" to="/">
              Regresar
            </Link>

            <Link to="/register">
              <Button variant="primary" className="register-btn">Registrarse</Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
