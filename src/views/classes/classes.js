import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../assets/theme/foundation/theme'
import ClassListHeader from './classListHeader';
import ClassList from './list';
import './classes.scss';
// import InstructorDetails from './instructorDetails';

export default function Classes() {
  return (
    <>
    {/* <p className="secondary">Pellentesque vel duis adipiscing quis elementum et. Hendrerit convallis diam scelerisque at mauris lectus mauris aliquam at.<br/>Suspendisse urna lacinia enim vitae pharetra elit in eu fermentum. Elementum non, lectus mauris auctor dolor iaculis odio.</p> */}
    <ThemeProvider theme={theme}>
        <ClassListHeader />
        
        <ClassList />

        {/* <InstructorDetails /> */}
    </ThemeProvider>
    </>
  );
}