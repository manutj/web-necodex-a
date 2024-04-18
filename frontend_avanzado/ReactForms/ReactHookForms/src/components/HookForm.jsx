import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, Checkbox, Slider } from "antd";

const HookForm = () => {
  const [data, setData] = useState({});

  //Metodos que sirven para manejar formularios (capturar datos y procesarlos para enviarlos)
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();


  //funcion pasada al metodo handleSubmit para setear los datos en un estado
  const onSubmit = (data) => {
    setData(data);
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-900 p-8 border-r border-dashed">
      <div
        className="w-1/2 shadow-lg rounded-md bg-white p-8 flex flex-col"
        style={{ height: "375px" }}
      >
        <h2 className="text-center font-medium text-2xl mb-4">
          React Hook Form
        </h2>

        <form
          className="flex flex-1 flex-col justify-evenly"
          onSubmit={handleSubmit(onSubmit)}
        >
            {/* Los register nos sirven para capturar los datos de los inputs en los formularios */}

            {/* En los register podemos agregar validaciones de diferente indole a los inputs */}


          {/* <input className='border-2 outline-none p-2 rounded-md' placeholder='Name' {...register('name')}/>

            <input placeholder='phone number' className='border-2 outline-none p-2 rounded-md' {...register('phoneNumber', {
                minLength:1, maxLength:8
            })} />   
            <input placeholder='email' className='border-2 outline-none p-2 rounded-md' {...register('email', {
                pattern:{
                    value: /^.*@devf.com$/,
                    message: 'El correo debe terminar con devf.com'
                }
            })}/> 
            <span className='text-sm text-red-700'>
            {errors?.email?.message}
            </span>
            <button type='submit' className='flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900 text-white hover:bg-gray-800'>
                <span>Enviar</span>
            </button> */}

          <Controller
            control={control}
            name="name"
            render={({ field }) => <Input {...field} placeholder="Nombre" />}
          />

          <div>
            <label>Es desarrollador?</label>
            <Controller
              control={control}
              name="isDeveloper"
              render={({ field: { value, onChange } }) => {
                return (
                <Checkbox
                  className="ml-4"
                  checked={value}
                  onChange={(e) => {
                    onChange(e.target.checked);
                  }}
                />
                )
              }}
            />
          </div>

          <div>
            <label>Experiencia en años</label>
            <Controller
              control={control}
              name="experiencia"
              render={({ field }) => (<Slider {...field} />)}
            />
          </div>

          <button type='submit' className='flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900 text-white hover:bg-gray-800'>
                <span>Enviar</span>
            </button> 
        </form>
        <div className="h-4">
          <p>Data: {JSON.stringify(data)}</p>
        </div>
      </div>
    </div>
  );
};

export default HookForm;
