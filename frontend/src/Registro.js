import React, { useState } from "react";
import axios from "axios";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    mail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir edad a número
    const dataToSend = {
      ...formData,
      edad: Number(formData.edad), // Convertimos edad a número
    };

    try {
      const response = await axios.post("http://localhost:8080/user/register", dataToSend);
      console.log("Registro exitoso:", response.data);
      // Aquí puedes manejar el resultado de la solicitud, como mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error en el registro:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Apellido:</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
        </div>
        <div>
          <label>Edad:</label>
          <input type="number" name="edad" value={formData.edad} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Registro;
