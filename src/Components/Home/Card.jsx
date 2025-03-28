export const Card = ({avatar, name, onClick}) => {
    return(
        <div className="card" onClick={onClick}>
            <div className="avatar">
                <img src={avatar} alt ={`${name} avatar`}/>
            </div>
            <p className="nickname">{name}</p>
        </div>
    );
}