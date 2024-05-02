import React from "react";
import logo from "@/assets/react.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "@/services/UserServices";

const Singup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await registerUserService(data);
      if (response.status === 201) {
        navigate("/login");
        console.log("Usuario creado correctamente");
      }
    } catch (error) {
      console.log("Ocurrio un error al registrarse");
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className="mb-4" src={logo} alt="logo" width={70} height={60} />
        <h1 className="h3 mb-3 fw-normal">Registrarse</h1>

        <div className="form-floating">
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Nombre"
            className="form-control"
            {...register("first_name")}
          />
          <label htmlFor="first_name">Nombre</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Apellido"
            className="form-control"
            {...register("last_name")}
          />
          <label htmlFor="first_name">Apellido</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="gender"
            name="gender"
            {...register("gender")}
          >
            <option value="">Escoger...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
          <label htmlFor="gender">Genero</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            name="email"
            id="emailInput"
            placeholder="name@example.com"
            className="form-control"
            {...register("email")}
          />
          <label htmlFor="emailInput">Correo electronico</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            name="password"
            id="passwordInput"
            placeholder="Contrasena"
            className="form-control"
            {...register("password")}
          />
          <label htmlFor="passwordInput">Contrasena</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Registrarse
        </button>
      </form>
    </main>
  );
};

export default Singup;
