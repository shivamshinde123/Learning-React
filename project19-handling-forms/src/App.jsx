import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }

  const onSubmit = async (data) => {
    await delay(5) // simulating network delay
    console.log(data)
  }

  return (
    <>
      {isSubmitting ? <div>Loading...</div>: null}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("username", { required: { value: true, message: "This is required field." }, minLength: { value: 3, message: "The length should be between 3 and 8." }, maxLength: { value: 8, message: "The length should be between 3 and 8." } })} placeholder="username" />
          <br />
          {errors.username && errors.username.message}
          <br />
          <input type="password" {...register("password", { required: { value: true, message: "This is required field." } })} placeholder="password" />
          <br />
          {errors.password && errors.password.message}
          <br />
          <input type="submit" value="Submit" disabled={isSubmitting}/>
          
        </form>
      </div>
    </>
  )
}

export default App
