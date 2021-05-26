import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    const [list, setList] = useState([])
    const [main, setMain] = useState("-")
    const [test, setTest] = useState("-")

    const fetch = () => {
        axios.get("main/")
            .then(res => {
                setMain("check")
                console.log(res.data)
            })
    }

    const fetch2 = () => {
        axios.get("test/")
            .then(res => {
                setTest("check")
                console.log(res.data)
            })
    }

    useEffect(() => {
        fetch()
        fetch2()
    }, [])
   
    return (
        <div>
            <div className="main">
                {/* 홈 화면 로고 */}
                <Link to="/">
                    <img className="logo" alt="errorstack-logo" width="550" height="75" src="./logo/errorstack.png" />
                </Link>
                <br />
                <p> {main} </p>
                <br />
                <p> {test} </p>
                <br />
                {/* 홈 화면 검색 창 */}
                <div className="search">
                    <input className="input" placeholder="ERROR IDENTIFIER, 사용된 언어, 관련 태그 등을 입력하세요." />
                </div>

                {/* 홈 화면 에러 스택 */}
                {
                    list.map((unit) => {
                        return (
                            <div className="unit" key={unit.id}>
                                <p className="unitunit" > {unit.tag} </p>
                                <p className="unitunit" > {unit.code} </p>
                                <p className="unitunit" > {unit.body} </p>
                                <p className="unitunit" > {unit.email} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;