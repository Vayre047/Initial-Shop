import { Link } from 'react-router-dom';
import './card-component.scss';

function Card({details, index}){
    return(
        <div className='col'>
            <div className="card pt-3 bg-transparent img-fluid pl-3 flex imageProperties" key={index}>
                <img src={details.product_image_URL} className="card-img-top rounded-md bg-transparent" alt="Card Image" />
                <div className='card-body'>
                    <p className='h5 card-title text-center'>{details.product_name}</p>
                    <p className='card-text text-center'>{details.product_description }</p>
                    <Link className='text-center linkConfiguration pt-3 text-sky-300 hover:text-blue-900' to={details.product_image_URL}>Veja Mais</Link>
                    <p className='text-end'>{details.product_price} €</p>
                </div>
            </div>
        </div>
    )
}

export default Card;