import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/community.css'

const Counter = () => {
    return (
        <div>
            <div className="main">
                <div>
                    <h1>
                        현재 지원 플랫폼 - BOJ
                    </h1>
                </div>
                <div className="search">
                    <input className="input" placeholder="문제 번호를 입력하세요." />
                </div>
            </div>
        </div>
    )
}

export default Counter;