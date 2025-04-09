import {Link} from "react-router-dom";
import "../../Stylings/components/Project.css";
import commercial from "../../images/assets/win-stuff/commercial.png";
import rofl from "../../images/assets/win-stuff/rofl.png";
import trash from "../../images/assets/win-stuff/thrash.png";

export const Project = ({project, currentUser}) => {
    const getDefaultImage = (project) => {
        if (project.commercial) return commercial;
        if (project.rofl) return rofl;
        return trash;
    };

    return (
        <li className="project-item">
            <img
                src={project.image || getDefaultImage(project)}
                alt={`${project.name} preview`}
            />
            <div className="project-about">
                <a href={project.link}><h3>{project.name}</h3></a>
                <p>{project.description}</p>
                <div className="project-contribution">
                    <p>
                        {project.authors.find(
                            author => author.nickname === currentUser.nickname
                        )?.role || "Участник"}
                    </p>
                    {project.authors.length > 1 && (<div className="contribution-helper">
                            <p>
                                Совместно с {project.authors
                                .filter(author => author.nickname !== currentUser.nickname)
                                .map((author, index, array) => (
                                    <span key={author.nickname}>
                                                <Link to={`/${author.nickname.toLowerCase()}`}>
                                                    {author.nickname}
                                                </Link>
                                        {index < array.length - 1 ? ', ' : ''}
                                            </span>))}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </li>);
};