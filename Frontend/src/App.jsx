import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Lazy-load components for better performance
const Homepage = lazy(() => import("./public/Home/HomePage"));
const Login = lazy(() => import("./public/Auth/CustomerLogin"));
const Registeration = lazy(() => import("./public/Auth/CustomerRegisteration"));
const AgencyRegistration = lazy(()=> import("./public/Auth/AgencyRegistration"))
const ForgetPassword = lazy(() => import("./public/Auth/ForgetPassword"));
const AgencyDashboard = lazy(() => import("./public/Agency/AgencyDashboard"));
const CreatePackage = lazy(() => import("./public/Agency/CreatePackage"));
const EditPackages = lazy(() => import("./public/Agency/EditPackages"));
const ManagePackages = lazy(() => import("./public/Agency/ManagePackages"));
const Booking = lazy(() => import("./public/Agency/Booking"));
const ProfileSetting = lazy(() => import("./public/Agency/ProfileSetting"));
const WelcomePage = lazy(() => import("./public/Customer/WelcomePage"));
const CustomerProfile = lazy(() => import("./public/Customer/CustomerProfile"));
const EditProfile = lazy(() => import("./public/Customer/EditProfile"));
const ExplorePackages = lazy(() => import("./public/Customer/ExplorePackages"));
const MyBookings = lazy(() => import("./public/Customer/MyBookings"));
const CustomerSupport = lazy(()=>import("./public/Customer/CustomerSupport"))


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/registeration" element={<Registeration />} />
          <Route path="/agencyregistration" element={<AgencyRegistration/>}/>
          <Route path="/agencydashboard" element={<AgencyDashboard />} />
          <Route path="/createpackage" element={<CreatePackage />} />
          <Route path="/editpackages" element={<EditPackages />} />
          <Route path="/managepackages" element={<ManagePackages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profilesettings" element={<ProfileSetting />} />

          {/* customer */}
          <Route path="/welcomepage" element = {<WelcomePage />}/>
          <Route path="/customerprofile" element = {<CustomerProfile />}/>
          <Route path="/editprofile" element = {<EditProfile />}/>
          <Route path="/explorepackages" element = {<ExplorePackages />}/>
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/customersupport" element={<CustomerSupport />} />



        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
