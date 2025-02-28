import "../../src/Style/Layout/conocePasteleria.css";
import "../../src/Style/Layout/normalize.css";

const Conoceme=(props)=>{
    return(
       <>
       <main class="holder">
        <div class="todo">
            <div class="historia">
                <h2><strong>historia</strong></h2>
                <p class="letras">
                    "Soy Yamila, una apasionada pastelera con 10 años de experiencia. Me encanta crear postres
                    personalizados y únicos que deleitan el paladar y la vista."
                    "Mi especialidad son las tortas elaboradas con ingredientes frescos y de alta calidad. Cada
                    creación es una obra de arte hecha con mucho amor."
                    "Ofrezco servicios de repostería para todo tipo de eventos, desde bodas y cumpleaños hasta eventos
                    corporativos. ¡Contacta conmigo para hacer de tu ocasión especial algo inolvidable!"
                </p>

            </div>
            <div class="cosas">
                <img src="img/20180621_104938.jpg" alt="yo"></img>
            </div>
        </div>


    </main>
       
       
       </>

    )
}
export default Conoceme;