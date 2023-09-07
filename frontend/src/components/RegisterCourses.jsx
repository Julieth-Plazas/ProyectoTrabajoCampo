import React from "react";

const RegisterCourses = () => {

    return (

        <section className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-gray-100 p-6  rounded-lg shadow-lg w-1/3 ">
                <div className="mb-4">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Curso</label>
                    <input type="text" id="large-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rango de Edad</label>
                    <div className="flex items-center mb-4">
                        <label htmlFor="campo1" className="mr-2">Minima:</label>
                        <input type="text" id="campo1" name="campo1" className="border rounded px-2 py-1 w-16" />
                        <label htmlFor="campo2" className="mr-2" style={{marginLeft: "15px"}}> Maxima:</label>
                        <input type="text" id="campo2" name="campo2" className="border rounded px-2 py-1 w-16" />
                    </div>

                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descripcion</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
            </div>
        </section>
    );
}

export default RegisterCourses
