import "../../Stylings/components/footer.css"
import {Clock} from "../Dumb/Clock";
import win from "../../images/assets/win-stuff/win95.png"
import {Button} from "../Smart/Button";
import {useRef, useState} from "react";
import home from "../../images/assets/win-stuff/home.png"

export const Footer = () => {
    const [visible, setVisibility] = useState(false);
    const menu = useRef();
    return (
        <>
            <div className={`footer-menu ${visible}`} ref={menu}>
                <ul className="menu-list">
                    <li>
                        <a href="/" className="menu-home-button">
                            <img src={home} alt="My Computer icon"/>
                            <p>HomePage</p>
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