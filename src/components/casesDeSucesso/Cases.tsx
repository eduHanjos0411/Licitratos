import { Stack, Typography } from "@mui/material";
import { NoticiasCard } from "../cards/NoticiasCard";

function Cases() {
  return (
      <Stack bgcolor="#051B2B" sx={{             
            paddingTop: 5,
            alignContent: 'center',
            textAlign: 'center',
            }}>
            <Typography color="#FFFFFE" variant="h4">Cases de Sucesso</Typography>
            <Typography color="#FFFFFE" variant="h6">Conheça alguns dos projetos de sucesso e clientes</Typography>

            <Stack direction='row' sx={{justifyContent: 'space-evenly', marginTop: 10,   marginBottom: 10}}>
                <NoticiasCard imagem="case1.png" titulo="Empresa 1" subTitulo="Consultoria em Licitações"/>
                <NoticiasCard imagem="case2.png" titulo="Empresa 2" subTitulo="Assessoria em Contratos"/>
                <NoticiasCard imagem="case3.png" titulo="Empresa 3" subTitulo="Mentoria em Licitações e Contratos"/>
            </Stack>
        </Stack>
  )
}

export default Cases