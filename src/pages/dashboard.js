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

const Dashboard = ({ data, isStudent, coursesList }) => {
  const [currUserData, setCurrUserData] = useState(data);
  if(Object.keys(data)?.length>0)
  {
    isStudent = data.UserDetails.loginType == 'S';
    coursesList = data.UserDetails.courseList;
  }
  const onDashboardClick = () => {
    console.log("onDashboardClick");
  };
  const onLogoutClick = () => {
    console.log("onLogoutClick");
  };

  useEffect(() => {
    if(Object.keys(data)?.length>0) {
      console.log("btoooo");
      const storageData = getDataFromstorage("loginData");
      if(storageData) {
        setCurrUserData(JSON.parse(storageData));
        isStudent = data.UserDetails.loginType == 'S';
        coursesList = data.UserDetails.courseList;
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
         <StudentInstructorDashboard coursesList={coursesList} />
        </>
      ) : (
        <>
           <StudentInstructorDashboard coursesList={coursesList} />
        </>
      )}
       <Footer />
      </div>
   
    </div>
  );
};

export default Dashboard;
