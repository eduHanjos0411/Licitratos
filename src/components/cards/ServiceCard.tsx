import { Box, Stack, Typography } from "@mui/material"

interface ServiceCardProps {
    titulo?: string
    subTitulo?: string
}

export const ServiceCard: React.FC<ServiceCardProps> =  ({
    titulo,
    subTitulo
}) => {


    return (
        <Stack bgcolor='#FFFFFF' direction="column"
        sx={{ 
            width: 400,
            height: 400,
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            borderRadius: 2,
            gap: 3
        }}>
            <Box 
            component="img"
            src='service.png'
            sx={{
            height: '210px',
            width: '280px',
            paddingLeft: 18
        }}>

            </Box>
            <Typography variant='h6'>{titulo}</Typography>
            <Typography variant="body1">{subTitulo}</Typography>
        </Stack>
    )

}

export default ServiceCard