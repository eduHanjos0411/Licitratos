import { Stack } from '@mui/material'
import Button from '@mui/material/Button'

import './navigation.css'

function Navigation() {
    
    return (
        <Stack direction="row" sx={{

            backgroundColor: '#051B2B',
            padding: '10px 20px',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 1000
}}>
            <img src="Logo.png" alt=""/>

            <Stack direction="row" spacing={2} sx={{
                marginRight: "20px",
            }}>            
                <Button size='large' variant="text" sx={{ color: '#D9D9D9'}} >Início</Button>
                <Button size='large' variant="text" sx={{ color: '#D9D9D9'}} >Nossa Equipe</Button>
                <Button size='large' variant="text" sx={{ color: '#D9D9D9'}} >Serviços</Button>
                <Button size='large' variant="text" sx={{ color: '#D9D9D9'}} >Notícias</Button>
                <Button size='large'variant="text" sx={{ color: '#D9D9D9'}} >Cases de Sucesso</Button>
                <Button size='large' variant="text" sx={{ color: '#D9D9D9'}} >Contato</Button>
                <Button sx={{borderRadius: 5}} size='large' variant="contained" color="primary">Login</Button>
                <Button sx={{borderRadius: 5}}  size='large' variant="contained" color="primary">Cadastro</Button>
            </Stack>
        </Stack>
    )
}

export default Navigation