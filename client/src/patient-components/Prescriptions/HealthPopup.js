import React from 'react'

const getDate = date => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (date.getDay() === 0) {
        return 'Sunday'
    }
    let day = days[date.getDay() - 1]
    return day;
}

const getMonth = date => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[date.getMonth()];
    return month;
}

const fullDate = (date) => {
    return `${getDate(date)}, ${getMonth(date)} ${date.getDate()}, ${date.getFullYear()}`;
}

function HealthPopup({ modalDisplayHealth, setModalDisplayHealth, healthData, key }) {

    console.log({healthData})
    console.log({modalDisplayHealth})

    const {_id, createdAt} = healthData

    return (
        <div id={key} className={modalDisplayHealth === _id ? "modal active" : "modal"}>
            <div className={modalDisplayHealth === _id ? "modal-content active" : "modal-content"}>
                <span className="close" onClick={() => setModalDisplayHealth(false)}>&times;</span>
                <div className="header">
                    <h1>Prescription from {healthData.doctor_id.name}</h1>
                    <h2>{fullDate(new Date(createdAt))}</h2>
                </div>
                <div class="info">
                    <h1>Diagnostics</h1>
                    <p>asdasda</p>
                </div>
               
            </div>
        </div>
    )
}

export default HealthPopup
