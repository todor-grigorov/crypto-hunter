import Header from './components/Header';
import RoutesList from './components/RoutesList';
import './styles.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    mode: 'dark',
  },
});
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundColor: '#141618',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <RoutesList />
      </div>
    </ThemeProvider>
  );
};

export default App;
