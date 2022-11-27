import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const defaultQuestionList = {
    1: [
      {
        question: 'What is the full form of DBMS?',
        options: [
          'Data of Binary Management System',
          'Database Management System',
          'Database Management Service',
          'Data Backup Management System',
        ],
        answer: 'Database Management System',
      },
      {
        question:
          'In which of the following formats data is stored in the database management system?',
        options: ['Image', 'Table', 'Text', 'Graph'],
        answer: '2',
      },
      {
        question: 'Which of the following is not an example of DBMS?',
        options: ['MySQL', 'Microsoft Acess', 'IBM DB2', 'Google'],
        answer: '4',
      },
      {
        question: 'Which of the following is a function of the DBMS?',
        options: [
          'Storing data',
          'Providing multi-users access control',
          'Data Integrity',
          'All of the above',
        ],
        answer: '4',
      },
      {
        question: 'What does an RDBMS consist of?',
        options: [
          'Collection of Records',
          'Collection of Keys',
          'Collection of Tables',
          ' Collection of Fields',
        ],
        answer: '3',
      },
    ],
    2: [
      {
        question:
          'Which one of the following errors will be handle by the operating system?',
        options: [
          'lack of paper in printer',
          'connection failure in the network',
          'power failure',
          'all of the mentioned',
        ],
        answer: 'all of the mentioned',
      },
      {
        question: 'Where is the operating system placed in the memory?',
        options: [
          'either low or high memory (depending on the location of interrupt vector)',
          'in the low memory',
          'in the high memory',
          'none of the mentioned',
        ],
        answer: 'either low or high memory (depending on the location of interrupt vector)',
      },
      {
        question:
          'In Operating Systems, which of the following is/are CPU scheduling algorithms?',
        options: [
          'Priority',
          'Round Robin',
          'Shortest Job First',
          'All of the mentioned',
        ],
        answer: 'All of the mentioned',
      },
      {
        question:
          'Which one of the following is not a real time operating system?',
        options: ['RTLinux', 'Palm OS', 'QNX', ' VxWorks'],
        answer: 'Palm OS'
      },
      {
        question: 'What does OS X has?',
        options: [
          'monolithic kernel with modules',
          'microkernel',
          ' monolithic kernel',
          'hybrid kerne',
        ],
        answer: 'hybrid kerne',
      },
    ],
  };


const DisplayQuestions = ({questions, courseName}) => {
  const [selectedOption, setSelectedOption] = useState();
  const optionClicked = (val) => { 
    setSelectedOption(val);
  };
  const onSubmitClick = (answer) => {
    if(answer === selectedOption) {
      // TODO: ans was correct
    }else {
         // TODO: ans was not correct
    }
    console.log("onSubmitClick -- ", answer, selectedOption);
  }

  return (
    <div style={{alignItems: 'center'}}>
    <h3 style={{flex:3, marginTop : 20}}>{courseName}</h3>
    <div style={{flex:2}}>
      {questions.map((question, index) => {
        return (
          <Card key={index} sx={{ Width: 500 }} style={{margin:20, alignSelf: 'center'}} onClick={() => {}}>
            <CardActionArea>
                <CardContent>
                    <div  style={{borderTop: 2, borderTopColor: 'black', borderTopWidth: 2}}>
                        <Typography gutterBottom variant="h4" component="div" 
                  >
                        {question.question}
                    </Typography>

                    </div>
                <Typography variant="body2" color="text.secondary">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel style={{fontSize: '20px'}} value={question.options[0]} control={<Radio />} label={question.options[0]} onClick={() => optionClicked(question.options[0])} />
                    <FormControlLabel value={question.options[1]} control={<Radio />} label={question.options[1]} onClick={() => optionClicked(question.options[1])} />
                    <FormControlLabel value={question.options[2]} control={<Radio />} label={question.options[2]} onClick={() => optionClicked(question.options[2])} />
                    <FormControlLabel value={question.options[3]} control={<Radio />} label={question.options[3]} onClick={() => optionClicked(question.options[3])} />
                  </RadioGroup>
                  <Button variant="contained" onClick={() => onSubmitClick(question.answer)}>Submit</Button>
                </FormControl>
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </div>
    </div>
  )
} 

const TakeQuiz = () => {
    const location = useLocation();
    return (
        <div style={{display: 'flex', flexDirection: 'column', width:'50%',  alignItems: 'center'}}>
          {Object.keys(defaultQuestionList).map((item, index) => {
            if(location.state.course.id == item) {
              const questions = defaultQuestionList[item];
              return (
               <DisplayQuestions key={index} questions={questions} courseName={location.state.course.course_name} />
              )              
            }
            return <></>;
          })}
        </div>

    );
}

export default TakeQuiz;
