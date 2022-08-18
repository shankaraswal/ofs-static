
import React from 'react'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../../assets/theme/foundation/theme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Dialog } from '@material-ui/core';
import ClassDetailsDialog from './classDetails';




export default function ClassList(){
  const [open, setOpen] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


    return (
        <ThemeProvider theme={theme}>
          <List className="classList">
            <ListItem className="listHead">
              <ListItemText variant="h4"  primary={`Sunday, November 20`}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={`8:00am`} secondary={`30mins`} xl={12} />
              <ListItemText primary={`Hiit Class`} secondary={'Room 2'} className="pointer" onClick={handleClickOpen} />
              {/* <ListItemText primary={`Hiit Class`} secondary={'Room 2'} className="pointer" /> */}
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Tory Hale`} />
              <ListItemText secondary={`3 spots left`} />
              <ListItemSecondaryAction >
                <Button variant="outlined" color="secondary" >Book</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary={`9:00am`} secondary={`30mins`} />
              <ListItemText primary={`Session title`} className="pointer" onClick={handleClickOpen} />
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Claire Webb`} />
              <ListItemText secondary={`No spots left`} />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="secondary">Join waitlist</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary={`10:00am`} secondary={`30mins`} />
              <ListItemText primary={`Session title`} secondary={'Room 2'} className="pointer" onClick={handleClickOpen} />
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Kyle Black`} />
              <ListItemText secondary={`3 spots left`} />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="secondary">Book</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem className="listHead">
            <ListItemText variant="h4"  primary={`Monday, November 21`}/>
            </ListItem>
            <ListItem>
              <ListItemText primary={`8:00am`} secondary={`30mins`} xl={12} />
              <ListItemText primary={`Hiit Class`} secondary={'Room 2'} className="pointer" onClick={handleClickOpen} />
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Tory Hale`} />
              <ListItemText secondary={`3 spots left`} />
              <ListItemSecondaryAction >
                <Button variant="outlined" color="secondary">Book</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary={`9:00am`} secondary={`30mins`} />
              <ListItemText primary={`Hiit Class`} className="pointer" onClick={handleClickOpen} />
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Claire Webb`} />
              <ListItemText secondary={`No spots left`} />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="secondary">Join waitlist</Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText primary={`10:00am`} secondary={`30mins`} />
              <ListItemText primary={`Session title`} secondary={'Room 2'} />
              <ListItemAvatar>
                <Avatar className="avatar" alt={`Avatar`} src={`https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753`} />
              </ListItemAvatar>
              <ListItemText secondary={`Kyle Black`} />
              <ListItemText secondary={`3 spots left`} />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="secondary">Book</Button>
              </ListItemSecondaryAction>
            </ListItem>
        </List>

      {/* Class Details Dialog Modal */}
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <ClassDetailsDialog />
      </Dialog>
      </ThemeProvider>
    )
}