import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import App_header from './components/app_header';
function App() {
  return (
    <div className="App">
      <App_header></App_header>
      <Box sx={{ bgcolor: '#cfe8fc'}}>
        <Container maxWidth="lx">
          <Box sx={{ bgcolor: 'blue', height: '100vh' }} />
        </Container>
      </Box>
    </div>
  );
}

export default App;
