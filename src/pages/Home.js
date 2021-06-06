import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/home.css'

/*
<div className="search">
<input className="input" placeholder="ERROR IDENTIFIER, 사용된 언어, 관련 태그 등을 입력하세요." />
</div>
*/

const Home = () => {
    //const [fetched, setFetched] = useState(false)
    const [list, setList] = useState([])

    const fetch = () => {
        axios.get("stack/get")
            .then(res => {
                setList(res.data)
                //setFetched(true)
            })
    }
   
    useEffect(() => {
        fetch()
    }, [])
   
    return (
        <div>
            <div className="main">
                {/* 홈 화면 로고 */}
                <Link to="/">
                    <img className="logo" alt="errorstack-logo" width="550" height="75" src="./logo/errorstack.png" />
                </Link>
                <br />
                
                {/* 홈 화면 에러 스택 */}
                <div className="unitType">
                    <p> 태그 </p>
                    <p> 에러코드 </p>
                    <p> 등록자 </p>
                </div>
                {
                    list.map((unit) => {
                        return (
                            <Link
                                to={{
                                    pathname:"/stackviewer",
                                    state: {
                                        tag : unit.tag,
                                        code : unit.code,
                                        body : unit.body,
                                        createdBy : unit.createdBy,
                                        createdAt : unit.createdAt
                                    }
                                    }}
                                style={{
                                    textDecoration:'none'
                                    }}
                                key={unit.id}>
                                <div to="/stackviewer" className="unit">
                                    <p className="unitunit" > {unit.tag} </p>
                                    <p className="unitunit" > {unit.code} </p>
                                    <p className="unitunit" > {unit.createdBy} </p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;