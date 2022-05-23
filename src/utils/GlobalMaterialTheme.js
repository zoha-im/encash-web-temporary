import { createTheme } from "@mui/material/styles"

const buttonStyles = {
  fontSize: "0.89rem",
  fontWeight: "600",
  backgroundColor: "#2dc46c",
  color: "#ffffff",
  boxShadow: "none",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2dc46c",
    boxShadow: "none",
  },
}

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: "#2dc46c",
      secondary: "#124e2b",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          fontSize: "0.89rem",
          fontWeight: "600",
          backgroundColor: "#2dc46c",
          color: "#ffffff",
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#2dc46c",
            boxShadow: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "0.89rem",
          margin: "0.5rem 0",
        },
      },
    },
  },
})
