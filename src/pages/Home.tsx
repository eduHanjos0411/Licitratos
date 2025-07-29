
import Banner from "../components/banner/Banner"
import Equipe from "../components/equipe/Equipe"
import Servicos from "../components/servicos/Servicos"
import Noticias from "../components/noticias/Noticias"
import Contatos from "../components/contatos/Contatos"
import Footer from "../components/footer/Footer"
import Navigation from "../components/navigation/Navigation"
import Cases from "../components/casesDeSucesso/Cases"

function Home() {
  return (
    <>
      <Navigation/>
      <Banner/>
      <Equipe/>
      <Servicos/>
      <Noticias/>
      <Cases/>
      <Contatos/>
      <Footer/>
    </>
  )
}

export default Home