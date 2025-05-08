import React from 'react';

const NovedadItem=(props)=>{
    const{ title,subtitle,imagen,Novedad}=props;
    return(
        <div className='novedades'>
             <h1>{title}</h1>
             <h2>{subtitle}</h2>
             <img src={imagen}/>
             <div dangerouslySetInnerHTML={{__html:Novedad}}/>
             <hr/>

        </div>
    );
} 

export default NovedadItem;