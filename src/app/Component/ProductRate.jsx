'use client'

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ProductRate = ({ rate, count }) => {

    // const products = await allProducts();
    // console.log(products.length);

    return (
        <div>
            <div className="flex">
                <Rating style={{ maxWidth: 100 }} value={rate} readOnly /> {count} reviews
            </div>


            {/* Old */}

            {/* <h1 className="my-4 text-center font-bold">Products</h1>
            <div className=" w-11/12 mx-auto grid grid-cols-3 gap-2">
                {
                    products.map((product =>
                        <Product key={product.id} product={product}></Product>
                    ))
                }
            </div> */}
        </div>
    );
};

export default ProductRate;