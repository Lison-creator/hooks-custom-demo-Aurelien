import { useState } from "react";
import PropTypes from 'prop-types';

const MessageForm = (props) => {

    // Variable d'état pour stocker la valeur de l'input
    const [msgInput, setMsgInput] = useState('');

    // Méthode de réaction au submit du formulaire
    const handleSubmit = (e) => {
        // Empeche le refresh de la page
        e.preventDefault(); 

        // Communication montante (Event)
        props.onSendMsg(msgInput);

        // Modification du state, pour effacer l'input
        setMsgInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                onChange={(e) => setMsgInput(e.target.value)}
                value={msgInput}
            />
            <button type="submit">Valider</button>
        </form>
    )
};

// Définir les valeurs par default des Props
MessageForm.defaultProps = {
    onSendMsg: () => {}         // noop
};

// Définir le typage des props (-> PropTypes)
MessageForm.propTypes = {
    onSendMsg: PropTypes.func   // Type fonction
};

export default MessageForm;