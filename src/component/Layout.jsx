import { Outlet } from "react-router-dom";
import Header from "./header";

function Laout() {
    return (
        <div className="p-4 flex flex-col min-h-screen">
            <Header/>
            <Outlet/>
        </div>
    );
}

export default Laout;