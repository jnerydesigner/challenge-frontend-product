import { Box } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Home } from './pages/Home';


function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bg="burgundy.200"
    >
      <Header />
      <Home />
    </Box>
  );
}

export default App;
