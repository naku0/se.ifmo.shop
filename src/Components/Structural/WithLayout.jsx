import {Outlet} from "react-router-dom";
import {Layout} from "./Layout";
import "../../Stylings/App.css"

export const WithLayout = () => (
    <Layout>
        <Outlet/>
    </Layout>
);