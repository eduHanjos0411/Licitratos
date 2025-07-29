import { Box, Stack, Typography } from "@mui/material"

interface NoticiasCardProps {
    imagem?: string
    titulo?: string
    subTitulo?: string
}

export const NoticiasCard: React.FC<NoticiasCardProps> =  ({
    titulo,
    subTitulo
}) => {


    return (
        <Stack bgcolor='#D9D9D9' direction="column"
        sx={{ 
            width: 400,
            height: 400,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            borderRadius: 2,
            gap: 3,
            boxShadow: '0 4px 8px grey'
        }}>
            <Typography variant='h6'>{titulo}</Typography>
            <Typography variant="body1">{subTitulo}</Typography>
        </Stack>
    )

}
