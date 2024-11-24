import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Loading() {
  const [saturation, setSaturation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSaturation((prev) => (prev + 10) % 100);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box position="relative" width={200} height={200}>
        <img
          src="/assets/images/portrait.png"
          alt="Loading"
          width={200}
          height={200}
          style={{
            filter: "grayscale(100%)",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height={`${saturation}%`}
          overflow="hidden"
        >
          <img
            src="/assets/images/portrait.png"
            alt="Loading"
            width={200}
            height={200}
            style={{
              filter: "none",
            }}
          />
        </Box>
      </Box>
      <Typography
        className="sportingFont"
        variant="h5"
        style={{ marginTop: 20 }}
      >
        Cargando
      </Typography>
    </Box>
  );
}
