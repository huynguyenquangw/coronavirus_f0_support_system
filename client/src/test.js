import React, { useEffect } from 'react'

export default function Test(props) {

    const getrf = async () => {
        const res = await fetch('http://localhost:3000/user/refresh_token', {
            credentials: 'include'
        })
        const data = await res.json()
        console.log(data);
    }

    const login = async () => {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'entaimagi@gmail.com',
                password: 'Huy860.Q'
            }),
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => console.log(data))
        localStorage.setItem('login', true)
        window.location.reload()
    }

    const logout = async () => {
        try {
            await fetch('http://localhost:3000/user/logout')
            localStorage.clear()
            window.location.reload()
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('login')) getrf()
    }, [])

    return (
        <>
            <button onClick={login}>login</button>
            <button onClick={logout}>out</button>
            <button onClick={getrf}>rftoken</button>
        </>
    )
}
