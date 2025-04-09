import "../../Stylings/pages/personalPage.css"
import tg from "../../images/assets/custom-icons/tg.png"
import gh from "../../images/assets/custom-icons/github.png"
import {Button} from "../../Components/Smart/Button";
import {projects} from "../../utils/project-data"
import {Project} from "../../Components/Smart/Project";

export const PersonalPage = ({user}) => {
    return (
        <>
            <div className="profile-page">
                <div className="profile-header">
                    <div className="avatar">
                        <img src={user.avatar} alt={`${user.avatar}`}/>
                    </div>
                    <div className="main-info">
                        <div className="name">
                            <h1>{user.nickname}</h1>
                            {user.status ?
                                <p>{user.status}</p>
                                :
                                <p>Hi! I'm new out there😀</p>
                            }
                        </div>
                        <div className="social-links">
                            <ul>
                                <li>
                                    <Button img={tg} text={"telegram"} link={user.tg}/>
                                </li>
                                <li>
                                    <Button img={gh} text={"github"} link={user.gh}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projects">
                    <ul className="project-list">
                        {projects
                            .filter(project =>
                                project.authors.some(author => author.nickname === user.nickname))
                            .map(project => (
                                <Project
                                    key={project.name}
                                    project={project}
                                    currentUser={user}
                                />
                            ))}
                    </ul>
                </div>
            </div>
        </>
    );
}