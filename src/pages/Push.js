import React, { useState, useEffect } from 'react'
import { firestore, auth } from "../firebase";
import { Link } from 'react-router-dom'
import '../styles/push.css'

const Push = () => {
    const [sign, setSign] = useState(false)
    const [email, setEmail] = useState('')

    useEffect(()=> {
        auth.onAuthStateChanged(function(user) {
          if(user) {
            setSign(true)
            setEmail(user.email)
          } else {
            alert("로그인 후에 등록할 수 있습니다.")
            setSign(false)
            window.location.replace("/")
          }
        })
      }, [])

    const [inputs, setInputs] = useState({
        tag: '',
        code: '',
        body: ''
    })

    const { tag, code, body } = inputs
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const inputsReset = () => {
        setInputs({
            tag: '',
            code: '',
            body: ''
        })
    }

    const summit = () => {
        if (tag !== "" && code !=="" && body !=="") {
            firestore
                .collection("stacktest")
                .add({ tag: tag, code: code, body: body, email: email })
                .then((res) => {
                    alert("Successfully Pushed! :D")
                })
            inputsReset()
        } else {
            alert("Please Check Your PUSH. :(")
        }
    }

    return (
        <div className="form">
            <p> 등록자: {email}</p>
            <div className="title">
                <input name="tag" onChange={onChange} value={tag} className="tunit" placeholder="태그    (ex) C++, Python, HTTP, ..." />
                <input name="code" onChange={onChange} value={code} className="tunit" placeholder="에러코드 전체    (ex) Out of Index, 404, ..." />
            </div>
            <div className="body">
                <textarea name="body" onChange={onChange} value={body} className="bunit" placeholder="주요 증상, 내용" />
            </div>
            <div className="foot">
                <button onClick={() => summit()}> 등록 </button>
            </div>
        </div>
    )
}

export default Push;