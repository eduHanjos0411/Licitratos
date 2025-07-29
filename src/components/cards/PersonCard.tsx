import { Instagram, LinkedIn } from "@mui/icons-material"
import { Box, IconButton, Typography } from "@mui/material"

export interface cardProps {
  nome?: string,
  texto?: string,
  cargo?: string,
  imagem?: string
}

export const PersonCard: React.FC<cardProps> = ({
  nome,
  texto,
  cargo,
  imagem
}) => {

    return(
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr', // duas colunas
        gap: 2,
        padding: 2,
        borderRadius: 4,
        boxShadow: '0 4px 8px grey',
        maxWidth: 400,
        height: 400,
        backgroundColor: 'white',
        textAlign: 'left'
      }}
    >
      {/* Coluna da esquerda */}
      <Box sx={{width: 200}}>
        <Typography  fontWeight="bold">
          {nome}
        </Typography>

        <Typography  sx={{ mt: 1, fontSize: '0.9rem' }}>
          {texto}
        </Typography>

        <Typography  sx={{ mt: 1, color: 'orange' }}>
          {cargo}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <IconButton>
            <Instagram sx={{ color: '#E1306C' }} />
          </IconButton>
          <IconButton>
            <LinkedIn sx={{ color: '#0A66C2' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Coluna da direita (imagem) */}
      <Box
        component="img"
        src={imagem}
        sx={{
          height: '100%',
          maxWidth: '170px',
          borderRadius: 2,
        }}
      />
    </Box>
    )

  }