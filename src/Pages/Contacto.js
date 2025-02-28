import "../../src/Style/Layout/normalize.css";
import "../../src/Style/Layout/Contacto.css";


const Contacto = (props) => {
    return (
        <>
            <main class="holder contacto">

                <div class="form">
                    <h2>contacto rapido</h2>
                    <form action="" method="" class="formulario">
                        <p>
                            <label for="nombre">nombre</label>
                            <input type="text" name=""></input>
                        </p>
                        <p>
                            <label for="email">email</label>
                            <input type="text" name=""></input>
                        </p>
                        <p>
                            <label for="telefono">telefono</label>
                            <input type="text" name=""></input>
                        </p>
                        <p>
                            <label for="mensaje">mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>

                            <input type="submit" value="enviar"></input>
                        </p>
                    </form>
                </div>
                <div class="datos">
                    <h2>Otras vias de comunicacion</h2>
                    <p>tambien puede conectarse con nosotros usando los siguientes medios</p>
                    <ul>
                        <li> telefono 2613449520</li>
                        <li>email:yamilanatalihinojosa@gmail.com</li>
                        <li>facebook</li>
                        <li>x</li>
                        <li>instagram</li>
                    </ul>
                </div>


            </main>


        </>

    )
}
export default Contacto;