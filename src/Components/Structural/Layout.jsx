import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="app">
                {children}
            </div>
            <Footer/>
        </>
    );
}