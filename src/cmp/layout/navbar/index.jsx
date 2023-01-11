import { Link } from "react-router-dom";
const Navbar = () =>{
return(
    <div className="w-full bg-white shadow py-4">
        <div>
        <Link to="/">Flights</Link>
        <Link to="hotels">Hotels</Link>
        <Link to="trains">Trains</Link>
        <Link to="cabs">Cabs</Link>
        <Link to="bus">Bus</Link>
        <Link to="forex">Forex</Link>
        </div>
    </div>
);
}
export default Navbar;