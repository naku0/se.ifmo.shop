import './Stylings/App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {KorolevGame} from "./Game/NeedForSnus/KorolevGame"
import {WithLayout} from "./Components/Structural/WithLayout";
import {PersonalPage} from "./Pages/Profiles/PersonalPage";
import {users} from "./utils/user-data";
import {ErrorPage} from "./Pages/ErrorPage";
import {AboutUsPage} from "./Pages/AboutUsPage";
import {GamesPage} from "./Pages/GamesPage";
import {BLDGame} from "./Game/BlackRiverDriver/BLDGame";

function App() {
    return (
        <Routes>
            <Route element={<WithLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="microtest" element={<GamesPage/>}/>
                <Route path="microtest/korolev" element={<KorolevGame/>}/>
                {/*<Route path="microtest/black-river" element={<BLDGame/>}/>*/}
                <Route path="aboutUs" element={<AboutUsPage/>}/>

                {users.map(user => (
                    <Route
                        key={user.nickname}
                        path={`/${user.nickname.toLowerCase()}`}
                        element={<PersonalPage user={user}/>}
                    />
                ))}
            </Route>

            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
}

export default App;