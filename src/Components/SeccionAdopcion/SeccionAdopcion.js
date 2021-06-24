import Card from './../Card/Card';
import Pagination from './../Pagination/Pagination';

function SeccionAdopcion(){
    return(
        <div className="row mt-5">
            <Card />
            <Card />
            <Card />

            <Pagination />
        </div>
    );
}

export default SeccionAdopcion;