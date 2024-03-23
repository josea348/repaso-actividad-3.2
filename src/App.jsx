import React, { useState } from 'react';
import './css/App.css';

function App() {
  const [formData, setFormData] = useState({
    pk_cedula_user: '',
    nombre_user: '',
    email_user: '',
    password_user: '',
    descripcion_user: '',
    telefono_user: '',
    rol_user: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/usuario/registrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Usuario registrado exitosamente');
        alert('Usuario registrado exitosamente');
      } else {
        console.error('Error al registrar usuario');
        alert('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error de red: ', error);
      console.log(error);
      alert( "Error de red: ",error.message);
    }
  }

  return (
    <div className='containerPrincipal'>
      <form onSubmit={handleSubmit} className='form-group'>
        <h1 className='title'>Registrar Usuario.</h1>
        <label>Cedula: </label>
        <input type="number" name="pk_cedula_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Usuario: </label>
        <input type="text" name="nombre_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input type="email" name="email_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Contraseña: </label>
        <input type="password" name="password_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Descripción: </label>
        <input type="text" name="descripcion_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Telefono: </label>
        <input type="text" name="telefono_user" className='form-input' onChange={handleChange} />
        <br />
        <label>Fecha nacimiento: </label>
        <input type="date" name="fecha_nacimiento" className='form-date' onChange={handleChange} />
        <br />
        <select name="rol_user" id="rol" className='form-select' onChange={handleChange}>
          <option value="" disabled>Seleccione el Rol del Usuario</option>
          <option value="1">vendedor</option>
          <option value="2">comprador</option>
          <option value="3">admin</option>
        </select>
        <br />
        <button type='submit' className='btn'>Enviar</button>
      </form>
    </div>
  )
}

export default App;