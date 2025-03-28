import cross from "../images/old_cross.png"
import {useState} from "react";
import "../Stylings/errorpage.css"
import {useNavigate} from "react-router-dom";

export const ErrorPage = () => {
    const [closed, changeClosed] = useState(false);
    const goTo = useNavigate()
    const close = () => {
        changeClosed(!closed);
    }

    return (
        <div className="error-page">
            {!closed &&
                <div className="error-window">
                    <div className="error-header">
                        <p className="error-name">Error</p>
                        <button className="cross" onClick={close}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="error-main">
                <span className="error-icon">
                    <img src={cross} alt={"cross that tells you there's no such page, which u are looking for"}/>
                </span>
                        <div className="error-text">
                            <h1 className="error-code">404</h1>
                            <h2 className="error-description">Страница не найдена</h2>
                            <p>Вы забрели куда-то не туда, но не отчаивайтесь, всегда есть выход!</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="go-previous" onClick={() => goTo(-1)}>На прошлую страницу</button>
                        <button className="go-home" onClick={() => goTo('/')}>На главную</button>
                        <button className="accept" onClick={close}>OK</button>
                    </div>
                </div>
            }
        </div>
    );
}