import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import 'typeface-roboto';
import LandingSection from './components/LandingSection';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
import AboutMeSection from './components/AboutMeSection';
// import SpeedDial from './components/SpeedDial';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
        main: '#424242',
    },
    secondary: {
        main: '#1d83c6',
    },
},
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <LandingSection />
        <AboutMeSection />
        {/* <SpeedDial /> */}
      </ThemeProvider>
    </div>
  );
}

export default withTheme(App);
