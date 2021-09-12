import React, { useEffect, useRef } from "react";

import useChat from "./useChat";
import './ChatRoom.css'

const ChatRoom = ({ roomId, setRoomId, pop, setPop }) => {
    // const { roomId } = props.match.params;
    const { messages, sendMessage } = useChat(roomId);
    const [newMessage, setNewMessage] = React.useState("");
    const messageRef = useRef()

    const handleNewMessageChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = () => {
        sendMessage(newMessage);
        setNewMessage("");
    };

    const handleKeyUp = e => {
        e.preventDefault()
        if (e.key === "Enter") {
            if (newMessage !== "") {
                sendMessage(newMessage)
                setNewMessage("")
            }
        }
    }

    useEffect(() => {
        while (messages.length) {
            messages.pop()
            setPop(false)
        }
    }, [roomId, pop])

    useEffect(() => messageRef.current.scrollIntoView({ behavior: "smooth" }))

    // console.log({ pop });
    // console.log({ roomId });

    return (
        <div className="chat-room-container">
            <div className="chat-header">
                <div className="logo">
                    Room
                    <h3>{roomId}</h3>   {/* bỏ cũng dc, tùy mấy e */}
                </div>
                <p onClick={() => setRoomId(false)}>query name here</p>
            </div>
            <div className="messages-container">
                <div className="wrapper">
                    <div className="chat-content">
                        <div className="message">
                            {messages.map((message, i) => (
                                <div key={i} className={`message-row ${message.ownedByCurrentUser ? "my-message" : "other-message"}`}>
                                    <div className="message-title">
                                        {message.ownedByCurrentUser ? <span>👻 Me</span> : <span>💩 My friend</span>}
                                    </div>

                                    <div className="message-text">
                                        {message.body}
                                    </div>

                                    <div className="message-datetime">
                                        {message.datetime}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div ref={messageRef}></div>
                    </div>
                </div>

            </div>
            <div className="input-container">
                <textarea
                    value={newMessage}
                    onChange={handleNewMessageChange}
                    placeholder="Write message..."
                    className="new-message-input-field"
                    onKeyUp={handleKeyUp}
                />
                <button disabled={!newMessage} onClick={handleSendMessage} className="send-message-button">
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;