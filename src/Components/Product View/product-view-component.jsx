import { ProductDetail } from '../Products/product-db';
import { useLocation } from 'react-router-dom';
import Card from '../Card/card-component';

function ProductView() {
    const location = useLocation();
    const { brand, code } = location.state;
    let products = [];

    function brandDetails() {
        products = ProductDetail.filter((x) =>
            x.product_brand.includes(brand)
        ).filter((y) =>
            y.product_type_code.includes(code)
        )

        return products;
    }


    return (
        <div className='container p-3'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    brandDetails().map((details, index) =>
                        <Card details={details} index={index} />
                    )
                }
            </div>
        </div>
    )
}

export default ProductView;