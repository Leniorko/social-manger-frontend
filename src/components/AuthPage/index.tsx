import { Box, Button, Container, Paper, TextField } from '@mui/material';

export default function AuthPage(): JSX.Element {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        sx={{
          width: 'fit-content',
          padding: 1,
          gap: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField placeholder="login" />
        <TextField placeholder="password" />
        <Box>
          <Button>Sign in</Button>
          <Button>Sign on</Button>
        </Box>
      </Paper>
    </Container>
  );
}
