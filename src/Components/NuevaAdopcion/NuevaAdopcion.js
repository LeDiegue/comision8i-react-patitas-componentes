import React, {useState} from "react";

function NuevaAdopcion(props){
    // const [nombre, setNombre] = useState('');

    // const setNombreInput = (event) => {
    //     setNombre(event.target.value);
    //     console.log(nombre);
    // }

    const [mascota, setMascota] = useState({
        titulo: '',
        contenido: '',
        img: ''
    });

    const setMascotaObj = (event) => {
        // console.log('event.target.name', event.target.name);
        console.log('event.target.value', event.target.value);

        setMascota({ ...mascota, [event.target.name]: event.target.value });
    }

    const addCard = () => {
        props.addParentCard(mascota);
        setMascota({
            titulo: '',
            contenido: '',
            img: ''
        });
    }

    return(
        <div className="row mt-5">
            <form >
                <label htmlFor="">Nombre</label>
                <input type="text" value={mascota.titulo} name="titulo" onChange={setMascotaObj} />
                <label htmlFor="">Descripcion</label>
                <input type="text" value={mascota.contenido} name="contenido" onChange={setMascotaObj} />
                <label htmlFor="">Imagen</label>
                <input type="text" value={mascota.img} name="img" onChange={setMascotaObj} />
                <a className="btn btn-primary" onClick={addCard}>Agregar</a>
            </form>
        </div>
    );
}

export default NuevaAdopcion;