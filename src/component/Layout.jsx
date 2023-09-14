import { Outlet } from "react-router-dom";
import Header from "./header";

function Laout() {
    return (
        <div className="py-4 px-8 flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Laout;