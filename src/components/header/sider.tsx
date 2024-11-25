import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC } from "react";
import { ThemedSiderV2 } from "../layout/sider";

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
            <div>{logout}</div>
          </div>
        );
      }}
    />
  );
}
