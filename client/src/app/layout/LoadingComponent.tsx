import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
interface Props {
  message?: string;
}
export default function LoadingComponent({ message = "Loading..." }: Props) {
  return (
    <Backdrop open={true} invisible>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100"
      >
        <CircularProgress size={100} color="primary" />
        <Typography variant="h4" sx={{ justifyContent: "center" }}></Typography>
      </Box>
    </Backdrop>
  );
}
