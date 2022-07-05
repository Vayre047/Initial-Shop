import { Link } from 'react-router-dom';
import './footer-component.scss';

function Footer(){
    return(
        <div className='text-center'>
            <Link className='footerProperties fst-italic text-secondary' to="/">Home</Link>
            <p className="fst-italic sticky-bottom">&copy;All Rights Reserved</p>
        </div>
    )
}

export default Footer;