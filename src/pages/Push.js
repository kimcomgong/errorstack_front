import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/push.css'

const Push = () => {
    const [email, setEmail] = useState('')

    const jwtCheck = () => {
        if(localStorage.getItem('token') === null) {
            alert("로그인 후에 등록할 수 있습니다.")
            window.location.replace("/")
            return false
        }
    
        var headers = {
          'Content-Type': 'application/json',
          'JWT': localStorage.getItem('token')
        }
    
        axios.get("api/auth", { headers })
          .then(res => {
            if (res.data === localStorage.getItem('E-mail')) {
                setEmail(localStorage.getItem('E-mail'))
            }
            else {
                alert("로그인 후에 등록할 수 있습니다.")
                window.location.replace("/")
            }
          })
          .catch(err => {
            alert("로그인 후에 등록할 수 있습니다.")
            window.location.replace("/")
          })
    }

    useEffect(()=> {
        jwtCheck()
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
        var headers = {
            'Content-Type': 'application/json',
            'JWT': localStorage.getItem('token')
        }

        if (tag !== "" && code !== "" && body !== "") {

            var request = {
                "tag": tag,
                "code": code,
                "body": body,
                "email": email
            }

            axios.post("stack/push", request, { headers })
                .then(res => {
                    console.log(res)
                    alert("Stack Successfully Pushed!")
                })
                .catch(err => {
                    alert("Stack Push Failed.")
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