

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const StudentInstructorDashboard = ({coursesList}) => {
    const navigate = useNavigate();
    const onCardClick = (course) => {
        //TODO: navigate to take quiz page 
        navigate('/takeQuiz', {state:{course:course}}); 
        console.log("course selected -- ", course);
    }
    return (
        <>
        <ul style={{flexDirection : 'row', display: 'flex', flexWrap: 'wrap'}}>
            {coursesList.map((item, id) => {
            
            return (
                <Card key={id} sx={{ maxWidth: 345 }} style={{margin:20}} onClick={() => onCardClick(item)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://1000logos.net/wp-content/uploads/2018/01/Ohio-State-Logo.png"
                        alt="OSU"
                    />
                    <CardContent>
                        <div  style={{borderTop: 2, borderTopColor: 'black', borderTopWidth: 2}}>
                            <Typography gutterBottom variant="h4" component="div" 
                       >
                            {item.courseName}
                        </Typography>

                        </div>
                    <Typography variant="body2" color="text.secondary">
                       
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            );
            })}
        </ul>
        </>
    );
};

export default StudentInstructorDashboard;

    