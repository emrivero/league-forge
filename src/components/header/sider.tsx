import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ThemedSiderV2 } from "@refinedev/mui";
import { FC } from "react";

export const Title: FC = () => {
  const theme = useTheme();
  return (
    <Typography
      color={theme.palette.primary.main}
      fontWeight={"bolder"}
      component={"h1"}
    >
      League Forge
    </Typography>
  );
};

export function Sider() {
  return (
    <ThemedSiderV2
      Title={Title}
      render={({ items, logout }) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>{items}</div>
            <div style={{ marginTop: "60vh" }}>{logout}</div>
          </div>
        );
      }}
    />
  );
}
