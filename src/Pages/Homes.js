import "../../src/Style/Layout/normalize.css";
import "../../src/Style/Layout/Homes.css";
const Homes = (props) => {
    return (
        <>
            <main class="holder">
                <div class="ima">
                    <img class="pastelito" src="img/IMG-20241229-WA0004.jpg" alt="pastel"></img>
                </div>
                <div class="columnas">
                    <section class="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <div class="texto">
                            <p2>
                                ¡Bienvenido a Mi Pasteleria!

                                Aquí encontrarás una variedad de pasteles hechos con mucho amor
                                y los mejores ingredientes, para endulzar tus momentos especiales.
                                Desde clásicos irresistibles hasta creaciones únicas,tenemos el
                                pastel perfecto para ti.Descubra un mundo de sabores exquisitos.
                                Nuestra selección de pasteles artesanales, elaborados con ingredientes
                                de primera calidad,deleitará su paladar y hará de cada ocasión un
                                evento inolvidable.
                            </p2>
                        </div>
                    </section>
                    
                </div>
            </main>
        </>
    )
}
export default Homes;