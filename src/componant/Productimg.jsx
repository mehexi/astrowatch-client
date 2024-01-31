import { useLoaderData } from 'react-router-dom';

const Productimg = () => {
    const product = useLoaderData()
    const { "Product Images": productImages, } = product
    console.log(productImages)

    return (
        <div className='col-span-2 p-9'>
           <img className='w-full h-auto object-cover' src={productImages} alt="" />
        </div>
    );
};

export default Productimg;