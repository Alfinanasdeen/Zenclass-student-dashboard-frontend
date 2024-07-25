import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import "./taskSubmission.css"; // Ensure you have a CSS file with this name

const taskSubmission = ({ item }) => {
    const { frontEndCode, frontEndURL, backEndCode, backEndURL, score } = item;

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
            {backEndURL && renderUrlLink(backEndURL, "Back End Deployed URL")}
            {score !== undefined && (
                <div className='task-score'>
                    Task Score: {score}
                </div>
            )}
        </div>
    );
};

const itemPropTypes = PropTypes.shape({
    frontEndCode: PropTypes.string,
    frontEndURL: PropTypes.string,
    backEndCode: PropTypes.string,
    backEndURL: PropTypes.string,
    score: PropTypes.number,
}).isRequired;

taskSubmission.propTypes = {
    item: itemPropTypes,
};

export default taskSubmission;
