import Home from './pages/Home';
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
