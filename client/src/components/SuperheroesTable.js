import React, { useEffect, useState } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerCell: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

const SimpleTable = () => {
  const [rows, setRows] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const getSuperheroes = async () => {
      // fetch uses the "proxy" value set in client/package.json
      let response = await fetch('/superhero');
      let data = await response.json();
      setRows(data);
    };
    getSuperheroes();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Name</TableCell>
            <TableCell className={classes.headerCell}>Nickname</TableCell>
            <TableCell className={classes.headerCell}>Alter Ego</TableCell>
            <TableCell className={classes.headerCell}>Sidekick</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell>{row.nickname}</TableCell>
              <TableCell>{row.alterego}</TableCell>
              <TableCell>{row.sidekick}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
