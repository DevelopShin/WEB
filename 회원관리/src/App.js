import React from "react";
import Customer from "./components/Customer";
import "./App.css"
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableBody } from "@mui/material"; import { withStyles } from "@mui/styles";
import { TableRow } from "@mui/material"; import { Paper } from "@mui/material";
import { TableCell } from "@mui/material";
import { padding } from "@mui/system";

const styles = theme => ({
      root: {
            width: '90%',
            margintTop: 1150,
            overflowX: "auto",

      },
      table: {
            minWidth: 800,
            padding:"0",
            margin:'3px',            
      },
      tableHead:{
            fontWeight: "bold"
      }
      
})

const customers = [{
      id: 1,
      image: 'https://placeimg.com/64/64/1',
      name: 'shin-kim',
      age: '112112',
      gender: 'male',
      job: 'SamSung'
},
{
      id: 2,
      image: 'https://placeimg.com/64/64/2',
      name: 'sung-kim', age: '2212333',
      gender: 'female', job: 'LG'
},
{
      id: 3,
      image: 'https://placeimg.com/64/64/3',
      name: 'pang-kim', age: '3322332',
      gender: 'female', job: 'Kia'
},


]

class App extends React.Component {
      render() {
            const {classes} = this.props;
            return (
                  <div className="App">
                              <input type="button" />
                        
                        <Paper className={classes.root} >
                        <Table className={classes.table} id="table-main">
                              <TableHead>
                        
                                    <TableRow className={classes.tableHead} id="oneCell">
                                          <TableCell >ID</TableCell>
                                          <TableCell >면상</TableCell>
                                          <TableCell>이름</TableCell>
                                          <TableCell>생년월일</TableCell>
                                          <TableCell>성별</TableCell>
                                          <TableCell>직업</TableCell>
                                    </TableRow>
                              </TableHead>

                              <TableBody>
                                    {customers.map(c => {
                                          return (<Customer key={c.id} id={c.id} name={c.name}
                                                job={c.job} image={c.image}
                                                age={c.age} gender={c.gender} />)
                                    })}
                              </TableBody>
                        </Table>
                        </Paper>
                  </div>
            )
      }
}

export default withStyles(styles)(App);
