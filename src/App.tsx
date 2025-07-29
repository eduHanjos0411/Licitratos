import './App.css'
import Banner from './components/banner/Banner'
import Equipe from './components/equipe/Equipe'
import Navigation from './components/navigation/Navigation'
import Noticias from './components/noticias/Noticias'
import Servicos from './components/servicos/Servicos'

function App() {
    return (
        <>
            <Navigation/>
            <Banner/>
            <Equipe/>
            <Servicos/>
            <Noticias/>
        </>
    )
}

export default App
