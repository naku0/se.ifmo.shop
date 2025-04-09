import cross from "../images/assets/win-stuff/old_cross.png";
import { useState, useEffect, useRef } from "react";
import "../Stylings/pages/errorpage.css";
import { useNavigate } from "react-router-dom";
import shrshn from "../images/assets/project-images/shsrshn.jpg";

export const ErrorPage = () => {
    const [closed, changeClosed] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const velocityRef = useRef({ x: 2, y: 2 });
    const imageRef = useRef(null);
    const animationRef = useRef(null);
    const goTo = useNavigate();

    const close = () => {
        changeClosed(true);
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        const randomVelX = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3);
        const randomVelY = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 3);
        setPosition({ x: randomX, y: randomY });
        velocityRef.current = { x: randomVelX, y: randomVelY };
    };

    useEffect(() => {
        if (!closed) return;
        const moveImage = () => {
            if (!imageRef.current) return;
            setPosition(prev => {
                let newX = prev.x + velocityRef.current.x;
                let newY = prev.y + velocityRef.current.y;
                const imgWidth = imageRef.current.width;
                const imgHeight = imageRef.current.height;

                if (newX <= 0 || newX + imgWidth >= window.innerWidth) {
                    velocityRef.current.x *= -1;
                    imageRef.current.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                    newX = newX <= 0 ? 0 : window.innerWidth - imgWidth;
                }

                if (newY <= 0 || newY + imgHeight >= window.innerHeight) {
                    velocityRef.current.y *= -1;
                    imageRef.current.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                    newY = newY <= 0 ? 0 : window.innerHeight - imgHeight;
                }

                return { x: newX, y: newY };
            });

            animationRef.current = requestAnimationFrame(moveImage);
        };

        animationRef.current = requestAnimationFrame(moveImage);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [closed]);

    return (
        <div className="error-page">
            {!closed ? (
                <div className="error-window">
                    <div className="error-header">
                        <p className="error-name">Error</p>
                        <button className="cross" onClick={close}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                    <div className="error-main">
                        <span className="error-icon">
                            <img src={cross} alt="cross that tells you there's no such page" />
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
            ) : (
                <img
                    ref={imageRef}
                    src={shrshn}
                    alt="DVD Logo"
                    style={{
                        position: 'fixed',
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        width: '100px',
                        height: 'auto',
                        pointerEvents: 'none'
                    }}
                    onLoad={() => {
                        if (imageRef.current) {
                            setPosition(prev => ({
                                x: Math.min(prev.x, window.innerWidth - imageRef.current.width),
                                y: Math.min(prev.y, window.innerHeight - imageRef.current.height)
                            }));
                        }
                    }}
                />
            )}
        </div>
    );
};
