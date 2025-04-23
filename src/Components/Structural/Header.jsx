import ducky from "../../images/assets/project-images/ducky.webp"
import "../../Stylings/components/header.css"

export const Header = () => {

    return (
        <header>
            <div className="logo" onClick={() => {window.location.href = '/'}}>
                <img src={ducky} alt="rubber duck logo"/>
                <p>IFMO<br/>SHOP</p>
            </div>
            {/*
            <button className="cross" onClick={close}>
                <span className="material-symbols-outlined">close</span>
            </button>
            */}

        </header>
    );
}