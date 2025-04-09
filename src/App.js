import './Stylings/App.css';
import {Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home";
import {Game} from "./Game/Main/Game"
import {WithLayout} from "./Components/Structural/WithLayout";
import {PersonalPage} from "./Pages/Profiles/PersonalPage";
import {users} from "./utils/user-data";
import {ErrorPage} from "./Pages/ErrorPage";

function App() {
    return (
        <Routes>
            <Route element={<WithLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="microtest" element={<Game/>}/>

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