import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Callback from './views/Callback'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { tokenState, userState } from './state'
import axios from 'axios'

const App = () => {
    const [token, setToken] = useRecoilState(tokenState)
    const setUser = useSetRecoilState(userState)

    React.useEffect(() => {
        if (!localStorage.token) return
        ;(async () => {
            try {
                const { data: user } = await axios.get('/users/@me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                })
                setToken(localStorage.token)
                setUser(user)
            } catch (e) {
                setToken(false)
                return
            }
        })()
        // eslint-disable-next-line
    }, [])

    React.useEffect(() => {
        axios.defaults.headers.Authorization = token ? `Bearer ${token}` : ''

        if (token === false) {
            setUser(null)
        }
        // eslint-disable-next-line
    }, [token])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/callback" component={Callback} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
