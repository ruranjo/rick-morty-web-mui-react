import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import LoginPage from '../pages/Login'
import RouterLayout from '../common/RouterLayout'
import CharacterPage from '../pages/Character'


const AppRouter: React.FC<{}> = () => {
  return (
    <Routes>
        <Route path='/rick-morty-web-mui-react.github.io/' element={<RouterLayout/>}>
            <Route path='/rick-morty-web-mui-react.github.io/' element={<HomePage/>}/>
            <Route path='/rick-morty-web-mui-react.github.io/character/:id' element={<CharacterPage/>}/>
        </Route>
        <Route path='/rick-morty-web-mui-react.github.io/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default AppRouter