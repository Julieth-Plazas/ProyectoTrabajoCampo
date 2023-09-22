import React, { useState, useRef } from 'react'
import register from '../assets/maestra.png'
import { BASE_URL } from '../utils/constants';


const Register = () => {

  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:''
  });
  const [data, setData] = useState({})
  const [showPassword, setShowPassword] = useState(false);

  const formRef = useRef(null); // <-- Aquí está nuestra ref

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });
      const data = await res.json();
      setData(data);
      setAlert(data.message);

      setTimeout(() => {
          setAlert(null);
      }, 3000);

      if (data.success) {
          formRef.current.reset(); // <-- Usamos la ref para resetear el formulario
      }

    } catch (error) {
      setAlert(error.message);
      setTimeout(() => {
          setAlert(null);
      }, 3000);
    }
  }

  return (
    <section class="bg-white min-h-screen flex items-center justify-center">

      <div class=" flex border rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div class="md:block hidden w-1/2">
          <img class="rounded-2xl" src={register} />
        </div>
        <div class="md:w-1/2 px-8 md:px-16 ">
          {alert && (
            <div
              className={`${data.success
                ? 'bg-green-100 border-t border-b border-green-500 text-green-700'
                : 'bg-red-100 border-t border-b border-red-500 text-red-700'
                } px-4 py-3`}
              role="alert"
            >
              <p className="font-bold">{data.success ? 'Success' : 'Error'}</p>
              <p className="text-sm">{alert}</p>
            </div>
          )}
          <h2 class="font-bold text-2xl text-teal-700">Registrar</h2>


          <form ref={formRef} class="flex mt-3 flex-col gap-4"> 
            <input class="p-2  rounded-xl border" type="text" name="firstname" placeholder="Nombre"  required onChange={(e) => {setFormData({...formData, firstname: e.target.value })}}/>
            <input class="p-2  rounded-xl border" type="text" name="lastname" placeholder="Apellido" required onChange={(e) => {setFormData({...formData, lastname: e.target.value})}}/>
            <input class="p-2  rounded-xl border" type="text" name="username" placeholder="Usuario" required onChange={(e)=>{setFormData({...formData, username:e.target.value})}}/>
            <input class="p-2  rounded-xl border" type="email" name="email" placeholder="Email" required onChange={(e) => {setFormData({...formData, email:e.target.value})}}/>

            <div class="relative">
      <input 
        class="p-2 rounded-xl border w-full" 
        type={showPassword ? "text" : "password"} 
        name="password" 
        placeholder="Password" 
        required 
        onChange={(e)=>{setFormData({...formData, password:e.target.value})}}
      />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" height="16" 
        fill="gray" 
        class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" 
        viewBox="0 0 16 16"
        onClick={() => setShowPassword(!showPassword)}
      >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>

            <button class="bg-teal-700 rounded-xl text-white py-2 hover:scale-105 duration-300" onClick={handleSubmit}>Registrar</button>
          </form>
        </div>



      </div>
    </section>
  )
}

export default Register