import iconNFS from "../Game/assets/NeedForSnus/icon.png";
import iconBRD from "../Game/assets/BlackRiverDriver/BRD.png";

export const GamesPage = () => {
    return(
        <div>
            <li>
                <a href="/microtest/korolev" className="menu-list-directory">
                    <img src={iconNFS} alt="NeedForSnus game button"/>
                    <p>Need For Snus</p>
                </a>
            </li>
            <li>
                <a href="/microtest/black-river" className="menu-list-directory">
                    <img src={iconBRD} alt="BRD game button"/>
                    <p>Black River Driving</p>
                </a>
            </li>
        </div>
    )
}