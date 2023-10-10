import "./App.css";
import { useState, useEffect } from "react";
import Forgetpassword from "./ForgetPassword/Forgetpassword";

import ResetPassword from "./ResetPassword/ResetPassword";
import ProductCards from "./components/Product cards/ProductCards";

// import Index from "./components/Home/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import Adminpanal from "./adminPanel/Adminpanel";
import AdminProfile from "./adminPanel/adminProfile/AdminProfile";
import Compaing from "./adminPanel/compaing/Compaing";
// import Listing from "./adminPanel/listing/Listing";
import UserProfile from "./userPanel/userProfile/UserProfile";
// import Card from "./adminPanel/cards/Card";
// import UserIndex from "./userHome/Home/UserIndex";
// import Index from "./components/Home/Index";
import Pay from "./components/pay/Pay";
import SubscriptionCard from "./adminPanel/SubscriptionCard/SubscriptionCard";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import UserPanel from "./userPanel/UserPanel";
import AdminPay from "./components/adminPay/AdminPay";
import LandindIndex from "./landing/Components/landingIndex/LandindIndex";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandindIndex />}></Route>
            <Route path="/admin" element={<Adminpanal />}></Route>
            <Route path="/Login" element={<LoginForm />}></Route>
            <Route path="/register" element={<RegisterForm />}></Route>
            <Route path="/compaing" element={<Compaing />}></Route>
            {/* <Route path="/listing" element={<Listing />}></Route> */}
            <Route path="/userProfile" element={<UserProfile />}></Route>
            {/* <Route path="/userHome" element={<UserIndex />}></Route> */}
            <Route path="/sub" element={<SubscriptionCard />}></Route>
            <Route path="/pay/:id" element={<Pay />}></Route>
            <Route path="/adminPay" element={<AdminPay />}></Route>
            <Route path="/userPanel" element={<UserPanel />}></Route>
            <Route path="/adminProfile" element={<AdminProfile />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
export default App;
