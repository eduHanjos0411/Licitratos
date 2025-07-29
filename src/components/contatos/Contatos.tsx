import { Button, Stack, TextField, Typography } from "@mui/material"

function Contatos() {

  return (
  <Stack sx={{
    margin: '20px',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  }}>
    <Stack direction='column'
    sx={{justifyContent: 'center', textAlign: 'center'}}>
      <Typography color="black" variant="h4">Contatos</Typography>
      <Typography color="#8A8A8A" variant="h6">Vamos juntos levar sua empresa para o próximo nível de gestão</Typography>
      <Typography sx={{marginTop: '10px'}} color="black">Possui alguma dúvida ou está interessado em nossos serviços? Preencha o formulário ou entre em contato conosco.</Typography>
    </Stack>
   <Stack direction="column" sx={{
    marginTop: '20px',
    borderRadius: '10px',
    width: '20%',
    height: '40%',
    padding: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#051B2B'
   }}>
        <Stack direction='column' spacing={2} sx={{
              justifyContent: 'center',
              alignContent: 'center',
              textAlign: 'center',
              margin: '30px'
        }} >
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-basic" label="Nome da empresa" variant="outlined" />
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-basic" label="Segmento da empresa" variant="outlined" />
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-basic" label="Responsável" variant="outlined" />
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-basic" label="Telefone" variant="outlined" />
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-basic" label="Email" variant="outlined" />
          <TextField sx={{bgcolor: '#FFFFFE', width: '300px', borderRadius: '8px'}} id="outlined-multiline-flexible" label="Escreva aqui sua mensagem" variant="outlined" multiline/>
    </Stack>
           <Button sx={{
            backgroundColor: '#3064E5', 
            color: '#FFFFFF', 
            width: '180px', 
            height: '40px',
            fontSize: '20px', 
            marginTop: '0px',
            marginBottom: '30px'
          }}>Enviar</Button>
        </Stack>
  </Stack>
    
  )
}

export default Contatos