import { Button } from "../../talwind";

const Home = () =>(
    <div className="flex gap-x-4 p-6">
        <Button theme="primary" onClick={()=>alert()}>SUBMIT</Button>
        <Button variant="outline" theme="secondary">SUBMIT</Button>
        <Button theme="danger">SUBMIT</Button>
        <Button theme="warning">SUBMIT</Button>
        <Button theme="error">SUBMIT</Button>
        <Button theme="light">SUBMIT</Button>
        <Button theme="dark">SUBMIT</Button>
    </div>
)
export default Home;