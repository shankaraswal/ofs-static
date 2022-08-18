import React from 'react';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import { Container} from '@material-ui/core';
//import Header from './views/common/topnav/header';
import Classes from './views/classes/classes';
// import CustomizedSnackbars from './assets/snackbar/snackbar';



function App() {
  return (
    <>
      {/* <Container maxWidth="xl">
        <Header />
      </Container> */}
      <Container maxWidth="xl">
        <Classes />
      </Container>
      {/* <CustomizedSnackbars /> */}
    </>
  );
}

export default App;
