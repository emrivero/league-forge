import { Clear } from "@mui/icons-material";
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link, useList } from "@refinedev/core";
import { useState } from "react";
import Loading from "../../components/loading";
import { NoData } from "../../components/no-data";
import { PictureMap } from "./pictureMap";
import { Team } from "./types"; // Asegúrate de que la ruta sea correcta

export const Teams = () => {
  const theme = useTheme();
  const [search, setSearch] = useState("");
  const [selectedTiers, setSelectedTiers] = useState<number[]>([]);

  const { data: teamData, isLoading: teamIsLoading } = useList<Team>({
    resource: "teams",
    sorters: [{ field: "name", order: "asc" }],
    pagination: { current: 0, pageSize: 100 },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleTierClick = (tier: number) => {
    if (selectedTiers.includes(tier)) {
      setSelectedTiers([]);
      return;
    }
    setSelectedTiers([tier]);
  };

  const handleClearSearch = () => {
    setSearch("");
  };

  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const data = teamData?.data
    .filter((team) => !team.hidden)
    .filter(
      (team) =>
        normalizeString(team.name).includes(normalizeString(search)) &&
        (selectedTiers.length === 0 || selectedTiers.includes(team.tier))
    );

  if (teamIsLoading) {
    return <Loading />;
  }

  return (
    <Box padding={{ md: "2rem" }}>
      <Box
        style={{
          position: "sticky",
          top: "3rem",
          zIndex: 1,
          padding: ".5rem",
          backgroundColor: theme.palette.background.paper,
          marginBottom: "1rem",
        }}
      >
        <TextField
          label="Buscar equipo"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                  <Clear />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box marginBottom={2}>
          {[1, 2, 3, 4].map((tier) => (
            <Chip
              key={tier}
              label={`Tier ${tier}`}
              clickable
              color={selectedTiers.includes(tier) ? "primary" : "default"}
              onClick={() => handleTierClick(tier)}
              style={{ marginRight: 8, marginBottom: 8 }}
            />
          ))}
        </Box>
      </Box>
      <Grid
        justifyContent={data?.length ? "flex-start" : "center"}
        container
        spacing={2}
      >
        {data && data?.length > 0 ? (
          data?.map((team) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={team.name}
              style={{
                cursor: "pointer",
              }}
            >
              <Link to={`/teams/${team.id}`} key={team.id}>
                <Box
                  key={team.id}
                  bgcolor={theme.palette.background.paper}
                  marginBottom={"1rem"}
                >
                  <Container
                    className="teamContainer"
                    style={{
                      padding: ".25rem",
                    }}
                  >
                    <Typography
                      color={"Background"}
                      className="sportingFont"
                      textAlign={"center"}
                      variant="h4"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {team.name}
                    </Typography>
                    <Typography
                      color={"Background"}
                      textAlign={"center"}
                      variant="h5"
                      fontWeight={"bold"}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      Tier {team.tier}
                    </Typography>
                  </Container>
                  <Container style={{ marginTop: ".5rem" }}>
                    <img
                      src={
                        PictureMap[team.name] ||
                        "/assets/images/teams/default.webp"
                      }
                      alt="Loading"
                      width={"100%"}
                      style={{
                        filter: "none",
                      }}
                    />
                  </Container>
                </Box>
              </Link>
            </Grid>
          ))
        ) : (
          <NoData />
        )}
      </Grid>
    </Box>
  );
};
