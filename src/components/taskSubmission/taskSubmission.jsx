import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import "./taskSubmission.css"; // Assuming you will create a CSS file for this component

const TaskEvaluationUrl = ({ item }) => {
    const { frontEndCode, frontEndURL, backEndCode, backEndURL } = item;

    const renderUrlLink = (url, label) => (
        <h6 key={url}>
            <a href={url} target='_blank' rel='noopener noreferrer' className='task-url'>
                {label} <FaExternalLinkAlt />
            </a>
        </h6>
    );

    return (
        <div className="task-evaluation-url">
            {frontEndCode && renderUrlLink(frontEndCode, "Front End Code")}
            {frontEndURL && renderUrlLink(frontEndURL, "Front End Deployed URL")}
            {backEndCode && renderUrlLink(backEndCode, "Back End Code")}
            {backEndURL && renderUrlLink(backEndURL, "Back End Deployed Code")}
        </div>
    );
};

const itemPropTypes = PropTypes.shape({
    frontEndCode: PropTypes.string,
    frontEndURL: PropTypes.string,
    backEndCode: PropTypes.string,
    backEndURL: PropTypes.string,
}).isRequired;

TaskEvaluationUrl.propTypes = {
    item: itemPropTypes,
};

export default TaskEvaluationUrl;
