import React from "react";
import Navbar from "../../../components/organisms/navbar";
import "./index.css";

const MealPlan = () => {
  return (
    <div className=" premium-home-container">
      <Navbar
        link1={"Plan prehrane"}
        link1href='/meal-plan'
        link2={"Plan vjezbanja"}
        link2href='/workout-plan'
        link3={"Bmi kalkulator"}
        link3href='/bmi-calculator'
        link4={"Kolo srece"}
        link4href='/fortune-wheele'

        active={"Plan prehrane"}
      />
    </div>
  );
};

export default MealPlan;
