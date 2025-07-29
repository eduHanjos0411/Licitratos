import { Box, Typography } from '@mui/material'
import './banner.css'
import { Stack } from '@mui/system'

function Banner() {
    return (
        <Box
      sx={{
        backgroundImage: 'url(Banner.png)', // ajuste o caminho
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // alinha o conteúdo à esquerda
        px: 6, // padding horizontal (espaço da esquerda)
      }}
    >
      <Stack spacing={2}>
        <Typography color='#D9D9D9' variant='h1' sx={{ fontWeight: 'bold' }}>
          LICITRATOS
        </Typography>
        <Typography color='#D9D9D9' variant='h4'>
          Somos a Empresa Júnior de Licitações e Contratos<br />
          do Instituto Federal de Brasília
        </Typography>
      </Stack>
    </Box>
    )
}

export default Banner