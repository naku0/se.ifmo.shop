import "../../Stylings/components/Button.css"

export const Button = ({img, text, fn, link}) => {
    return (
        link ?
            <a className="link-button" href={link}>
                <img src={img} alt={text}/>
                <p>{text}</p>
            </a>
            :
            <div className="button" onClick={fn}>
                <img src={img} alt={text}/>
                <p>{text}</p>
            </div>
    );
}