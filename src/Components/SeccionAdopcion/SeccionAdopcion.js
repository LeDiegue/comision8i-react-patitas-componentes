import Card from './../Card/Card';
import Pagination from './../Pagination/Pagination';

function SeccionAdopcion(){
    let cards = [{
        titulo: 'Felix',
        contenido: 'lorem impsun',
        img: 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg'
    },{
        titulo: 'Momo',
        contenido: 'un poco mas de lorem impsun',
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*'
    },{
        titulo: 'Guapisimo',
        contenido: 'mas de mas lorem impsun',
        img: 'https://assets.entrepreneur.com/content/3x2/2000/1623694949-Jun14MemeDogerompercordvendidoNFT4millonesdedlaresPORT.jpg?width=700&crop=2:1'
    }];

    return(
        <div className="row mt-5">
            {cards.map((item, index) => (
                <Card key={index} titulo={item.titulo} contenido={item.contenido} img={item.img} />
            ))}
            
            <Pagination />
        </div>
    );
}

export default SeccionAdopcion;