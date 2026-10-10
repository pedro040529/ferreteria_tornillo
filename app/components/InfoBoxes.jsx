import { FaBoxes, FaClipboardList, FaWhatsapp } from 'react-icons/fa';
import InfoBox from './InfoBox';

const InfoBoxes = () => {
    return (
        <section className='bg-gray-50 py-6'>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg'>

                    <InfoBox
                        heading='Precios y stock al día'
                        icon={FaBoxes}
                        backgroundColor='bg-blue-100'
                        buttonInfo={{
                            text: 'Ver catálogo',
                            link: '/catalogo',
                            backgroundColor: 'bg-blue-600',
                        }}
                    >
                        Consulta qué tenemos y a qué precio, sin esperar respuesta por WhatsApp.
                    </InfoBox>

                    <InfoBox
                        heading='Cotiza sin llamar'
                        icon={FaClipboardList}
                        backgroundColor='bg-orange-100'
                        buttonInfo={{
                            text: 'Armar cotización',
                            link: '/cotizacion',
                            backgroundColor: 'bg-orange-500',
                        }}
                    >
                        Agrega productos a tu lista y envíala. Ideal para contratistas y listas de materiales.
                    </InfoBox>

                    <InfoBox
                        heading='Atención personalizada'
                        icon={FaWhatsapp}
                        backgroundColor='bg-gray-100'
                        buttonInfo={{
                            text: 'Contáctanos',
                            link: '/contacto',
                            backgroundColor: 'bg-black',
                        }}
                    >
                        Un equipo con 18 años de experiencia para aconsejarte en tu proyecto.
                    </InfoBox>
                </div>
            </div>
        </section>
    );
};

export default InfoBoxes;
