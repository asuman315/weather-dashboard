import React, { ReactNode } from "react";
import { iconSVGs } from "@/assets/iconSVGs";

const {homeIcon, notesIcon, buildingIcon, inventoryIcon, peopleIcon, availabilityIcon, devicesIcon, activityIcon} = iconSVGs;


interface navListType {
    label: string;
    icon: JSX.Element | ReactNode;
    path?: string;
  }
  
  export const navList: navListType[] = [
    {
      label: 'home',
      icon: homeIcon,
      path: '/',
    },
    {
      label: 'about',
      icon: buildingIcon,
    },
    {
      label: 'add event',
      icon: activityIcon,
    },
    {
      label: 'community',
      icon: inventoryIcon,
    },
    {
      label: 'contact',
      icon: peopleIcon,
    }, 
    {
      label: 'login',
      icon: notesIcon,
      path: '/auth/login',
    },
    {
      label: 'register',
      icon: peopleIcon,
      path: '/auth/register',
    },
    {
      label: 'logout',
      icon: notesIcon,
      path: '/',
    },
  ];