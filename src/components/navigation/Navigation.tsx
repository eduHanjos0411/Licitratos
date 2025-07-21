import { Box, Button, Grid, Typography } from "@mui/material";

import './navigation.css'

export default function Navigation() {
    return (
            <Grid sx={{
    backgroundColor: '#051B2B',
    alignItems: 'center',
    justifyContent: "space-between", // Alterado para space-between
    padding: '0 20px' // Adicionado padding para não colar nas bordas
}} container>

    {/* Logo à esquerda */}
    <Grid container>
        <img src="LogoLicitratos.png" alt="Logo Licitratos" />
        <Box sx={{color:"white", alignContent: "center", paddingLeft: 5}}>
            <Typography sx={{justifySelf: "center"}}>Licitratos</Typography>
            <Typography>Licitações e Contratos</Typography>
        </Box>
    </Grid>

    {/* Container dos botões à direita */}
    <Grid container gap={5} sx={{ display: 'flex' }}>
        <Button sx={{ color: 'white' }} variant="text">
            <Typography fontSize={15}>Nossa Equipe</Typography>
        </Button>
        
        <Button sx={{ color: 'white' }} variant="text">
            <Typography fontSize={15}>Serviços</Typography>
        </Button>
        
        <Button sx={{ color: 'white' }} variant="text">
            <Typography fontSize={15}>Notícias</Typography>
        </Button>
        
        <Button sx={{ color: 'white' }} variant="text">
            <Typography fontSize={15}>Cases de Sucesso</Typography>
        </Button>
        
        <Button sx={{ color: 'white' }} variant="text">
            <Typography fontSize={15}>Contato</Typography>
        </Button>
        
        <Grid container gap={2}>
            <Button variant="contained">
                <Typography fontSize={15}>Login</Typography>
            </Button>
            
            <Button variant="contained">
                <Typography fontSize={15}>Cadastro</Typography>
            </Button>
        </Grid>
    </Grid>
</Grid>
    )
}