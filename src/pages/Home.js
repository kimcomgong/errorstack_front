import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    const [list, setList] = useState([])

    // Home 데이터 패치 함수

    /*
    useEffect(() => {
        fetch()
    }, [fetch])
    */
   
    return (
        <div>
            <div className="main">
                <Link to="/">
                    <img className="logo" alt="errorstack-logo" width="550" height="75" src="./logo/errorstack.png" />
                </Link>
                <div className="search">
                    <input className="input" placeholder="ERROR IDENTIFIER, 사용된 언어, 관련 태그 등을 입력하세요." />
                </div>
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