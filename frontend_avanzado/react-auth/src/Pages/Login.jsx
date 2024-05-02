import React from "react";
import logo from "@/assets/react.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUserService } from "@/services/UserServices";
import { useAuthContext } from "@/context/UseAuthContextProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const { login } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data);
      if (response.status === 200) {
        navigate('/')
        console.log("Usuario autenticado correctamente");
        login(response.data.token);
      }
    } catch (error) {
      console.log("Ocurrio un error al ingresar");
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
    <form onSubmit={handleSubmit(onSubmit)}>
      <img className="mb-4" src={logo} alt="logo" width={70} height={60} />
      <h1 className="h3 mb-3 fw-normal">Ingresar</h1>
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

      <button className="btn btn-primary w-100 py-2" type="submit">Ingresar</button>
    </form>
    </main>
  );
};

export default Login;
