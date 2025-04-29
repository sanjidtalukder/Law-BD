import React from 'react';
 import {
    createBrowserRouter,
   
  } from "react-router";
import MainLayout from '../pages/MainLayout';
import Error from '../components/Error';
import Home from '../components/Home';
import Blogs from '../components/Blogs';
import MyBookings from '../components/MyBookings';
import Contact from '../components/Contact';
import Lawyers from '../components/Lawyers';
import LawyerDetails from '../components/LawyerDetails';
import Bookings from '../components/MyBookings';

 export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
          {
            index:true,
            path:"/",
            Component:Home,

          },
          {
            path:"/blogs",
            Component:Blogs
          },
          {
            path:"/myBookings",
            Component:MyBookings
          },
          {
            path:"/contact",
            Component:Contact
          },
          {
            path: "/lawyers",
            Component: Lawyers
          },
          {
            path: "/lawyer/:id",
            Component:LawyerDetails,
            
          },
          {
            path: "/bookings",
            element: <Bookings />,
          }
          
        ]
      }
      
    
  ]);