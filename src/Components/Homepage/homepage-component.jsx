import { ProductType } from '../Products/product-type-db.jsx';
import CategoryView from './category-view-component.jsx.jsx';
import './homepage-component.scss';

function Homepage(){
    return(
        <div>
            {
                ProductType.map((x) => 
                    <CategoryView x={x} />
                )    
            }
        </div>
    )
}

export default Homepage;