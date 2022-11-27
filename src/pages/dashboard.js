import React, { useEffect, useState } from "react";

import CustomNav from "../components/CustomNav";

import "./login.scss";
import "./styles.scss";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import PreviewRoundedIcon from '@mui/icons-material/PreviewRounded';
import Footer from '../components/footer';
import StudentInstructorDashboard from "./StudentInstructorDashboard";
import DashboardHeader from "./DashboardHeader";
import { getDataFromstorage, putDataInStorage } from "./util";

const defaultStudendCourseList = [
  {
    course_name: "Adv DBMS",
    id: 1
  },
  {
    course_name: "Operating Systems",
    id: 2
  },
  {
    course_name: "Artificial Int",
    id: 3
  },
  {
    course_name: "English",
    id: 4
  },
  {
    course_name: "Data Mining",
    id: 5
  },
  {
    course_name: "Artificial Int",
    id: 6
  },
  {
    course_name: "Artificial Int",
    id: 7
  },
  {
    course_name: "Artificial Int",
    id: 9 
  }

]
const defaultInstructorCourseList = [
  {
    course_name: "Adv DBMS",
    id: 1
  },
  {
    course_name: "Data Mining",
    id: 5
  },
  {
    course_name: "Introduction to DBMS",
    id: 9 
  }

]

// TODO: get coursesList based on isStudent by api integration and pass it to dashboard 

const Dashboard = ({ data, isStudent, coursesList = defaultStudendCourseList }) => {
  const [currUserData, setCurrUserData] = useState(data);
  const onDashboardClick = () => {
    console.log("onDashboardClick");
  };
  const onLogoutClick = () => {
    console.log("onLogoutClick");
  };

  useEffect(() => {
    if(!data?.length) {
      console.log("btoooo");
      const storageData = getDataFromstorage("loginData");
      if(storageData) {
        setCurrUserData(storageData);
      }
    }
  },[]);

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'row'
    }}>
      <CustomNav
        userName={currUserData?.loginId}
        isStudent={isStudent}
        li={[
          [
            "Dashboard",
            <DashboardRoundedIcon
              fontSize="large"
              style={{
                height: "35px",
                width: "35px",
                color: "#354259",
              }}
            />,
            onDashboardClick,
            "all",
          ],
          [
            "Take Quiz   ",
            <NoteAltRoundedIcon
              fontSize="large"
              style={{
                height: "35px",
                width: "35px",
                color: "#354259",
              }}
            />,
            onLogoutClick,
            "student",
          ],
          [
            "Monitor Quiz   ",
            <PreviewRoundedIcon
              fontSize="large"
              style={{
                height: "35px",
                width: "35px",
                color: "#354259",
              }}
            />,
            onLogoutClick,
            "instructor",
          ],
          [
            "Logout   ",
            <ExitToAppRoundedIcon
              fontSize="large"
              style={{
                height: "35px",
                width: "35px",
                color: "#354259",
              }}
            />,
            onLogoutClick,
            "all"
          ],
        ]}
      />
      <div style={{
        flexDirection: 'column',
        display: 'flex',
        flex:1
      }}>
      <DashboardHeader userName={currUserData?.loginId} />
      {isStudent ? (
        <>
         <StudentInstructorDashboard coursesList={defaultStudendCourseList} />
        </>
      ) : (
        <>
           <StudentInstructorDashboard coursesList={defaultInstructorCourseList} />
        </>
      )}
       <Footer />
      </div>
   
    </div>
  );
};

export default Dashboard;
