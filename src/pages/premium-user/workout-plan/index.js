import React from "react";
import Navbar from "../../../components/organisms/navbar";
import "./index.css";

const WorkoutPlan = () => {
  return (
    <div className="premium-home-container">
      <Navbar
        link1={"Plan prehrane"}
        link1href='/meal-plan'
        link2={"Plan vjezbanja"}
        link2href='/workout-plan'
        link3={"Bmi kalkulator"}
        link4={"Kolo srece"}
        active={"Plan vjezbanja"}
      />
    </div>
  );
};

export default WorkoutPlan;
