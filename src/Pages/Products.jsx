import React, { use } from 'react';
import { DataContext } from '../Provider/AuthProvider/DataProvider';
import { FaPlus } from 'react-icons/fa6';
import { Link } from 'react-router';

const Products = () => {
    const { dbUser } = use(DataContext)
    return (
        <div className='mt-16 max-w-[90%] mx-auto' >
            <div >
                <button className='border-l-3 px-2 my-5 font-bold text-lg'>All products</button>

                {
                    dbUser?.role === "admin" && <div className='flex justify-center'>

                        <Link to="/addproducts" className='btn btn-secondary m-5'>< FaPlus />Add Product</Link>
                    </div>
                }
            </div>

        </div>
    );
};

export default Products;