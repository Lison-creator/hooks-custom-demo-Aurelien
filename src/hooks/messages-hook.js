/*  Description de notre fonction */

import { nanoid } from "nanoid";
import { useState } from "react"

/**
 * Création d'un hook pour gérer les messages
 * - Stocker les messages
 * - Ajouter un message
 *  - Suppression d'un message
 * - Supression de tous les messages
 */


export const useMessages = () => {

    /* Défini un state avec le tableau de messages */
    const [messages, setMessages] = useState([]);

    /**
     * Permet d'ajouter un message
     * @param {string} message Le nouveau message
     */

    const addMessage = (message) => {

        /* Création d'un objet message avec un id */
        const newMsg = {
            id: nanoid(),
            msg: message
        }
        /* Ajout du message dans le state */
        setMessages(m => [...m, newMsg])
    }

    /**
     * Supprime un message via son id
     * @param {string} id L'id du message supprimé 
     */
    const deleteMessage = (id) => {

        /* Le filter récupère tous les éléments du tableau, sauf les éléments ciblés */
        setMessages(m => m.filter(msg => msg.id !== id));
    };

    /**
     * Supprime tous les messages
     */
    const deleteAllMessage = () => {
        setMessages([]);
    };
    /* On renvoi les éléments que l'on souhaite rendre accessible */
    return [
        messages,
        addMessage,
        deleteMessage,
        deleteAllMessage

    ];
};