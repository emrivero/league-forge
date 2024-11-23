import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <Box
          component="img"
          src="/assets/images/portrait.png"
          alt="Portrait"
          sx={{
            width: { xs: "80%", md: "50%" }, // 100% width on small screens, 50% on medium and larger screens
            maxWidth: "600px", // Maximum width for the image
          }}
        />
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenid@ a League Forge
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
        justifyContent="end"
        textAlign="center"
        mt={4}
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
            Reglamento
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
