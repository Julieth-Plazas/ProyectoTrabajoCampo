import React, { useState } from "react";
import { BASE_URL } from "../utils/constants";

const RegisterCourses = () => {

    const [data, setData] = useState({})
    const [alert, setAlert] = useState(null);
    const [formData, setFormData] = useState({
        title:'',
        minAge:'',
        maxAge:'',
        description:''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const res = await fetch(`${BASE_URL}/cursos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            console.log(data);
            setData(data);
            if(data.success){
                setFormData({
                    title:'',
                    minAge:'',
                    maxAge:'',
                    description:''
                })
            }
            setAlert(data.message); 

            setTimeout(() => {
                setAlert(null);
            }, 3000);
        } catch (error) {
            setAlert(error.message);
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        }
    }

    return (

        <section className="flex justify-center items-center min-h-screen bg-white">
            
            <form className="bg-gray-100 p-6  rounded-lg shadow-lg w-1/3 ">
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
                <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Registrar Curso</h2>
                <div className="mb-4">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=> {setFormData({...formData, title: e.target.value})}}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rango de Edad</label>
                    <div className="flex items-center mb-4">
                        <label htmlFor="campo1" className="mr-2">Minima:</label>
                        <input type="text" id="campo1" name="campo1" className="border rounded px-2 py-1 w-16" onChange={(e)=>{setFormData({...formData, minAge:e.target.value})}}/>
                        <label htmlFor="campo2" className="mr-2" style={{marginLeft: "15px"}}> Maxima:</label>
                        <input type="text" id="campo2" name="campo2" className="border rounded px-2 py-1 w-16" onChange={(e)=> {setFormData({...formData, maxAge:e.target.value})}}/>
                    </div>

                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => {setFormData({...formData, description: e.target.value})}}></textarea>
                </div>
                <div className="mt-4">
                    <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500" onClick={handleSubmit}>Registrar</button>
                </div>
            </form>
        </section>
    );
}

export default RegisterCourses
