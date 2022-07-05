import { Link } from 'react-router-dom';
import { ProductDetail} from '../../Products/product-db';
import { ProductType } from '../../Products/product-type-db';
import './navbar-component.scss';

function NavBar(){

    let brands = [];
    let newbrands = [];

    function getBrands(code){
        brands = ProductDetail.filter((brand) => 
            brand.product_type_code.includes(code)
        )

        newbrands = [...new Set(brands.map(data => data.product_brand))];

        return newbrands;
    }

    return(
        <div className='navbarPosition'>
            <nav className="navbar navbar-expand navbarDetail">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                ProductType.map((type, index) =>
                                    <li className="nav-item dropdown borderStyle" key={index}>
                                        <Link className="nav-link dropdown-toggle" to='/ProductView' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">{type.parent_name}</Link>
                                        <ul className="dropdown-menu dropdownDetail pe-5" aria-labelledby="navbarDropdown">
                                            {getBrands(type.product_type_code).map((product, index) =>
                                                <li key={index}>
                                                    <Link className="dropdown-item" to='/ProductView' state={{ code: type.product_type_code, brand: product }}>{product}</Link>
                                                </li>
                                            )}
                                        </ul>      
                                    </li>   
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;