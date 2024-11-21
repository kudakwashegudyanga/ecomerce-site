import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { useState } from 'react';

const Navbar = () => {
    const { user, logout } = useUserStore();
    const isAdmin = user?.role === "admin";
    const { cart } = useCartStore();
    const navigate = useNavigate();
    const userInitials = user?.email?.substring(0, 2).toUpperCase();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
            <div className='container mx-auto px-4 py-3 flex justify-between items-center'>
                <Link to='/' className='text-2xl font-bold text-emerald-400 items-center space-x-2 flex'>
                    E-Commerce
                </Link>

                <div className="flex items-center"> {/* Container for Menu and Initials */}
                    <button className="lg:hidden mr-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu size={24} className="text-gray-300 hover:text-emerald-400" />
                    </button>
                    {user && (
                        <div className='bg-emerald-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center cursor-pointer lg:hidden' title='View Profile' onClick={() => navigate("/profile")}>
                            {userInitials}
                        </div>
                    )}
                </div>


                <nav className='hidden lg:flex flex-wrap items-center gap-4'>
                    {/* ... (rest of your desktop nav remains the same) ... */}

					<nav className='hidden lg:flex flex-wrap items-center gap-4'>
                <Link to={"/"} className='text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'>Home</Link>
                {user && (
                    <Link to={"/cart"} className='relative group text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out'>
                        <ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
                        <span className='hidden sm:inline'>Cart</span>
                        {cart.length > 0 && (
                            <span className='absolute -top-2 -left-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400 transition duration-300 ease-in-out'>
                                {cart.length}
                            </span>
                        )}
                    </Link>
                )}
                {isAdmin && (
                    <Link className='bg-emerald-700 hover:bg-emerald-600 text-white px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out flex items-center' to={"/secret-dashboard"}>
                        <Lock className='inline-block mr-1' size={18} />
                        <span className='hidden sm:inline'>Dashboard</span>
                    </Link>
                )}
                {user ? (
                    <div className='flex items-center gap-4'>
                        <button className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out' onClick={logout}>
                            <LogOut size={18} />
                            <span className='hidden sm:inline ml-2'>Log Out</span>
                        </button>
                        <div className='bg-emerald-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center cursor-pointer' title='View Profile' onClick={() => navigate("/Profile")}>
                            {userInitials}
                        </div>
                    </div>
                ) : (
                    <>
                        <Link to={"/signup"} className='bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
                            <UserPlus className='mr-2' size={18} />
                            Sign Up
                        </Link>
                        <Link to={"/login"} className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out'>
                            <LogIn className='mr-2' size={18} />
                            Login
                        </Link>
                    </>
                )}
            </nav>
                </nav>


                <div className={`absolute top-full left-0 right-0 mx-auto bg-gray-900 w-full max-w-xs lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}> {/*Centered Mobile Menu*/}
                    <nav className='p-4 flex flex-col items-center justify-center'>
                        <Link to={"/"} className='text-gray-300 hover:text-emerald-400 block py-2 w-full text-center'>Home</Link>
                        {user && <Link to={"/cart"} className='text-gray-300 hover:text-emerald-400 block py-2 w-full text-center'>Cart</Link>}
                        {isAdmin && <Link to={"/secret-dashboard"} className='text-gray-300 hover:text-emerald-400 block py-2 w-full text-center'>Dashboard</Link>}
                        {user ? (
                            <>
                                <button className='bg-gray-700 hover:bg-gray-600 text-white block py-2 px-4 w-full text-center'>Log Out</button>
                                <button className='bg-emerald-600 hover:bg-emerald-700 text-white block py-2 px-4 w-full text-center'>Profile</button>
                            </>
                        ) : (
                            <>
                                <Link to={"/signup"} className='bg-emerald-600 hover:bg-emerald-700 text-white block py-2 px-4 w-full text-center'>Sign Up</Link>
                                <Link to={"/login"} className='bg-gray-700 hover:bg-gray-600 text-white block py-2 px-4 w-full text-center'>Login</Link>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;