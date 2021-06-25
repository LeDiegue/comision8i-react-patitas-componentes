function Card(props){
    console.log("props", props);

    return(
        <div class="card col-4">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.titulo}</h5>
                <p class="card-text">{props.contenido}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;