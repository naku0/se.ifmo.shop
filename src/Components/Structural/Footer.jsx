import "../../Stylings/components/footer.css"
import {Clock} from "../Dumb/Clock";
import win from "../../images/assets/win-stuff/win95.png"
import {Button} from "../Smart/Button";
import {useRef, useState} from "react";
import home from "../../images/assets/win-stuff/home.png"
import iconNFS from "../../Game/assets/NeedForSnus/icon.png"
import iconBRD from "../../Game/assets/BlackRiverDriver/BRD.png"

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
                            <p>HomePage</p>
                        </a>
                    </li>
                    <li>
                        <a href="/microtest" className="menu-list-directory">
                            <img src={iconNFS} alt="NeedForSnus game button"/>
                            <p>Need For Snus</p>
                        </a>
                    </li>
                    <li>
                        <a href="/hz" className="menu-list-directory">
                            <img src={iconBRD} alt="BRD game button"/>
                            <p>Black River Driving</p>
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