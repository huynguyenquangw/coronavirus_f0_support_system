import React, { useContext, useEffect, useState } from "react";
import ChatRoom from "./ChatRoom";
import { GlobalState } from "../GlobalState";
import axios from 'axios'

const api = "http://localhost:3000"

export default function DocChatPatient(props) {
    const state = useContext(GlobalState)
    const [doctorInfo] = state.doctorAPI.doctorInfo
    const [isDoctor] = state.doctorAPI.doctor

    const [user, setUser] = useState([])
    const [roomId, setRoomId] = useState(false)
    const [pop, setPop] = useState(false)
    const [loading, setLoading] = state.loading

    const getUser = async () => {
        setLoading(!loading)
        const res = await axios.get(`${api}/doctor?limit=99`)
        setUser(res.data.data);
        setLoading(false)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            {isDoctor &&
                <ChatRoom roomId={doctorInfo._id} doctors={user} isWho={"isDoctor"} setRoomId={setRoomId} pop={pop} setPop={setPop} />
            }
        </>
    )
}
