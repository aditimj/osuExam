import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const LiveQuizReview = () => {


    const getColor = (val) => {
        console.log("val -- ", val);
        if(val == 'Correct') {
            return {
                color: 'green'
            }
        }
        if(val == 'Incorrect') {
            return {
                color: 'orange'
            }
        }
        if(val == 'Malpractice') {
            return {
                color: 'red'
            }
        }
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#BB0000',//theme.palette.common.black,
          color: theme.palette.common.white,
          fontSize: 18,
          textAlign: 'center',

        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
          textAlign: 'center',
        },
      }));

      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

        function createData(
        SID,
        name,
        Q1,
        Q2,
        Q3,
        Q4,
        Q5,
        ) {
        return { SID, name, Q1,Q2,Q3,Q4,Q5};
        }

        const rows = [
        createData( 1, 'ABC', 'Correct','Incorrect','Malpractice','Correct','Incorrect'),
        createData( 2, 'XYZ', 'Correct','Correct','Incorrect','Correct','Malpractice'),
        createData( 3, 'FGH', 'Incorrect','Correct','Malpractice','Correct','Correct'),
        createData( 4, 'IJK', 'Correct','Incorrect','Malpractice','Correct','Malpractice'),
        createData( 5, 'LMN', 'Malpractice','Incorrect','Correct','Incorrect','Malpractice'),
        createData( 6, 'JSL', 'Incorrect','Incorrect','Correct','Incorrect','Malpractice'),
        createData( 7, 'FSA', 'Correct','Incorrect','Correct','Incorrect','Malpractice'),
        createData( 8, 'CDS', 'Malpractice','Incorrect','Correct','Malpractice','Malpractice'),
        createData( 9, 'SCC', 'Correct','Incorrect','Correct','Incorrect','Malpractice'),
        createData( 10, 'VSA', 'Malpractice','Incorrect','Correct','Incorrect','Malpractice'),
        createData( 11, 'BFD', 'Correct','Incorrect','Malpractice','Incorrect','Correct'),
        createData( 12, 'VSA', 'Correct','Correct','Correct','Incorrect','Malpractice'),
        createData( 13, 'DFGR', 'Correct','Incorrect','Malpractice','Incorrect','Malpractice'),
        createData( 14, 'RTF', 'Malpractice','Incorrect','Correct','Incorrect','Correct'),
        createData( 15, 'GHF', 'Incorrect','Malpractice','Correct','Incorrect','Malpractice'),
        ];

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SID</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Q1</StyledTableCell>
                <StyledTableCell align="right">Q2</StyledTableCell>
                <StyledTableCell align="right">Q3</StyledTableCell>
                <StyledTableCell align="right">Q4</StyledTableCell>
                <StyledTableCell align="right">Q5</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.SID}>
                  <StyledTableCell component="th" scope="row">
                    {row.SID}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.name}
                </StyledTableCell>
                  <StyledTableCell align="right"  style={getColor(row.Q1)}>{row.Q1}</StyledTableCell>
                  <StyledTableCell align="right" style={getColor(row.Q2)}>{row.Q2}</StyledTableCell>
                  <StyledTableCell align="right" style={getColor(row.Q3)}>{row.Q3}</StyledTableCell>
                  <StyledTableCell align="right" style={getColor(row.Q4)}>{row.Q4}</StyledTableCell>
                  <StyledTableCell align="right" style={getColor(row.Q5)}>{row.Q5}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};
export default LiveQuizReview;
