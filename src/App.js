import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import App_header from './components/app_header';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
  // backgroundColor: '#1769aa',
  color: 'white'
}));

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 40,
  },
  {
    value: 60,
  },
  {
    value: 80,
  },
  {
    value: 100,
  },
];

function valuetext(value) {
  return `${value}`;
}

function App() {
  return (
    <div className="App">
      <App_header></App_header>
      <Box sx={{ marginTop:' 80px' }}>
        <Container maxWidth="lx">
          <p>About Me</p>
          <hr /><br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Item>
                <img src="background.png" alt="Italian Trulli" width="100%" />
              </Item>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Item>
                  <div style={{backgroundColor: '#1769aa', paddingLeft: '15px'}}>
                    <p style={{marginTop: 0, fontSize:'350%', marginBottom: '5%'}}>I'm Imai Ryo</p>
                    <p style={{margin: 0, fontSize:'100%'}}>
                    My name is Kevin and before I got into Web Development, I was working in the construction industry. I knew that this wasn't something I wanted to continue into the future especially due to the wear-and-tear it has on the body. I got in contact with some friends from different industries, a Web Developer, who showed me WHAT he does and HOW he does it. The things that can be accomplished with endless possibilities is what sparked my interest and curiosity for this challenging technical craft!
                    </p>
                  </div>
              </Item>
            </Grid>
          </Grid>
          <p>Skills</p>
          <hr /><br/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                valueLabelDisplay="on"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
