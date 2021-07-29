import React from 'react'
import axios from 'axios'

const Callback = () => {
    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        const token = query.get('token')
        if (!token) {
            window.location.href = '/'
            return
        }
        ;(async () => {
            try {
                await axios.get('/users/@me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                localStorage.token = token
            } finally {
                window.location.href = '/'
            }
        })()
    })

    return <div>Login Callback</div>
}

export default Callback
