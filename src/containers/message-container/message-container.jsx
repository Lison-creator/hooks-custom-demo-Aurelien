import { nanoid } from "nanoid";
import { useState } from "react";
import { useMessages } from "../../hooks/messages-hook";
import MessageForm from "../../components/message-form/message-form";
import MessageList from "../../components/message-list/message-list";

const MessageContainer = () => {

    /* Renverra les éléments dans l'ordre dans lequel ils osnt écrit dans le return du fichier "messages-hook.js" */

    const [messages, handleAdd, handleDelete, handleDeleteAll] = useMessages();

    return (
        <main>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleAdd} />

            {messages.length > 0 && (
                <button onClick={handleDeleteAll}>Vider la liste des messages</button>
            )
            }
            <MessageList incomingMessages={messages} />
        </main>
    )
}

export default MessageContainer;