import { Link } from "react-router-dom";
const Home = () =>(
<div className="md:hidden sm:block w-full">
    <div className="bg-[#FFC24A] p-2">
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
        <div className="flex mt-[20px] justify-between">
            <Link to='/hotels'>
                <button>
                    <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                        <div className="mb-2 w-[30px] h-[30px]">
                            <img src="/icons/hotel-color.png" alt="hotels-color" width='30' height='30' />
                        </div>
                        <p className="text-[12px] font-semibold">Hotels</p>
                    </div>
                </button>
            </Link>
            <Link to='/flights'>
                <button>
                    <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                        <div className="mb-2 w-[30px] h-[30px]">
                            <img src="/icons/airplane-color.png" alt="airplane-color" width='30' height='30' />
                        </div>
                        <p className="text-[12px] font-semibold">Flights</p>
                    </div>
                </button>
            </Link>
            <Link to='/trains'>
                <button>
                    <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                        <div className="mb-2 w-[30px] h-[30px]">
                            <img src="/icons/train-color.png" alt="train-color" width='30' height='30' />
                        </div>
                        <p className="text-[12px] font-semibold">Trains</p>
                    </div>
                </button>
            </Link>
            <Link to='/bus'>
                <button>
                    <div className="bg-white py-[10px] px-[18px] rounded-[10px] drop-shadow-md">
                        <div className="mb-2 w-[30px] h-[30px]">
                            <img src="/icons/bus-color.png" alt="bus-color" width='30' height='30' />
                        </div>
                        <p className="text-[12px] font-semibold">Bus</p>
                    </div>
                </button>
            </Link>
        </div>
    </div>
</div>
);    
export default Home;