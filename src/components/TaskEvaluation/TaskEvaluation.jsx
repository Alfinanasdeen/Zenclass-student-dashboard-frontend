import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import "./TaskEvaluation.css"; // Assuming you will create a CSS file for this component

const TaskEvaluationUrl = ({ item }) => {
    const renderUrlLink = (url, label) => {
        return (
            <h6 key={url}>
                <a href={url} target='_blank' rel='noopener noreferrer' className='task-url'>
                    {label} <FaExternalLinkAlt />
                </a>
            </h6>
        );
    };

    return (
        <div className="task-evaluation-url">
            {item.frontEndCode && renderUrlLink(item.frontEndCode, "Front End Code")}
            {item.frontEndURL && renderUrlLink(item.frontEndURL, "Front End Deployed URL")}
            {item.backEndCode && renderUrlLink(item.backEndCode, "Back End Code")}
            {item.backEndURL && renderUrlLink(item.backEndURL, "Back End Deployed Code")}
        </div>
    );
};

TaskEvaluationUrl.propTypes = {
    item: PropTypes.shape({
        frontEndCode: PropTypes.string,
        frontEndURL: PropTypes.string,
        backEndCode: PropTypes.string,
        backEndURL: PropTypes.string,
    }).isRequired,
};

export default TaskEvaluationUrl;
