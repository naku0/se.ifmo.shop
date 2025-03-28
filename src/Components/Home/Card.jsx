export const Card = ({avatar, name}) => {
    return(
        <div className="card">
            <div className="avatar">
                <img src={avatar} alt ={`${name} avatar`}/>
            </div>
            <p className="nickname">{name}</p>
        </div>
    );
}