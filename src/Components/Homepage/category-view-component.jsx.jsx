import Card from '../Card/card-component.jsx';
import { ProductDetail } from '../Products/product-db.jsx';

function CategoryView({x}){

    let product = [];

    function singleProduct(product_type_code) {
        product = ProductDetail.filter((x) =>
            x.product_type_code.includes(product_type_code)
        );

        return product;
    }

    return(
        <div className='container p-3'>
            <h1 className='text-center'>{x.parent_name}</h1>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                        singleProduct(x.product_type_code).map((caracteristics, index) =>
                            <Card details={caracteristics} index={index} />
                    )
                }
            </div>
        </div>
    )
}

export default CategoryView;