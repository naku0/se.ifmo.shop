import ducky from "../images/ducky.webp"
import "../Stylings/home.css"
import {users} from "../utils/user-data";
import {Card} from "../Components/Home/Card";
import {useNavigate} from "react-router-dom";
export const Home = () => {
    const goTo = useNavigate();
    return (
        <>
            <main>
                <div className="text">
                    <h1>Первый магазин <br/> в ИТМО</h1>
                    <p>где ничего не продается</p>
                </div>
                <div className="ducky">
                    <img src={ducky} alt="лого резиновой утки"/>
                </div>
            </main>
            <div className="cards">
                {users.map((user, index) => (
                    <Card key={index} avatar={user.avatar} name={user.nickname} onClick={() => goTo(`/${user.nickname.toLowerCase()}`)}/>
                ))}
            </div>
        </>

    );
}