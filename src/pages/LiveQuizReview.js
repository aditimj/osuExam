import React, { useCallback,useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import studentResponseApi from '../api/studentResponse';

const LiveQuizReview = () => {
  const location = useLocation();
  const course = location.state.course;
  const [rows, setRows] = useState([]);
  const [isConnected, setConnected] = useState(false);
  if(!isConnected){
    var wb  = new WebSocket("ws://localhost:80/WebSocket")
    debugger;
    wb.onopen = function()
    {
      setConnected(true);
      console.log("Connected");
    }
    wb.onmessage = function(e)
    {
      let obj = JSON.parse(e.data);
      [].some.call(Object.keys(obj),function(key){
        [].some.call(obj[key],function(row){
          if(document.getElementById(key+"."+row.first)!=undefined)
          {document.getElementById(key+"."+row.first).innerText = row.second;
          document.getElementById(key+"."+row.first).style = getColor(row.second);
          }
          else{
            let td = document.createElement("td");
            let color = getColor(row.second);
            td.setAttribute('class','MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-1vr29kj-MuiTableCell-root');
            td.setAttribute('id',key+"."+row.first);
            td.setAttribute('style','color:'+color.color);
            td.innerText = row.second;
            if(document.getElementById("div_"+key)!=undefined){
            document.getElementById("div_"+key).appendChild(td);
            }
            if(document.getElementById("div_"+key)!=undefined){
              document.getElementById("div_"+key).appendChild(td);
              }
          }
        })
      })
      
    }
}
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
      const [loading, setLoading] = useState(false);
      const loadStudentResponse = useCallback(async () => {
        if (loading || Object.keys(rows).length>0) return;
      
        setLoading(true);
        try {
          const json =  await studentResponseApi.getAllStudentResponse(course.exam.id);
          setRows(json);
        } catch (_error) {
        }
        setLoading(false);
      }, [loading, rows]);

      useEffect(() => {
        loadStudentResponse();
      }, [rows]);
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

        
        if (rows.length==0) {
          return <Loader size={50} />;
        }else {
        return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SID</StyledTableCell>
                <StyledTableCell align="right">Q1</StyledTableCell>
                <StyledTableCell align="right">Q2</StyledTableCell>
                <StyledTableCell align="right">Q3</StyledTableCell>
                <StyledTableCell align="right">Q4</StyledTableCell>
                <StyledTableCell align="right">Q5</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(rows).map((key) => (
                <StyledTableRow id={"div_"+key} key={key}>
                  <StyledTableCell component="th" scope="row">
                    {key}
                  </StyledTableCell>
                  {rows[key].map(row=>(
                    <StyledTableCell id={key+"."+row.first} align="right"  style={getColor(row.second)}>{row.second}</StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
              }
};
export default LiveQuizReview;
