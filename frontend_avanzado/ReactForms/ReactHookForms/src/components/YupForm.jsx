import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required()


export default function YupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">Firstname</label>
      <input className="border-2 outline-none p-2 rounded-md" {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

    <label htmlFor="age">Age</label>
      <input className="border-2 outline-none p-2 rounded-md" {...register("age")} />
      <p>{errors.age?.message}</p>


      <input type="submit" className='flex justify-center p-2 rounded-md w-1/2 self-center bg-gray-900 text-white hover:bg-gray-800' />
    </form>
  )
}