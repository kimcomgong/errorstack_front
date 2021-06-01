import React, { useState } from 'react'
import '../styles/login.css'
import axios from 'axios'

const Login = (props) => {
    const [join, setJoin] = useState(false)
    const [inputs, setInputs] = useState({
        id: '',
        pw: '',
        jid: '',
        jpw: ''
    })

    const { id, pw, jid, jpw } = inputs

    const clickJoin = () => {
        setJoin(!join)
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const inputsReset = () => {
        setInputs({
            id: '',
            pw: '',
            jid: '',
            jpw: ''
        })
    }

    //로그인
    const login = () => {
        var request = {
            "email": id,
            "password": pw
        }

        var a = JSON.stringify(request)
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post("api/login", a , { headers })
            .then(res => {
                localStorage.setItem('token', res.data)
                localStorage.setItem('E-mail', request.email)
                alert("로그인을 성공하였습니다.")
                inputsReset()
                props.closeModal()
                window.location.replace("/")
            })
            .catch(err => {
                alert("로그인을 실패하였습니다.")
                inputsReset()
            })
    }

    //회원가입
    const register = () => {
        var request = {
            email: jid,
            password: jpw,
        }
        var a = JSON.stringify(request)
        var headers = {
            'Content-Type': 'application/json'
        }

        axios.post("api/register", a , { headers })
            .then(
                res => {
                    alert("회원가입을 성공하였습니다.");
                    clickJoin()
                    inputsReset()
                }
            )
            .catch(
                err => {
                    alert("회원가입을 실패하였습니다.");
                    inputsReset()
                }
            )
    }
    
    return (
        <>
            {props.login ? (
                <div className="modal">
                    <div className="login">
                        <br />
                        <h2> 로그인 </h2>
                        <input
                            name="id"
                            onChange={onChange}
                            value={id}
                            placeholder="ID" />
                        <input
                            type="password"
                            name="pw"
                            onChange={onChange}
                            value={pw}
                            placeholder="PW" />
                        <button onClick={() => login()}> 로그인 </button>
                        <br />
                        <div> 회원이 아닌 경우, <button onClick={() => clickJoin()}> 회원가입 </button> </div>
                        {
                            join ? (
                                <div>
                                    <br />
                                    <h2>
                                        회원가입
                                    </h2>
                                    <input
                                        name="jid"
                                        onChange={onChange}
                                        value={jid}
                                        placeholder="ID" />
                                    <input
                                        type="password"
                                        name="jpw"
                                        onChange={onChange}
                                        value={jpw}
                                        placeholder="PW" />
                                    <button onClick={() => register()}> 회원가입 </button>
                                </div>
                            ) : null
                        }
                        <button onClick={() => props.closeModal()}> 닫기 </button>
                    </div>
                </div>
            ) : null}
        </>
    )
}

export default Login;