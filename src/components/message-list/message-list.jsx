import PropTypes from 'prop-types';

const MessageList = (props) => {

    const messagesJSX = props.incomingMessages.map(
        obj => <li key={obj.id}>{obj.msg}</li>
    );

    return (
        <ul>
            {messagesJSX}
        </ul>
    )
};

MessageList.defaultProps = {
    incomingMessages: []
};

MessageList.propTypes = {
    incomingMessages: PropTypes.arrayOf(
        PropTypes.exact({
                msg: PropTypes.string,
                id: PropTypes.string.isRequired
        })
    )
};


export default MessageList;