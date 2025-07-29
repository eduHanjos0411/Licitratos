import { Button, TextField, Typography } from "@mui/material"
import { Box, Stack } from "@mui/system"

function Login() {
  return (
    <Stack>
      <Stack direction='column'>
        <Button sx={{borderRadius: 5, width: 150, marginLeft: 8}} size='large' variant="contained">Página Inicial</Button>
        <Typography variant="h4">Login</Typography>
        <TextField  id="outlined-basic" label="Usuário" variant="outlined"/>
        <TextField  id="outlined-basic" label="Senha" variant="outlined"/>
        <Button sx={{borderRadius: 5, width: 150, marginLeft: 8}} size='large' variant="contained">Entrar</Button>
        <Button size="medium" variant="text">Cadastrar-se</Button>
        <Button size="medium" variant="text">Esqueceu a senha?</Button>
      </Stack>
      <Stack>
        <Box 
        component='img'
        src="Logo.png"/>
        <Typography>LICITRATOS</Typography>
        <Typography>LICITAÇÕES E CONTRATOS</Typography>
      </Stack>
    </Stack>
  )
}

export default Login 