import './styles/App.css'
import { useState, useEffect } from 'react'
import { Login } from './modals'
import { Home, Push, Mypage, Community, Counter } from './pages'
import { Menu, Footer } from './layouts'
import { About, Tos, Pp } from './pages/infos'
import { Switch, Route } from 'react-router-dom'

function App() {
  const [login, setLogin] = useState(false)
  const [sign, setSign] = useState(false)


  const togModal = () => {
    setLogin(prev => !prev)
  }

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
