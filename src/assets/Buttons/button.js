import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import './button.scss'; 


export default function OfsButton() {
    return(
        <div>
            <p>Contained Button</p>
            <p>
                <Button color="secondary" size="medium" variant="contained">Default</Button> 
                <Button color="secondary" size="medium" variant="contained" startIcon={<Add />}>With icon</Button> 
                <Button color="secondary" size="small" variant="contained">Small</Button> 
            </p>
            <p>Outlined Button</p>
            <p>
                <Button color="secondary" variant="outlined" startIcon={<Add />}>Defaut</Button> 
                <Button color="secondary" size="medium" variant="outlined" startIcon={<Add />}>With icon</Button> 
                <Button color="secondary" size="small" variant="outlined" startIcon={<Add />}>Small</Button> 
            </p>
        </div>
    );
};