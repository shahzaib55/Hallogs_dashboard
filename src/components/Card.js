import React from 'react'
import {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
  } from '@heroicons/react/outline'
import { Icon } from '@material-ui/core';

export default function Card(){
    return(
        <>
<div class="flex  mt-10   lg:ml-64 md:ml-0 md:mr-5 mr-5 h-20">
   
<div class="flex bg-white ml-5 flex-1 sm-12 rounded-lg shadow-xl  border p-4 w-3xl justify-between">
     <div class="">
        <h1 class="font-sans  font-bold text-gray-700 text-opacity-75">Today's Money</h1>
        <h2 class="font-sans font-bold text-gray-700 text-xl" >$53000</h2>
     </div>
     <div className="h-15 w-12 rounded-lg  flex-shrink-0 bg-indigo-700 ml-4 ">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
     </div>
   </div>

   <div class="flex bg-white ml-5 flex-1 sm-12 rounded-lg shadow-xl  border p-4 w-3xl justify-between">
     <div class="">
        <h1 class="font-sans  font-bold text-gray-700 text-opacity-75">Today's Users</h1>
        <h2 class="font-sans font-bold text-gray-700 text-xl" >$53000</h2>
     </div>
     <div className="h-15 w-12 rounded-lg  flex-shrink-0 bg-indigo-700 ml-4 ">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
     </div>
   </div>

   <div class="flex bg-white ml-5 flex-1 sm-12 rounded-lg shadow-xl border p-4 w-3xl justify-between">
     <div class="">
        <h1 class="font-sans font-bold text-gray-700 text-opacity-75">Today's Clients</h1>
        <h2 class="font-sans font-bold text-gray-700 text-xl" >$53000</h2>
     </div>
     <div className="h-15 w-12 rounded-lg  flex-shrink-0 bg-indigo-700 ml-4 ">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
     </div>
   </div>

   <div class="flex bg-white ml-5 sm-12 flex-1 rounded-lg shadow-xl border p-4 w-3xl justify-between">
     <div class="">
         <h1 class="font-sans  font-bold text-gray-700 text-opacity-75">Today's Bookings</h1>
         <h2 class="font-sans font-bold text-gray-700 text-xl" >$53000</h2>
     </div>
     <div className="h-15 w-12 rounded-lg flex-shrink-0  bg-indigo-700 ml-2">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
     </div>
   </div>
   
 </div>
 
        </>

    );
}