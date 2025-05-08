import "../../src/Style/Layout/normalize.css";
import "../../src/Style/Layout/Contacto.css";


const Contacto = (props) => {
    return (
        <>
            <main class="holder contacto">

                <div class="form">
                    <h3 class="conta">contacto rapido</h3>
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
                    
                    <h3>tambien puede conectarse con nosotros usando los siguientes medios</h3>
                    <ul >
                        <div>telefono 2613449520</div>
                        <div>email:yamilanatalihinojosa@gmail.com</div>
                        <div>facebook</div>
                        <div>x</div>
                        <div>instagram</div>
                    </ul>
                </div>


            </main>


        </>

    )
}
export default Contacto;