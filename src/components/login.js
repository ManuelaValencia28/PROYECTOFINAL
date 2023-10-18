import React, { useState } from 'react';
import './login.css'; // Importa el archivo CSS
import miImagen from '../Img_proyecto/logo_opalo.png'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuario: ${username}, Contraseña: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={miImagen} alt="Imagen" className="image" />
      </div>
      <div className="form-container">
        <h1 className="title">Inicio de Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username" className="label">
              Nombre de Usuario:
            </label>
            <input
              type="text"
              id="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className="input password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="submit" className="button">
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
