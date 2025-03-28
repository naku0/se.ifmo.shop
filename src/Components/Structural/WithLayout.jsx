import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";

export const WithLayout = () => (
    <Layout>
        <Outlet />
    </Layout>
);