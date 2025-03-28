import ducky from "../images/ducky.webp"
import "../Stylings/header.css"

export const Header = () => {
    const close = () => {
        window.close();
    }
    return (
        <header>
            <div className="logo">
                <img src={ducky} alt="rubber duck logo"/>
                <p>IFMO<br/>SHOP</p>
            </div>
            <button className="cross" onClick={close}>
              <span className="material-symbols-outlined">close</span>
            </button>
        </header>
    );
}