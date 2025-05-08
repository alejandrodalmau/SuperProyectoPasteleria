import React, {useState,useEffect} from 'react';
import axios from 'axios';
import NovedadIdem from '../componentes/novedades/NovedadItem';

const Novedades=(props)=>{
    const [loading,setLoading]=useState(false);
    const [novedades,setNovedades]=useState([]);

    useEffect(()=>{
        const cargarNovedades=async()=>{
            setLoading(true);
            const response=await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);  };

        cargarNovedades();
        },[]);
        return(
           <section className='holder'>
                 <h2>novedades</h2>
                 {
                    loading ? (
                        <p> cargando ....</p>
                    ) : (
                        novedades.map(item=> <NovedadIdem key={item.id} title={item.titulo} subtitle={item.subtitulo} imagen={item.imagen} body={item.novedad}/>)

                    )}

           </section>
);}




export default Novedades;
