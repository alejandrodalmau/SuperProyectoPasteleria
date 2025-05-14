import "../../src/Style/Layout/normalize.css";
import "../../src/Style/Layout/Contacto.css";
import React,{useState} from 'react';
import axios from 'axios';



const Contacto = (props) => {
    const initialForm={
        nombre:"",
        email:"",
        telefono:"",
        mensaje:""
    }
    const [sending,setSending]=useState(false);
    const [msg,setMsg]=useState('');
    const [formData,setFormData]=useState(initialForm);
    
    const handleChange=e=>{
        const {name,value}=e.target;
        setFormData(oldData=>({
            ...oldData,
            [name]:value 
        }));
    }
    const handleSubmit=async e=>{
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response=await
        axios.post('http://localhost:3000/api/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error===false){
            setFormData(initialForm)
        }
    }

    return (
        <>
            <main class="holder contacto">

                <div class="form">
                    <h3 class="conta">contacto rapido</h3>
                    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                        
                        <p>
                            <label for="nombre">nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="email">email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="telefono">telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="mensaje">mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                         {sending?<p>enviando....</p>:null}
                         {msg?<p>{msg}</p>:null}
                        <p>

                            <input type="submit" value="enviar"></input>
                        </p>
                    </form>
                </div>
                <div class="datos">
                    
                    <h3>tambien puede conectarse con nosotros usando los siguientes medios</h3>
                    <ul >
                        <li><p>EMAIL: yamilanatalihinojosa@gmail</p></li>
                        <li><p>INSTAGRAM: yamila_hinojosa_pasteleria</p></li>
                        <li><p>WHATSAP:2615329742</p></li>
                    </ul>
                </div>


            </main>


        </>

    )
}
export default Contacto;