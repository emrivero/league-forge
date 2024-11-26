import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useResourceParams } from "@refinedev/core";
import Loading from "../../../components/loading";
import { NoData } from "../../../components/no-data";
import { useTeam } from "../../../hooks/api/useTeam";
import { useTitle } from "../../../hooks/title";
import { PictureMap } from "../pictureMap";
import { Players } from "./players-stats";

export const TeamPage = () => {
  const theme = useTheme();
  const { id } = useResourceParams();
  const { error, isLoading, team: data } = useTeam(id?.toString() || "");

  useTitle(data?.name || "Loading...");

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <NoData />;
  }

  return (
    <Box>
      <Box bgcolor={theme.palette.secondary.main} padding={2}>
        <Typography
          className="sportingFont"
          textAlign={"center"}
          variant="h4"
          color={"Background"}
        >
          {data?.name}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Container
          style={{ margin: ".5rem 0" }}
          sx={{ width: { xs: "100%", sm: "20%" } }}
        >
          <img
            src={
              PictureMap[data?.name || ""] ||
              "/assets/images/teams/default.webp"
            }
            alt={data?.name || "Loading"}
            width={"100%"}
          />
        </Container>
      </Box>
      <Box>
        <Box padding={2}>
          <Typography
            className="sportingFont"
            textAlign={"center"}
            variant="h4"
            color={"primary"}
          >
            Jugadores
          </Typography>
        </Box>
        <Players players={data?.players || []} />
      </Box>
      <Box>
        <Box padding={2}>
          <Typography
            className="sportingFont"
            textAlign={"center"}
            variant="h4"
            color={"primary"}
          >
            Asistentes y Extras
          </Typography>
        </Box>
        <NoData title={"En construcción..."} />
      </Box>
    </Box>
  );
};
