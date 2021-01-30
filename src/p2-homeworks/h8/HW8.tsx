import React, { useState } from "react";
import { homeWorkReducer } from "./bll/homeWorkReducer";
import {
  Box,
  Button,
  createStyles,
  Icon,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
  withStyles,
} from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FindInPageIcon from "@material-ui/icons/FindInPage";

type PersonT = {
  _id: number;
  name: string;
  age: number;
};

export type InitialPeopleT = Array<PersonT>;

const initialPeople = [
  { _id: 0, name: "Кот", age: 3 },
  { _id: 1, name: "Александр", age: 66 },
  { _id: 2, name: "Коля", age: 16 },
  { _id: 3, name: "Виктор", age: 44 },
  { _id: 4, name: "Дмитрий", age: 40 },
  { _id: 5, name: "Ирина", age: 55 },
];

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      transition: "all .5s ease",
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      "&:hover": {
        backgroundColor: "#9c81f775",
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    maxWidth: "200px",
    marginBottom: "25px",
  },
  btnContainer: {
    display: "flex",
    "& div": {
      marginRight: "12px",
      "&:last-child": {
        marginRight: "0px",
      },
    },
  },
  button: {
    width: "120px",
    fontSize: "10px",
  },
});

function HW8() {
  const classes = useStyles();

  const [people, setPeople] = useState(initialPeople);

  const finalPeople = people.map((p) => (
    <StyledTableRow key={p._id}>
      <StyledTableCell align="center">{p.name}</StyledTableCell>
      <StyledTableCell align="center">{p.age}</StyledTableCell>
    </StyledTableRow>
  ));

  const sortData = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPeople(
      homeWorkReducer(initialPeople, {
        type: "sort",
        payload: e.currentTarget.value,
      })
    );
  };

  const getAdult = () =>
    setPeople(homeWorkReducer(initialPeople, { type: "check", payload: "18" }));

  return (
    <div>
      homeworks 8
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{finalPeople}</TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.btnContainer}>
        <div>
          <Button
            onClick={sortData}
            variant="contained"
            value={"up"}
            color="primary"
            className={classes.button}
            endIcon={<ArrowUpwardIcon style={{ width: "12px" }} />}
          >
            sort up
          </Button>
        </div>
        <div>
          <Button
            onClick={sortData}
            variant="contained"
            value={"down"}
            color="primary"
            className={classes.button}
            endIcon={<ArrowDownwardIcon style={{ width: "12px" }} />}
          >
            sort down
          </Button>
        </div>
        <div>
          <Button
            onClick={getAdult}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<FindInPageIcon style={{ width: "12px" }} />}
          >
            check 18
          </Button>
        </div>
      </Box>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr />
    </div>
  );
}

export default HW8;
