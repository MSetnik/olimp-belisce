import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Pages
import Login from "./pages/login";
import WorkoutPlan from "./pages/premium-user/workout-plan";
import MealPlan from "./pages/premium-user/meal-plan";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="workout-plan" element={<WorkoutPlan />} />
      <Route path="meal-plan" element={<MealPlan />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
