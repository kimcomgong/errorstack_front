import React, { } from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="footer">
                <Link className="click" to="/about">About ERRORSTACK</Link>
                <p> | </p>
                <a className="click" href="https://kimce.tistory.com">Developer Blog</a>
                <p> | </p>
                <a className="click" href="https://join.slack.com/t/errorstack/shared_invite/zt-m2s5oo75-aPHem84CSIWKrZGlgOfd0">Slack</a>
                <p> | </p>
                <Link className="click" to="/tos">이용규칙</Link>
                <p> | </p>
                <Link className="click" to="/pp">개인정보 처리방침</Link>
            </div>
        </div>
    )
}

export default Footer;