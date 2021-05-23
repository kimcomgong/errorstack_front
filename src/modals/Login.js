import React, { useState } from 'react'
import '../styles/login.css'

const Login = (props) => {
    const [join, setJoin] = useState(false)
    const clickJoin = () => {
        setJoin(!join)
    }
    
    const [inputs, setInputs] = useState({
        id: '',
        pw: '',
        jid: '',
        jpw: ''
    })

    const { id, pw, jid, jpw } = inputs
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
            pw: ''
        })
    }

    /*
    const register = () => {
        auth.createUserWithEmailAndPassword(jid, jpw)
            .then((user) => {
                alert("회원가입 성공")
                clickJoin()
                inputsReset()
            })
            .catch((error) => {
                alert("회원가입 실패")
                inputsReset()
            })
    }
    */

    /*
    const signin = () => {
        auth.signInWithEmailAndPassword(id, pw)
            .then((user) => {
                alert("로그인 성공")
                inputsReset()
                props.closeModal()
                window.location.replace("/")
            })
            .catch((error) => {
                alert("로그인 실패")
                inputsReset()
            })
    }
    */

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
                        <button onClick={() => {}}> 로그인 </button>
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
                                    <button onClick={() => {}}> 회원가입 </button>
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