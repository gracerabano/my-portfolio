import React from 'react'
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";


export default function navBar() {
  return (
    <nav className="flex flex-col ml-auto items-center justify-center px-6 py-2 w-auto h-20 bg-[#ffffff50] rounded-lg ">
      <ul className="font-medium flex flex-row items-center justify-center p-2 space-x-8 ">
        <li>
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-light-sky hover:text-white"> 
            <span className="mr-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1000 1000" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
              </svg>                    
            </span>
            Home 
          </a>
        </li>
        <li> 
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-light-sky hover:text-white"> 
            <span className="mr-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
              </svg>  
            </span>                
            Resume 
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-light-sky hover:text-white">
            <span className="mr-2">
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor"></path><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor"></path><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor"></path><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor"></path></svg>
            </span>
            Projects 
          </a>
        </li>
        <li>
          <a href="#" className="py-2 px-4 items-center justify-center flex flex-row text-center bg-slate-50 rounded-md text-gray-600 ease-in duration-200 hover:shadow-sm hover:bg-gradient-to-tr from-blossom to-light-sky hover:text-white"> 
            <span className="mr-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path></g></svg>
            </span>
            Contact 
          </a>
        </li>
      </ul>
    </nav>
  )
}