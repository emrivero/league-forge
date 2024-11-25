import { Grid } from "@mui/material";
import React from "react";
import { PlayerStats } from "../../../components/player";
import { Player } from "../types";

type PlayerStatsProps = {
  players: Player[];
};

export const Players: React.FC<PlayerStatsProps> = ({ players }) => {
  return (
    <Grid container>
      {players.map((player) =>
        player.name !== "ReRolls" ? (
          <Grid item xs={12} sm={6} md={4} key={player.name}>
            <PlayerStats player={player} />
          </Grid>
        ) : null
      )}
    </Grid>
  );
};
