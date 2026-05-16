import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/jobx.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/Elements/Landing.js";
import Login from "views/Authentication/Login";
import Jobs from "views/JobListing/Jobs";
import Job from "views/JobListing/Job";
import Contact from "views/Elements/Contact";
import Register from "views/Authentication/Register";
import Jobdetails from "views/JobDetails/JobDetails";
import AddJob from "views/Job/AddJob";
// import PersonalDetails from "views/Apply/PersonalDetails";
import ProfessionalInfo from "views/Apply/ProfessionalInfo";
import Confirmation from "views/Apply/Confirmation";
import Submission from "views/Apply/Submission";
import JobApplicationForm from "views/Apply/JobApplicationForm";
import Blog from "blog/blog";
import BlogDetails from "blog/blogDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/about" exact element={<Landing />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/blog-details/:blogId" exact element={<BlogDetails />} />
      <Route path="/job" exact element={<Job />} />
      <Route path="/add-job" exact element={<AddJob />} />
      <Route path="/professional" component={<ProfessionalInfo />} />
      <Route path="/confirmation" component={<Confirmation />} />
      <Route path="/submission" component={<Submission />} />
      <Route path="/jobs" exact element={<Jobs />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/apply/:jobId" exact element={<JobApplicationForm />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      {/* <Route path="/jobdetails" exact element={<Jobdetails />} /> */}
      <Route path="/jobdetails/:jobId" exact element={<Jobdetails />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
