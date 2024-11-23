import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="50vh"
        textAlign="center"
      >
        <img src="/assets/images/portrait.png" width={"100%"} alt="Portrait" />
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenido a League Forge
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Tu plataforma definitiva para gestionar ligas y torneos de Blood Bowl.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Aquí podrás crear, editar y visualizar equipos, ligas y mucho más.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="20vh"
        justifyContent={"end"}
        textAlign="center"
      >
        <Box display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/teams"
          >
            Equipos
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/leagues"
          >
            Ligas y Torneos
          </Button>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/rules"
          >
            Reglas
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
