import "@fontsource/quicksand/500.css"; 
import "font-awesome/css/font-awesome.min.css";
import Layout from "./cmp/layout";
import Home from "./cmp/home";
import Hotels from "./cmp/hotels";
import Trains from "./cmp/trains";
import Cabs from "./cmp/cabs";
import Forex from "./cmp/forex";
import Bus from "./cmp/bus";
import Trips from "./cmp/trips";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
const App = () =>(
  <Router>           
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/hotels" element={<Hotels />} /> 
        <Route exact path="/trains" element={<Trains />} />
        <Route exact path="/cabs" element={<Cabs />} />
        <Route exact path="/bus" element={<Bus />} />
        <Route exact path="/forex" element={<Forex />} />
        <Route exact path="/mytrips" element={<Trips />} />
      </Routes>
    </Layout>
  </Router>
)

export default App;