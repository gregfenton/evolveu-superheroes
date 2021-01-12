import './App.css';
import { AppBar, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ShieldIcon from '@material-ui/icons/Security';
import SuperheroesTable from './components/SuperheroesTable';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <ShieldIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            Super Heroes
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth='md'>
        <SuperheroesTable />
      </Container>
    </>
  );
};

export default App;
