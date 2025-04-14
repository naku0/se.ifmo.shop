import {Link} from "react-router-dom";
import "../../Stylings/components/Project.css";
import commercial from "../../images/assets/win-stuff/commercial.png";
import idk from "../../images/assets/win-stuff/idk.png";
import rofl from "../../images/assets/win-stuff/rofl.png";
import {useMemo} from "react";

export const Project = ({project, currentUser}) => {
    const getDefaultImage = (project) => {
        if (project.commercial) return commercial;
        if (project.rofl) return rofl;
        return idk;
    };

    const userRole = useMemo(() => {
        return project.authors.find(
            author => author.nickname === currentUser.nickname
        )?.role || "Участник"
    }, [currentUser.nickname, project.authors]);

    const coAuthors = useMemo(() => {
        if (project.authors.length <= 1) return null;
        return project.authors
            .filter(author => author.nickname !== currentUser.nickname)
            .map((author, index, array) => (
                <span key={author.nickname}>
                                                <Link to={`/${author.nickname.toLowerCase()}`}>
                                                    {author.nickname}
                                                </Link>
                    {index < array.length - 1 ? <span>, &nbsp;</span> : ''}
                                            </span>))
    }, [currentUser.nickname, project.authors])

    return (
        <li className="project-item">
            <div className={project.image ? 'project-picture' : 'win-icon'}>
                <img
                    src={project.image || getDefaultImage(project)}
                    alt={`${project.name} preview`}
                    loading="lazy"
                />
            </div>
            <div className="project-about">
                <a href={project.link}><h3>{project.name}</h3></a>
                <p>{project.description}</p>
                <div className="project-contribution">
                    <p>
                        {userRole}
                    </p>
                    {coAuthors && (
                        <div className="contribution-helper">
                            <p className="helper">
                                Совместно с&nbsp;{coAuthors}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};