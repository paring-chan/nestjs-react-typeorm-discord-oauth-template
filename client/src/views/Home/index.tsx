import React from 'react'
import logo from '../../logo.svg'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { tokenState, userState } from '../../state'

function Home() {
    const [token, setToken] = useRecoilState(tokenState)
    const user = useRecoilValue(userState)!

    return (
        <div className="App">
            <div
                style={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    color: '#fff',
                }}
            >
                {token === false ? (
                    <a
                        style={{ textDecoration: 'none', color: '#fff' }}
                        href="/auth/login"
                    >
                        로그인
                    </a>
                ) : token === null ? null : (
                    <div
                        onClick={() => {
                            if (window.confirm('로그아웃할까요?')) {
                                setToken(false)
                            }
                        }}
                        style={{
                            cursor: 'pointer',
                            userSelect: 'none',
                        }}
                    >
                        {user.username}#{user.discriminator}
                    </div>
                )}
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home
