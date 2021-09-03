import React, { useEffect } from 'react'

export default function Test(props) {

    const getrf = async () => {

        return await fetch('http://localhost:3000/user/refresh_token', {

            credentials: 'include'

        })

            .then(res => res.json())

    }

    const login = async () => {

        await fetch('http://localhost:3000/user/login', {

            method: 'POST',

            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({

                email: 'entaimagi@gmail.com',

                password: 'Huy860.Q'

            }),

            credentials: 'include'

        })

            .then(getrf)

            .then(console.log)

            .catch(console.error)

        // localStorage.setItem('login', true)

        // window.location.reload()

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
    // useEffect(() => {
    //     if (localStorage.getItem('login')) getrf()
    // }, [])

    const update = async () => {
        await fetch('http://localhost:3000/user/login', {

            method: 'POST',

            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({

                email: 'entaimagi@gmail.com',

                password: 'Huy860.Q'

            }),

            credentials: 'include'

        })

            .then(getrf)

            .then(console.log)

            .catch(console.error)
    }
    return (
        <>
            <button onClick={login}>login</button>
            <button onClick={logout}>out</button>
            <button onClick={update}>update</button>
        </>
    )
}
