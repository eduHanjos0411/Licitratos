import { Stack, Typography } from "@mui/material"
import { PersonCard } from "../cards/PersonCard"

function Equipe() {
    return (
        <Stack bgcolor="#E8E8E8" sx={{
            paddingTop: 5,
            alignContent: 'center',
            textAlign: 'center',
            }}>
            <Typography variant="h4" color="black">Nossa Equipe</Typography>
            <Typography variant="h6" color="#8A8A8A">Conheça a Empresa Júnior Licitações e Contratos</Typography>
            <Stack direction='row' sx={{justifyContent: 'space-evenly', marginTop: 10,   marginBottom: 10}}>
                <PersonCard nome="Nathanael dos Santos Lopes " texto="Graduando em Tecnologia em Gestão Pública no IFB, Diretor de Relações Institucionais e Gestão da Atlética Audácia IFB; Graduando em Direito no IDP, membro do Coletivo Negro IDP." cargo="Presidente" imagem="/nathanael.png"/> 
                <PersonCard nome="Gabriela Marques Santos" texto="Graduanda em Tecnologia em Gestão Pública no IFB, Presidente do Centro Acadêmico de Gestão Pública do IFB, Diretora de relações institucionais da Federação Nacional dos Estudantes do campo de públicas" cargo="Diretoria de Marketing" imagem="Gabriela.png"/>
                <PersonCard nome="Maria Fernanda Santos de Abreu " texto="Graduanda em Tecnologia em Gestão Pública no IFB, Presidente da Atlética Audácia IFB, Secretária-Geral do Centro acadêmico de Gestão Pública do IFB, Coordenadora de Comunicação da Federação Nacional dos Estudantes do campo de públicas" cargo="Diretoria de Projetos " imagem="Maria.png"/>
            </Stack>
        </Stack>
    )
}

export default Equipe