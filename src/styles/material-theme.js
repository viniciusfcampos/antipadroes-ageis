const { createTheme } = require("@mui/material");

const materialTheme = createTheme({
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 800
    }
  },
  components: {
    MuiTypography: {
      h1: {
        fontWeight: 800
      }
    }
  },
});

export default materialTheme