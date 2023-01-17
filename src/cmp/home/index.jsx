import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import MyListbox from "./select";
import { DatePicker } from 'antd';

const Home = () =>{ 
    const [position, setPosition] = useState("static");
    const handleScroll = (event)=>{
        let scrollTop = window.scrollY;
        scrollTop <= 100 ? setPosition('static') : setPosition('fixed')
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>window.removeEventListener('scroll', handleScroll);
    },[]);

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
return(
<>
<div className="md:hidden sm:block w-full h-[330px] ">
    <div className={`bg-[#FFC24A] p-2 sticky`} style={{position:position}}>
        <a href="https://go.ibi.bo/5fRJdjV8xwb" target="_blank">
        <div className="flex items-center justify-between gap-5">
            <div>
                <img src="/download-icon.gif" alt="download-icon" width="80" height="80" />
            </div>
            <div>
                <p className="text-[14px] font-semibold">Save More on APP!!</p>
                <p className="text-[11px] leading-4">Get INR 1700 DISCOUNT* only on our App. Use Code: GOAPP.</p>
            </div>
            <div>
                <button className="rounded-full bg-[#fff] text-[#F16736] px-6 font-semibold py-0.5">OPEN</button>
            </div>
        </div>
        </a>
    </div>
    <div className="container mx-auto px-2 bg-[#3293FD] py-2 h-[120px] rounded-b-[20px]">
        <div className="flex pt-4">
            <div className="mr-3">
                <img className="border-2 border-[#fff] rounded-full" src="/icons/user.png" alt="user" width="35" height="35" />
            </div>
            <div className="leading-4">
                <p className="text-[12px] font-extrabold text-[#fff]" style={{fontFamily:'Roboto'}}>Welcome Guest</p>
                <button className="text-[11px] font-extrabold bg-[#2A6EBC] text-[#fff] rounded-full px-2"> Login/Sign-up <span className="fa fa-chevron-right"></span></button>
            </div>
        </div>
        <div className="mt-[20px]" style={{position:position}}>
            <div className="flex justify-between ">
                <Link to='/hotels'>
                    <button>
                        <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                            <div className="mb-2 w-[30px] h-[30px]">
                                <img src="/svg/hotel.svg" alt="hotels" width='30' height='30' />
                            </div>
                            <p className="text-[12px] font-semibold">Hotels</p>
                        </div>
                    </button>
                </Link>
                <Link to='/flights'>
                    <button>
                        <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                            <div className="mb-2 w-[30px] h-[30px]">
                                <img src="/svg/airplane.svg" alt="airplane" width='30' height='30' />
                            </div>
                            <p className="text-[12px] font-semibold">Flights</p>
                        </div>
                    </button>
                </Link>
                <Link to='/trains'>
                    <button>
                        <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                            <div className="mb-2 w-[30px] h-[30px]">
                                <img src="/svg/train.svg" alt="train" width='30' height='30' />
                            </div>
                            <p className="text-[12px] font-semibold">Trains</p>
                        </div>
                    </button>
                </Link>
                <Link to='/bus'>
                    <button>
                        <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                            <div className="mb-2 w-[30px] h-[30px]">
                                <img src="/svg/bus.svg" alt="bus" width='30' height='30' />
                            </div>
                            <p className="text-[12px] font-semibold">Bus</p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        <div className="flex mt-[10px] justify-between items-center bg-[#fff] rounded-b-[20px]">
        <Link to='/hotels'>
                <button>
                    <div className="py-[10px] px-[18px] w-[75px] mx-auto">
                        <div className="mb-2 w-[30px] h-[30px]">
                            <img src="/svg/hoverly-stay.svg" alt="hoverly-stay" width='30' height='30' />
                        </div>
                        <p className="text-[12px]  leading-[15px]">Hourly Stays</p>
                    </div>
                </button>
            </Link>
            <Link to='/cabs'>
                <button>
                    <div className="py-[10px] px-[18px] w-[75px]">
                        <div className="mb-2 w-[30px] h-[30px] mx-auto">
                            <img src="/svg/airport-cab.svg" alt="airport-cab" width='30' height='30' />
                        </div>
                        <p className="text-[12px]  leading-[15px]">Airport Cabs</p>
                    </div>
                </button>
            </Link>
            <Link to='/cabs'>
                <button>
                    <div className="py-[10px] px-[18px] w-[75px]">
                        <div className="mb-2 w-[30px] h-[30px] mx-auto">
                            <img src="/svg/intercity-cab.svg" alt="intercity-cab" width='30' height='30' />
                        </div>
                        <p className="text-[12px]  leading-[15px]">Intercity Cabs</p>
                    </div>
                </button>
            </Link>
            <a href="https://www.bookmyforex.com/" target="_blank">
                <button>
                    <div className="py-[10px] px-[18px] w-[75px]">
                        <div className="mb-2 w-[30px] h-[30px] mx-auto">
                            <img src="/svg/forex.svg" alt="forex" width='30' height='30' />
                        </div>
                        <p className="text-[12px]  leading-[15px]">Forex Card</p>
                    </div>
                </button>
            </a>
        </div>
    </div>
</div>
<div className="bg-[#EEF2F8]">
<div className="w-full min-h-full h-[450px] ">
    <div className="bg-[#3B77DC] h-[250px]">
        <div className="container mx-auto px-10 py-5">
                <div className="text-center">
                    <h1 className="text-[22px] font-semibold text-white tracking-wide">Domestic and International Flights</h1>
                </div>
                <div className="bg-[#fff] rounded-[20px] my-5 p-5 drop-shadow-lg">
                    <div className="flex gap-5 text-[#777777] text-[16px] font-semibold">
                        <button className="bg-[#E8F3FF] px-4 py-1.5 rounded-full text-[#2274E0]">
                            <input type="radio" checked value="One-way" /> <span className="ml-2">One-way</span>
                        </button>
                        <button className="px-4 py-1.5 rounded-full">
                            <input type="radio" value="Round-trip" /> <span className="ml-2">Round-trip</span>
                        </button>
                        <button className="px-4 py-1.5 rounded-full">
                            <input type="radio" value="Multi-city" /> <span className="ml-2">Multi-city</span>
                        </button>
                    </div>
                    <div className="py-5 flex gap-2 ">
                        <div className="w-[250px] ">
                            <fieldset className="border-[2.5px] p-5 rounded-lg hover:border-[#777777]">
                                <legend className="bg-[#fff] p-1">From</legend>
                                <div>
                                    <MyListbox />
                                </div>
                            </fieldset>
                        </div>
                        <div className="w-[250px] relative">
                            <fieldset className="border-[2.5px] p-5 rounded-lg hover:border-[#777777]">
                                <legend className="bg-[#fff] p-1">To</legend>
                                    <div>
                                        <MyListbox />
                                    </div>
                            </fieldset>
                        </div>
                        <div className="absolute left-[245px] top-[110px] ">
                            <button className="items-center flex justify-center w-[38px] h-[38px] bg-[#ffff] rounded-lg drop-shadow-md p-2">
                                <img src="svg/swap.svg" alt="swap" />
                            </button>
                        </div>
                        <div>
                            <button className="w-[150px] text-left">
                                <fieldset className="border-[2.5px] p-4 rounded-lg hover:border-[#777777]">
                                    <legend className="bg-[#fff] p-1">Departure</legend>
                                        <DatePicker onChange={onChange} />
                                </fieldset>
                            </button>
                        </div>
                        <div>
                            <button className="w-[150px] text-left">
                                <fieldset className="border-[2.5px] p-1 rounded-lg hover:border-[#777777]">
                                    <legend className="bg-[#fff] p-1">Return</legend>
                                        <p className="text-[12px] ">click to add a return flight for better discounts</p>
                                </fieldset>
                            </button>
                        </div>
                        <div>
                            <button className="w-[350px] text-left">
                                <fieldset className="border-[2.5px] p-2.5 rounded-lg hover:border-[#777777]">
                                    <legend className="bg-[#fff] p-1">Travellers & Class</legend>
                                        <p>1 Adult</p>
                                        <p className="text-[11px] ">Economy</p>
                                </fieldset>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-0.5 items-center text-[#777777] text-[12px] mb-10" style={{fontFamily:"'Helvetica Neue',sans-serif"}}>
                        <div className="w-[70px]">
                            <p>Select A Fare Type:</p>
                        </div>
                        <button className="bg-[#E8F3FF] p-4 rounded-l-lg text-[#2274E0]">
                            <input type="radio" checked value="regular" /> <span>Regular</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 ">
                            <input type="radio" value="armed-forces"/> <span>Armed Forces</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 ">
                            <input type="radio" value="senior-citizen" /> <span>Senior Citizen</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 ">
                            <input type="radio" value="student" /> <span>Student</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 ">
                            <input type="radio" value="doctor-nurses" /> <span>Doctors and Nurses</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 rounded-r-lg">
                            <input type="radio" value="extra seat" /> <span>Extra Seat</span>
                        </button>
                        <div className="w-[70px] border-l mx-5 pl-1">
                            <p>Recent Searches:</p>
                        </div>
                        <button className="bg-[#F2F2F2] p-4 ">
                            <input type="radio" value="doctor-nurses" /> <span>Doctors and Nurses</span>
                        </button>
                        <button className="bg-[#F2F2F2] p-4 rounded-r-lg">
                            <input type="radio" value="extra seat" /> <span>Extra Seat</span>
                        </button>
                    </div>
                    <div className="absolute left-[40%] mt-[-10px]">
                        <button 
                            className="bg-[#EB6125] text-[#fff] font-semibold rounded-full text-[22px] px-12 py-3.5"
                            style={{fontFamily:"'Helvetica Neue',sans-serif"}}
                        >
                            SEARCH FLIGHTS
                        </button>
                    </div>
                </div>
        </div>
    </div>
</div>
<div>
    <div className="container mx-auto px-10 py-5 ">
        <div className="bg-[#fff] rounded-[20px] p-5 drop-shadow-lg">
            <div>
                <p className="text-center text-[#141823] text-[22px] font-semibold">Offers For You</p>
            </div>
            <div className="flex gap-4 py-5">
                <button className="bg-[#E8F3FF] px-4 py-1.5 rounded-full text-[#2274E0] font-semibold ">All</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Bank Offers</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Flights</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Hotels</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Cabs</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Bus</button>
                <button className="px-4 py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Trains</button>
            </div>
            <div>
                <div className="border rounded-[10px] flex gap-5 w-[50%] p-4">
                    <div>
                        <img src="/travel-sale.jpg" width="135" height="135" alt="travel-sale" className="rounded-[10px]" />
                    </div>
                    <div>
                        <button className=" py-1.5 text-[#777777] font-semibold hover:text-[#000] ">Hotels</button>
                        <p className="text-[18px] text-[#000] font-semibold">Get Up To 35% OFF on all Hotel Bookings !</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</>
); 
}   
export default Home;