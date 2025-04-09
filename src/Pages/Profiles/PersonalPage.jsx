import "../../Stylings/pages/personalPage.css"
import tg from "../../images/assets/custom-icons/tg.png"
import gh from "../../images/assets/custom-icons/github.png"
import {Button} from "../../Components/Smart/Button";
import {projects} from "../../utils/project-data"
import {Project} from "../../Components/Smart/Project";
import shrshn from "../../images/assets/project-images/shsrshn.jpg"
import {useMemo} from "react";

export const PersonalPage = ({user}) => {
    const filteredProjects = useMemo(() => {
            return projects.filter(project =>
                project.authors.some(author => author.nickname === user.nickname));
        }, [user.nickname]
    );

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
                    <ul className={`project-list ${filteredProjects.length ? 'has-projects' : 'no-projects'}`}>
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <Project
                                    key={project.name}
                                    project={project}
                                    currentUser={user}
                                />
                            ))
                        ) : (
                            <div className="no-projects-message">
                                <img src={shrshn} alt="srshn"/>
                                <div className="no-projects-text">
                                    <h1>Пока нет проектов 😢</h1>
                                    <p>Не расстраивайся! <br/>
                                        У него тоже нет проектов, но он живет счастливо</p>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}