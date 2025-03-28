import './Stylings/App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {ErrorPage} from  "./Pages/ErrorPage"
import {Naku0} from "./Pages/Profiles/Naku0";
import {WithLayout} from "./Components/Structural/WithLayout";

function App() {
    return (
        <Routes>
            <Route element={<WithLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="naku0" element={<Naku0/>}/>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;