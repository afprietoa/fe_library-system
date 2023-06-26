import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "./routes/AppRouter";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
function App() {
  return (
    <DarkModeContextProvider>
    <AuthContextProvider>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
    </AuthContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;

