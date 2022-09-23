import { Link } from 'react-router-dom';
import './footer-component.scss';

function Footer(){
    return(
        <div className='text-center'>
            <Link className='footerProperties fst-italic text-grey-400 hover:text-grey-900' to="/">Home</Link>
            <p className="fst-italic sticky-bottom">&copy;All Rights Reserved</p>
        </div>
    )
}

export default Footer;