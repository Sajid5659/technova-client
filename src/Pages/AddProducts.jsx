
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const handleAddProduct = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const newProduct = Object.fromEntries(formData.entries())
        console.log(newProduct);

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Product added successfully",
                    showConfirmButton: false,
                    timer: 3000
                });
            }
            form.reset()
            console.log("data after adding product", data);
        })
    };

    return (
        <div className='max-w-[90%] mx-auto py-12'>
            <div className='mt-16'>
                <Link to="/" className='flex items-center gap-2 text-xl font-semibold'> <FaArrowLeftLong />Back to home</Link>
                <div className=''>
                    <div className='max-w-175 mx-auto text-center mb-8'>
                        <h1 className='font-bold text-3xl text-secondary'>Add New Product</h1>
                    </div>
                    <div>
                        <form onSubmit={handleAddProduct} className="fieldset grid gap-6  mx-auto grid-cols-2 bg-blue-50 border-base-300 rounded-box  border p-12">
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Name</label>
                                <input name='name' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Quantity</label>
                                <input name='quantity' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product quantity" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Brand</label>
                                <input name='brand' type="text" className="input border-b-gray-300 w-full" placeholder="Enter brand name" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Category</label>
                                <input name='taste' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product category" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Price</label>
                                <input name='price' type="text" className="input border-b-gray-300 w-full" placeholder="Price per unit" />
                            </div>
                            <div className='flex flex-col'>
                                <label className="label text-lg mb-2 font-medium">Details</label>
                                <input name='details' type="text" className="input border-b-gray-300 w-full" placeholder="Enter product details" />
                            </div>
                            <div className='flex flex-col col-span-2'>
                                <label className="label text-lg mb-2 font-medium">Photo</label>
                                <input name='photo' type="text" className="input border-b-gray-300 w-full" placeholder="Enter photo URL" />
                            </div>
                            <input type="submit" className='btn btn-secondary col-span-2 shadow-none' value="Add Product" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;