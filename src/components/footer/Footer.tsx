import { Email, Instagram, LinkedIn, Phone } from "@mui/icons-material"
import { Box, Button, Stack, Typography } from "@mui/material"

function Footer() {
 return (
  <Stack direction='row'  sx={{
    width: '98.3%',
    backgroundColor: '#051B2B',
    justifyContent: 'space-between',
    color: '#FFFFFE',
    padding: 2
  }}>
    
    <Box
    component='img'
    src="logoFooter.png"
    sx={{
      width:'300px',
      height : '150px'
    }}
    />
    
    <Stack>
      <Typography>Páginas</Typography>
      <Typography>Início</Typography>
      <Typography>Nossa Equipe</Typography>
      <Typography>Serviços</Typography>
      <Typography>Notícias</Typography>
      <Typography>Cases de Sucesso</Typography>
      <Typography>Contatos</Typography>
    </Stack>
    
    <Stack>
      <Typography>Contatos</Typography>
      <Typography><Phone/>61 99999-9999</Typography>
      <Typography><Email/>licitratos@gmail.com</Typography>
      <Stack><Instagram/><LinkedIn/></Stack>
    </Stack>

    <Stack>
      <Button sx={{borderRadius: 5, width: 150, marginLeft: 8}} size='large' variant="contained">Login</Button>
      <Stack>
        <Typography>Endereço</Typography>
        <Typography>IFB, Campus Brasília</Typography>
        <Typography>SGAN Quadra 610 Módulos D, E, F, G</Typography>
        <Typography>Asa Norte, Brasília - DF</Typography>
        <Typography>CEP: 70830-450</Typography>
      </Stack>
    </Stack>
  </Stack>
 )
}

export default Footer