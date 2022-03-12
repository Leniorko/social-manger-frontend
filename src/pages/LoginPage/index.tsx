import { Box, Button, Container, Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';

const validationSchema = object({
  login: string().required('Login must be provided'),
  password: string().required('Password must be provided'),
});

export default function LoginPage(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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
        elevation={3}
        sx={{
          width: 'fit-content',
          padding: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            width: 'clamp(100px, 80vw, 400px)',
            flexDirection: 'column',
            gap: 2,
          }}
          onSubmit={formik.handleSubmit}
        >
          <Box component="h1">Sign in</Box>
          <TextField
            name="login"
            label="Login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={Boolean(formik.errors.login || formik.errors.password)}
          >
            Sign in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
