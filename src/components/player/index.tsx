import {
  Box,
  Button,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC, useState } from "react";
import { useSkillByName } from "../../hooks/api/useSkill";
import { Player } from "../../pages/teams/types";

export const PlayerStats: FC<{ player: Player }> = ({ player }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const normalizedSkill = selectedSkill?.split("(")[0].trim();
  const {
    error,
    isLoading,
    skill: skillData,
  } = useSkillByName(normalizedSkill || "");

  const handleClickOpen = (skill: string) => {
    setSelectedSkill(skill);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSkill(null);
  };

  return (
    <Box
      bgcolor={theme.palette.background.paper}
      sx={{
        margin: { sm: ".5rem", xs: ".5rem 0" },
      }}
    >
      <CardContent>
        <Typography
          textAlign={"center"}
          fontWeight={"bolder"}
          variant="h5"
          component="div"
          color={"primary"}
        >
          {player.name}
        </Typography>
        <Grid
          container
          columns={14}
          gap={2}
          margin={"1rem 0"}
          justifyContent={"center"}
        >
          <Grid item xs={2}>
            <Box borderRadius={1} bgcolor={theme.palette.grey[500]}>
              <Typography
                textAlign={"center"}
                fontWeight={"bolder"}
                variant="h6"
              >
                {player.movement}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                MV
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              borderRadius={1}
              bgcolor={theme.palette.grey[500]}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                textAlign={"center"}
                fontWeight={"bolder"}
                variant="h6"
              >
                {player.strength}
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                FU
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              borderRadius={1}
              bgcolor={theme.palette.grey[500]}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                textAlign={"center"}
                fontWeight={"bolder"}
                variant="h6"
              >
                {player.agility}+
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                AG
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              borderRadius={1}
              bgcolor={theme.palette.grey[500]}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                textAlign={"center"}
                fontWeight={"bolder"}
                variant="h6"
              >
                {player.passing}+
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                PS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box
              borderRadius={1}
              bgcolor={theme.palette.grey[500]}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                textAlign={"center"}
                fontWeight={"bolder"}
                variant="h6"
              >
                {player.armor}+
              </Typography>
              <Typography textAlign={"center"} variant="body1">
                AR
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          marginTop={1}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {player?.skills?.length > 0 &&
            player.skills.map((skill, index) => (
              <Chip
                onClick={() => handleClickOpen(skill)}
                key={index}
                label={skill}
                size="small"
                color={"warning"}
                style={{
                  fontSize: 16,
                  marginRight: 4,
                  marginBottom: 4,
                  backgroundColor: theme.palette.secondary.main,
                }}
              />
            ))}
        </Box>
        <Box marginTop={1}>
          <Typography textAlign={"center"} variant="body1">
            Primarias:{" "}
            <span style={{ fontWeight: "bolder" }}>{player.primary}</span>
          </Typography>
          <Typography textAlign={"center"} variant="body1">
            Secundarias:{" "}
            <span style={{ fontWeight: "bolder" }}>{player.secondary}</span>
          </Typography>
        </Box>
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle fontWeight={"bolder"} color={"secondary"}>
          {skillData?.name}
        </DialogTitle>
        <DialogContent>
          {skillData?.description.map((desc, index) => (
            <Typography key={index} variant="body1">
              {desc}
            </Typography>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
