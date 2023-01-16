import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from '@headlessui/react';
import MenuItems from "./menu.json";
const Navbar = () =>{
    const [dropdown,setDropdown] = useState('none');
    const [loginDropdown,setLoginDropdown] = useState('none');
    const location = useLocation();
return(
    <>
    <div className="hidden md:block sm:hidden w-full bg-white shadow py-3 ">
        <div className="container mx-auto px-2 flex items-center justify-between">
            <div className="flex">
                <Link to="/" className="mr-7">
                    <img src="/logo.png" alt="logo" />
                </Link>
                {
                    MenuItems.map((item,index)=>(
                        <Link to={item.path} key={index} className="mx-1">
                            <button className={`border py-1.5 px-4 font-semibold rounded-full hover:bg-[#E8F3FF] transition duration-300 ${item.path === location.pathname ? 'bg-blue-600 text-[#fff] hover:bg-blue-600' : 'text-[#777777] bg-white'}`}>
                                <div className="flex items-center justify-center gap-1">
                                    {item.path === location.pathname ? <img src={item.iconwhite} width="18" height="18" alt={item.icon} /> : <img src={item.icon} width="18" height="18" alt={item.icon} /> }
                                    {item.label}
                                </div>
                            </button>
                        </Link>
                    ))
                } 
                <a href="https://www.bookmyforex.com/" className="mx-1" target="_blank">
                    <button className="border py-1.5 px-4 font-semibold rounded-full bg-white text-[#777777] hover:bg-[#E8F3FF] transition duration-300">
                        <div className="flex items-center justify-center gap-1">
                            <img src="/icons/forex-color.png" width="18" height="18" alt="forex" />
                            Forex
                        </div>
                    </button>
                </a>
            </div>
            <div className="flex gap-5">
                <Menu>
                    <Menu.Button>
                        <Link to='/mytrips'>
                        <button onMouseOver={()=>setDropdown('block')} onMouseOut={()=>setDropdown('none')}>
                            <div className="flex items-center">
                                <div className="mr-2"><img src="/icons/suitcase.png" width="23" height="21" alt="suitcase" /></div>
                                <div className="leading-[15px]">
                                    <p className="text-[10px] text-left" >My Trips</p>
                                    <p className="text-[14px] font-semibold ">Manage Booking</p>                                
                                </div>
                            </div>
                        </button>
                        </Link>
                    </Menu.Button>
                    <Menu.Item> 
                        <div style={{display: dropdown, boxShadow:'rgb(0 0 0 / 50%) 0px 2px 7px 0px'}} className="absolute border mt-[55px] right-[200px] bg-white w-[250px] p-2 rounded-md">
                            <div className="text-[30px] absolute top-[-10px] left-[45%] bg-white p-0 m-0">
                                <img src="/icons/arrow-up-drop.png" width="18" height="18" alt="forex" />                                
                            </div>                             
                            <div className="flex gap-2">
                                <div>
                                    <div className="w-[8px] h-[8px] rounded-full bg-[#00DDB3] mt-1"></div>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#46484D] font-medium">Access your bookings, easy cancellation, date change and much more</p>
                                </div>
                            </div>
                        </div>                       
                    </Menu.Item>
                </Menu>
                <div>
                    <Menu>
                    <Menu.Button>
                    <button  
                        onMouseOver={()=>setLoginDropdown('block')} 
                        className="border border-[#3B77DC] py-1.5 px-2 font-semibold rounded-lg z-10"
                    >
                        <div className="flex items-center justify-center gap-1.5">
                            <img src="/icons/user.png" width="28" height="28" alt="user" />
                            <p className="text-[11px] text-[#2276E3] mr-4">LOGIN / SIGNUP</p> 
                            <img className="mt-[-4px]" src="/icons/down-icon.png" width="10" height="10" alt="down-icon" />
                        </div>
                    </button>
                    </Menu.Button>
                    <Menu.Item> 
                        <div 
                            onMouseOver={()=>setLoginDropdown('block')} onMouseOut={()=>setLoginDropdown('none')} 
                            style={{display: loginDropdown, boxShadow:'rgb(0 0 0 / 50%) 0px 2px 7px 0px'}} 
                            className="absolute border mt-[10px] right-[40px] bg-white w-[250px] p-5 rounded-md z-10"
                        >
                            <div className="text-[30px] absolute top-[-10px] left-[45%] bg-white p-0 m-0">
                                <img src="/icons/arrow-up-drop.png" width="18" height="18" alt="forex" />                                
                            </div>                             
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h4 className="text-[16px] font-semibold text-[#4E525B]">hey Traveller</h4>
                                    <p className="text-[10px] text-[#4E525B]">Get exclusive deals & Manage your trips</p>
                                </div>
                                <div>
                                    <button className=" text-[14px] text-white bg-[#FF6D38] py-2 font-semibold rounded-lg w-full">
                                        Login/Sign Up
                                    </button>
                                </div>
                                <div>
                                    <button className="w-full border-b pb-1 text-left flex items-center">
                                        <div className="mr-5">
                                            <img src="/icons/tribe-small.png" width="20" height="20" alt="tribe-small" />
                                        </div>
                                        <div>
                                            <img src="/icons/gotribe.png" width="50" height="18" alt="gotribe" />
                                            <p className="text-[10px] text-[#4E525B]">Travel more to get enrolled!</p>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="w-full border-b pb-1 text-left flex items-center">
                                        <div className="mr-5">
                                            <img src="/icons/offer-icon.png" width="20" height="20" alt="offer-icon" />
                                        </div>
                                        <div className="leading-4">
                                            <p className="text-[14px] text-[#4E525B] font-semibold">Offers</p>
                                            <p className="text-[10px] text-[#4E525B]">Handpicked best deals</p>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="w-full border-b pb-1 text-left flex items-center">
                                        <div className="mr-5">
                                            <img src="/icons/suitcase.png" width="20" height="20" alt="suitcase" />
                                        </div>
                                        <div className="leading-4">
                                            <p className="text-[14px] text-[#4E525B] font-semibold">My Trips</p>
                                            <p className="text-[10px] text-[#4E525B]">Manage your bookings</p>
                                        </div>
                                    </button>
                                </div>
                                <div>
                                    <button className="w-full pb-1 text-left flex items-center">
                                        <div className="mr-5">
                                            <img src="/icons/gocash-small.png" width="20" height="20" alt="gocash-small" />
                                        </div>
                                        <div className="leading-4">
                                            <p className="text-[14px] text-[#4E525B] font-semibold">goCash</p>
                                            <p className="text-[10px] text-[#4E525B]">Signup to get &#8377; 100 goCash</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>                       
                    </Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>        
    </div>
    </>
);
}
export default Navbar;