import React from 'react'
import { EMAIL } from '../utils/constants'
import Gallery from './Gallery'

const Home = () => {
    return (
        <section class="relative py-32 lg:py-36 bg-white">
            <div
                class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">

                {/* <span class="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span> */}
                <div class="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

                    <h1 class="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900">
                        Jardin infantil <span
                            class="text-transparent bg-clip-text bg-gradient-to-br from-teal-500 from-20% via-teal-500 via-30% to-green-600">Generaciones </span>
                        de paz.
                    </h1>
                    <p class="mt-8 text-gray-700" style={{ textAlign: "justify" }}>
                        El JARDÍN INFANTIL “GENERACIONES DE PAZ” fundamenta su formación en principios y valores que privilegian el afecto,
                        el respeto, la tolerancia, la espiritualidad y un proceso cognitivo constructivista en el entendido que el ser humano
                        se forma y construye su futuro desde su nacimiento, en la medida que los ambientes donde crece sean favorables y le permitan
                        potenciar se en todas sus etapas sin forzar procesos.
                    </p>
                    <p class="mt-8 text-gray-700" style={{ textAlign: "justify" }}>
                        La formación en valores desde los primeros años de vida, permite en el niño y la niña el desarrollo autónomo de su identidad,
                        de esta manera a partir de la experiencia cotidiana comprende que cada una de sus acciones produce circunstancias asertivas o
                        negativas que necesariamente deben ser asumidas.
                    </p>

                </div>
                <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                    <img src="https://i.gifer.com/BGzf.gif" alt="Hero image" width="2350" height="3000"
                        class="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96  " />
                </div>
            </div>

        </section>
    )
}

export default Home
