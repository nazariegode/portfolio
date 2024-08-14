import React from 'react';
import MyCard from './card.js';

function Cards() {
    return (
        <div className='container' id='pets'>
            <h2 className="tittle mb-0">SKILLS</h2>
            <div className="row">
                <div className="col-md-5 d-flex py-3">
                    <MyCard
                        url="https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg"
                        titulo="Golden Retriever 🐾"
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-5 d-flex py-3">
                    <MyCard
                        url="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp"
                        titulo="Labrador Retriever"
                        description="El Labrador Retriever es inteligente y versátil, ideal como perro de trabajo o compañía."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-4 d-flex py-3">
                    <MyCard
                        url="https://www.ngenespanol.com/wp-content/uploads/2023/12/descubren-que-los-humanos-influimos-en-el-color-de-ojos-de-los-perros-1280x720.jpg"
                        titulo="Border Collie"
                        description="El Border Collie es altamente energético y necesita mucho ejercicio mental y físico."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-3 d-flex py-3">
                    <MyCard
                        url="https://elarcadelfrances.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-03-12-at-2.03.02-PM-10.jpeg"
                        titulo="Bulldog Francés"
                        description="El Bulldog Francés es pequeño pero robusto, con un carácter alegre y juguetón."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-3 d-flex py-3">
                    <MyCard
                        url="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/razas-de-perros-pastor-aleman-570x455-1.jpg"
                        titulo="Pastor Alemán"
                        description="El Pastor Alemán es una raza versátil y atlética conocida por su lealtad e inteligencia."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-3 d-flex py-3">
                    <MyCard
                        url="https://image.petmd.com/files/styles/978x550/public/2023-01/toy-poodle.jpg"
                        titulo="Poodle"
                        description="Los Poodles son conocidos por su inteligencia excepcional y su pelaje rizado."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-3 d-flex py-3">
                    <MyCard
                        url="https://i0.wp.com/kennelclubargentino.org.ar/storage/2019/08/cachorro-beagle.jpg?fit=769%2C630&ssl=1"
                        titulo="Beagle"
                        description="El Beagle es un perro de tamaño mediano conocido por su nariz aguda y su disposición amistosa."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
                <div className="col-md-3 d-flex py-3">
                    <MyCard
                        url="https://www.tiendanimal.es/articulos/wp-content/uploads/2019/02/foto-raza-perro-chihuahua-1200x900.jpg"
                        titulo="Chihuahua"
                        description="El Chihuahua es una de las razas más pequeñas del mundo, conocido por su tamaño diminuto y personalidad audaz."
                        textbut="¡Elige tu mascota!"
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
