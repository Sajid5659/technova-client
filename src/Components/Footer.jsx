import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gray-800 text-white rounded p-8 lg:p-10">
            <nav className="grid grid-flow-col gap-4">
                <ul className="flex gap-2 lg:gap-6 font-semibold text-lg">
                    <li><Link className="text-white hover:text-blue-500" to="/">Home</Link>
                    </li>
                    <li><Link className="text-white hover:text-blue-500" to="/products">Products</Link></li>
                    <li><Link className="text-white hover:text-blue-500" to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <nav>
                <h1 className="text-xl py-2">Contact info :</h1>
                <div className="flex gap-5">
                    <a target="_blank" href="https://www.facebook.com/people/C-ElevenBd/61573729561342/"><FaFacebook size={28} /></a>
                    <a target="_blank" href="https://www.instagram.com/c_eleven_bd"><FaInstagram size={28} /></a>
                    <a target="_blank" href="https://www.tiktok.com/@celevenbd?_r=1&_d=secCgYIASAHKAESPgo8PQsa2HqHBaVlqDyfYbO%2F4O3HEtXw%2BJIrPjdbiA8uIUa1QyOrKfvGYRHg1sddnDjp9JDM8MS2tyW7OiIqGgA%3D&_svg=1&checksum=3a6744556fb701fe8faa9e3aa639df3dc257ba9465c625253f175760bc3d6fde&item_author_type=1&sec_uid=MS4wLjABAAAAW6O5m_wsoG2OIUfuxdiomOoERMyZWi_nfbxDzNn5k6LHxiyT7DxckPZxTeWP7kmC&sec_user_id=MS4wLjABAAAAW6O5m_wsoG2OIUfuxdiomOoERMyZWi_nfbxDzNn5k6LHxiyT7DxckPZxTeWP7kmC&share_app_id=1233&share_author_id=7542077144870110228&share_link_id=A9D46435-68F1-4445-955B-FFC25546F364&share_region=BD&share_scene=1&sharer_language=en&social_share_type=4&source=h5_m&timestamp=1769021785&tt_from=copy&u_code=em3e498lab631i&ug_btm=b8727%2Cb0&user_id=7542077144870110228&utm_campaign=client_share&utm_medium=ios&utm_source=copy"><FaTiktok size={28} /></a>
                </div>
            </nav>
            <aside>
                <div className="mb-2">
                    &copy; Technova. All rights reserved.
                </div>
                <div className='text-lg'>
                    Meet the <Link to='/developer' className='underline font-bold'>Devs</Link>
                </div>
            </aside>
        </footer>
    );
};

export default Footer