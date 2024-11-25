import { Box, Typography } from "@mui/material";

export function NoData({ title }: { title?: string }) {
  return (
    <Box
      marginTop={"5rem"}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Typography className="sportingFont" variant="h4" gutterBottom>
        {title || "Sin datos"}
      </Typography>
      <Box
        component="img"
        src={"/assets/images/no-data.png"}
        alt="no-data"
        maxWidth="100%"
        width="300px"
        height="auto"
      />
    </Box>
  );
}
