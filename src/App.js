import './styles/App.css'
import { useState, useEffect } from 'react'
import { Login } from './modals'
import { Home, Push, Mypage, Community, Counter, StackViewer } from './pages'
import { Menu, Footer } from './layouts'
import { About, Tos, Pp } from './pages/infos'
import { Switch, Route } from 'react-router-dom'

import axios from 'axios'

function App() {
  const [login, setLogin] = useState(false)
  const [sign, setSign] = useState(false)

  const togModal = () => {
    setLogin(prev => !prev)
  }

  const getJwt = () => {
    if(localStorage.getItem('token') === null) return;

     var headers = {
      'Content-Type': 'application/json',
      'JWT': localStorage.getItem('token')
    }

    axios.get("api/auth", { headers })
      .then(res => {
        if (res.data === localStorage.getItem('E-mail')) {
          localStorage.setItem('E-mail', res.data)
        }
        else {
          alert("토큰이 유효하지 않아 로그아웃 합니다.")
          localStorage.removeItem('token')
          localStorage.removeItem('E-mail')
          window.location.replace("/")
        }
      })
      .catch(err => {
        alert("토큰이 유효하지 않아 로그아웃 합니다.")
        localStorage.removeItem('token')
        localStorage.removeItem('E-mail')
        window.location.replace("/")
      })

    // 비로그인시 로그인 메뉴 활성화
    if (localStorage.getItem("E-mail") !== null)
      setSign(true)
    else
      setSign(false)
  }

  useEffect(() => {
    getJwt()
  }, [])

  return (
    <div className="app">
      <Menu sign={sign} openModal={togModal}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/push" component={Push} />
        <Route path="/community" component={Community} />
        <Route path="/counter" component={Counter} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/about" component={About} />
        <Route path="/stackviewer" component={StackViewer} />
        <Route path="/tos" component={Tos} />
        <Route path="/pp" component={Pp} />
      </Switch>
      <div className="blank"/>
      <Footer />
      <Login login={login} closeModal={togModal}/>
    </div>
  );
}

export default App;
