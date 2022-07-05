import { Link } from 'react-router-dom';
import './card-component.scss';

function Card({details, index}){
    return(
        <div className='col'>
            <div className="card pt-3 bg-transparent ps-3 d-flex imageProperties" key={index}>
                <img src={details.product_image_URL} className="card-img-top img-fluid rounded bg-transparent" alt="Card Image" />
                <div className='card-body'>
                    <p className='h5 card-title text-center'>{details.product_name}</p>
                    <p className='card-text text-center'>{details.product_description }</p>
                    <Link className='text-center linkConfiguration text-info' to={details.product_image_URL}>Veja Mais</Link>
                    <p className='text-end'>{details.product_price} €</p>
                </div>
            </div>
        </div>
    )
}

export default Card;