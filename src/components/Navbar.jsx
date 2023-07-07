import {Link,useLocation} from 'react-router-dom'

export default function Navbar() {
    let location = useLocation();
    
    const toggleNavbar=()=>{
        document.getElementById('navbar-Compo').classList.toggle("hidden");
    }
    return (
        <>
            <nav className="fixed w-full z-20 top-0 left-0 bg-white border-gray-200 dark:bg-gray-900 shadow-pink-600 shadow-md">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                    <img src="/icon.svg" className="h-8 mr-3" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">iNotebook</span>
                </Link>
                <div className="flex md:order-2">
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden" id="navbar-Compo">
                        <ul className="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" onClick={toggleNavbar} className={`block py-2 pl-3 pr-4 ${location.pathname==="/"?"text-pink-600 font-bold":"text-white"} hover:text-pink-600 hover:font-semibold`}>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={toggleNavbar} className={`block py-2 pl-3 pr-4 ${location.pathname==="/about"?"text-pink-600 font-bold":"text-white"} hover:text-pink-600 hover:font-semibold`}>About</Link>{/* <Link to="/about" onClick={toggleNavbar} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link> */}
                            </li>
                            <li className='flex justify-between'>
                                <Link to="/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</Link>
                                <Link to="/signup" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Signup</Link>
                            </li>
                            {/* <li>     
                                <div className="flex items-center justify-end md:order-2">
                                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="/userIcon.png" alt="user photo"/>
                                    </button>
                                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                        <div className="px-4 py-3">
                                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                        <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                        </div>
                                        <ul className="py-2" aria-labelledby="user-menu-button">
                                            <li>
                                                <a href="#" onClick={toggleNavbar} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
