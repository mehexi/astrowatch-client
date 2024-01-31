import Productimg from '../../componant/Productimg';
import ProductTable from '../../componant/ProductTable';

const ProductDetails = () => {

    return (
        <section className=' mt-32 w-9/12  justify-center  mx-auto grid grid-cols-3'>
           <Productimg></Productimg>
            <ProductTable/>
        </section>
    );
};

export default ProductDetails;