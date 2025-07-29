import { Stack, Typography } from "@mui/material"
import ServiceCard from "../cards/ServiceCard"

function Servicos() {
    return (
        <Stack bgcolor="#051B2B" sx={{             
            paddingTop: 5,
            alignContent: 'center',
            textAlign: 'center',
            }}>
            <Typography color="#FFFFFE" variant="h4">Serviços</Typography>
            <Typography color="#FFFFFE" variant="h6">Temos a solução para o seu negócio</Typography>

            <Stack direction='row' sx={{justifyContent: 'space-evenly', marginTop: 10,   marginBottom: 10}}>
                <ServiceCard titulo="Consultoria" subTitulo="Consultoria em Licitações e Contratos"/>
                <ServiceCard titulo="Assessoria" subTitulo="Assessoria em Licitações e Contratos"/>
                <ServiceCard titulo="Mentoria" subTitulo="Mentoria em Licitações e Contratos"/>
            </Stack>
        </Stack>
    )
}

export default Servicos