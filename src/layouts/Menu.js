import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/menu.css'

//                    <Link to="/community"><button className="btn" > COMMUNITY </button></Link>
//                    <Link to="/counter"><button className="btn" > 반례스택 </button></Link>

const Menu = (props) => {
    let buttons = []

    //로그인 모달 팝업
    const signin = () => {
        props.openModal()
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('E-mail')
        alert("로그아웃 하였습니다.")
        window.location.replace("/")
    }

    if (!props.sign) {
        buttons = (
            <div className="menu">
                <nav className="btnbox">
                    <Link to="/"><button className="btn" > ERRORSTACK </button></Link>
                    <Link to="/push"><button className="btn" > PUSH! </button></Link>
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
                </nav>
                <nav className="btnbox">
                    <Link to="/mypage"><button className="btn"> 내정보 </button></Link>
                    <button className="btn" onClick={() => logout()}> 로그아웃 </button>
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