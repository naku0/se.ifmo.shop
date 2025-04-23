import "../../Stylings/components/footer.css"
import {Clock} from "../Dumb/Clock";
import win from "../../images/assets/win-stuff/win95.png"
import {Button} from "../Smart/Button";
import {useRef, useState} from "react";
import home from "../../images/assets/win-stuff/home.png"
import games from "../../images/assets/win-stuff/games.png"
import idk from "../../images/assets/win-stuff/idk.png"

export const Footer = () => {
    const [visible, setVisibility] = useState(false);
    const menu = useRef();
    return (
        <>
            <div className={`footer-menu ${visible}`} ref={menu}>
                <ul className="menu-list">
                    <li>
                        <a href="/" className="menu-list-directory">
                            <img src={home} alt="My Computer icon"/>
                            <p>Home Page</p>
                        </a>
                    </li>

                    <li>
                        <a href="/microtest" className="menu-list-directory">
                            <img src={games} alt="My Games icon"/>
                            <p>My Games</p>
                        </a>
                    </li>

                </ul>
            </div>
            <footer>
                <Button img={win} text={"Start"} fn={() => setVisibility(!visible)}/>
                <Clock/>
            </footer>
        </>
    );
}