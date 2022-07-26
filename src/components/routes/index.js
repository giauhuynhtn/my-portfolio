import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/porfolio', component: Portfolio},
    { path: '/about', component: About},
    { path: '/contact', component: Contact}
]

const privateRoutes = []

export {publicRoutes, privateRoutes};