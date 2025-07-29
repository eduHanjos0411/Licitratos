import { Stack, Typography } from "@mui/material"
import { NoticiasCard } from "../cards/NoticiasCard"

function Noticias() {
    return (
        <Stack bgcolor="#E8E8E8" sx={{             
            paddingTop: 5,
            alignContent: 'center',
            textAlign: 'center',
            }}>
            <Typography color="black" variant="h4">Notícias</Typography>
            <Typography color="#8A8A8A" variant="h6">Veja as últimas notícias sobre Licitações e Contratos</Typography>

            <Stack direction='row' sx={{justifyContent: 'space-evenly', marginTop: 10,   marginBottom: 10}}>
                <NoticiasCard imagem="not1.png" titulo="Prefeitura investe em análise situacional da área da Administração e Planejamento" subTitulo="O Poder Público que melhor detalhar o planejamento estratégico, bem como os indicadores e ações a serem desenvolvidas nessa área"/>
                <NoticiasCard imagem="not2.png" titulo="Tesouro vê necessidade de desaceleração da atividade para conter inflação" subTitulo="O secretário do Tesouro Nacional, Rogério Ceron, afirmou nesta quinta-feira (15) que vê uma necessidade de desaceleração da atividade econômica para conter a alta da inflação."/>
                <NoticiasCard imagem="not3.png" titulo="Capacitação do CNJ aborda uso de PowerBI em auditorias internas dos tribunais" subTitulo="O curso surgiu da necessidade de sistematização e organização de dados obtidos em auditorias e da utilização dessas informações inclusive para apoio a decisões organizacionais. "/>
            </Stack>
        </Stack>
    )
}

export default Noticias