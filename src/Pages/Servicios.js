import "../../src/Style/Layout/Servicios.css";
import "../../src/Style/Layout/conocePasteleria.css";
import "../../src/Style/Layout/normalize.css";

const Servicios = (props) => {
    return (
        <>
            <main class="holder">
                <h2>SERVICIOS</h2>
                <div class="servicio">
                    <img src="img/depositphotos_233964718-stock-photo-delicious-sweets-on-wedding-candy.jpg" alt="catering"></img>
                    <div class="info">
                        <h4>Servicio de catering</h4>
                        <p>
                            En LA PASTELERIA PROFESIONAL, me acompaña un equipo de apasionados de la gastronomía
                            comprometidos
                            en crear experiencias culinarias inolvidables. Con 3 años de experiencia, hemos servido a
                            cientos de
                            clientes en una variedad de eventos.
                            Desde bodas románticas hasta eventos corporativos sofisticados, hemos tenido el privilegio de
                            crear
                            momentos inolvidables para nuestros clientes.

                        </p>
                    </div>
                </div>
            </main>
            <main class="holder">
            <div class="servicio">
                <img class="torta" src="img/IMG-20241229-WA0007.jpg" alt="tortas"></img>
                <div class="info">
                    <h4>Tortas</h4>
                    <p>
                        Tortas hechas con amor y los mejores ingredientes, para celebrar tus momentos especiales.
                        La torta perfecta para cualquier ocasión, desde cumpleaños hasta bodas.

                    </p>
                </div>
            </div>
             </main >
            <main class="holder">

                <div class="servicio">
                    <img src="img/regalo.jpeg" alt="empresariales"></img>
                    <div class="info">
                        <h4>Regalos empresariales</h4>
                        <p>
                            <ul>
                                <li>
                                    Asesoramiento personalizado:
                                    Ayuda a tus clientes a elegir los regalos adecuados para cada
                                    ocasión y presupuesto.
                                </li>
                                <li>
                                    Entrega a tiempo: Cumple con los plazos de entrega establecidos.
                                </li>
                                <li>
                                    Facilidad de pago: Ofrece diferentes opciones de pago.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                </main>
                <main class="holder">

                    <div class="servicio">
                        <img class="francesa" src="img/palmeritas-macarrones-pasteleria.jpg "alt="pasteleria francesa" ></img>
                        
                        <div class="info">
                            <h4>Pasteleria francesa</h4>
                            <p>
                                "Descubre la auténtica pastelería francesa en la PASTELERIA PROFESIONAL. Nuestros
                                macarons
                                de sabores únicos te transportarán a París. ¡Visítanos y déjate seducir por su
                                sabor!
                                #macarons #pasteleriafrancesa #paris"

                            </p>
                        </div>
                    </div>

                </main>
            </>
            )

}
export default Servicios;