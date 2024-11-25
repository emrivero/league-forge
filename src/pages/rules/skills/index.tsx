import { Clear } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useList } from "@refinedev/core";
import React, { useState } from "react";
import Loading from "../../../components/loading";
import { NoData } from "../../../components/no-data";
import { Skill } from "./types";
export default function Skills() {
  const theme = useTheme();
  const { data: skillsData, isLoading: skillsIsLoading } = useList<Skill>({
    resource: "skills",
    sorters: [{ field: "name", order: "asc" }],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (type: string) => {
    if (type === filterType) {
      setFilterType("");
      return;
    }
    setFilterType(type);
  };

  const normalizeString = (str: string) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  if (skillsIsLoading) {
    return <Loading />;
  }

  if (skillsData?.data) {
    const filteredSkills = skillsData.data?.filter(
      (skill) =>
        normalizeString(skill.name).includes(normalizeString(searchTerm)) &&
        (filterType.length === 0 || filterType.includes(skill.type))
    );

    const handleClearSearch = () => {
      setSearchTerm("");
    };

    return (
      <Box padding={{ md: 2 }}>
        <Box
          style={{
            position: "sticky",
            top: "3rem",
            zIndex: 1,
            padding: ".5rem",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <TextField
            label="Buscar habilidades"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
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
          <Box display="flex" flexWrap="wrap" gap={1} marginY={2}>
            {[
              "General",
              "Agilidad",
              "Pase",
              "Fuerza",
              "Mutación",
              "Especial",
            ].map((type) => (
              <Chip
                key={type}
                label={type}
                clickable
                color={filterType.includes(type) ? "primary" : "default"}
                onClick={() => handleTypeChange(type)}
              />
            ))}
          </Box>
        </Box>
        <Grid
          justifyContent={"center"}
          style={{ marginTop: ".5rem" }}
          container
          spacing={2}
        >
          {filteredSkills.length > 0 ? (
            filteredSkills?.map((skill) => (
              <Grid item xs={12} key={skill.id}>
                <Card style={{ boxShadow: "none" }}>
                  <CardHeader title={skill.name} subheader={skill.type} />
                  <CardContent>
                    {skill.description.map((desc, index) => (
                      <Typography key={index} variant="body1">
                        {desc}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <NoData />
          )}
        </Grid>
      </Box>
    );
  }

  return null;
}
