import { Box, Grid } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Header } from "./components/Header";

import { Routes } from "./routes/index.routes";


function App() {
  return (
    <Router>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        bg="burgundy.800"
        py="2"
      >

        <Header />
        <Grid
          w="100%"
          h="100%"
          templateRows="1fr"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <Routes />
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
