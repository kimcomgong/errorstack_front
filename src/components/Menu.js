import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

//                    <Link to="/community"><button className="btn" > COMMUNITY </button></Link>
//                    <Link to="/community"><button className="btn" > COMMUNITY </button></Link>

const Menu = (props) => {
    const [cont, setCont] = useState(0)
    let buttons = []
    const signin = () => {
        props.openModal()
    }

    if (!props.sign) {
        buttons = (
            <div className="menu">
                <nav className="btnbox">
                    <Link to="/"><button className="btn" > ERRORSTACK </button></Link>
                    <Link to="/push"><button className="btn" > PUSH! </button></Link>
                    <Link to="/counter"><button className="btn" > 반례스택 </button></Link>
                </nav>
                <nav className="btnbox">
                    <button className="btn" onClick={() => signin()} > SIGNIN </button>
                </nav>
            </div>
        )
    } else {
        buttons = (
            <div className="menu">
                <nav className="btnbox">
                    <Link to="/"><button className="btn" > ERRORSTACK </button></Link>
                    <Link to="/push"><button className="btn" > PUSH! </button></Link>
                    <Link to="/counter"><button className="btn" > 반례스택 </button></Link>
                </nav>
                <nav className="btnbox">
                    <p> [기여도 - { cont }] </p>
                    <Link to="/mypage"><button className="btn"> 내정보 </button></Link>
                    <button className="btn" onClick={()=>{}}> 로그아웃 </button>
                </nav>
            </div>
        )
    }

    return (
        <>
            {buttons}
        </>
    )
}

export default Menu;