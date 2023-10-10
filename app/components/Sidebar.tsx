"use client";

import React from 'react'

interface SideBarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<SideBarProps> = ({
  children
}) => {
  return (
    <div>{children}</div>
  )
}

export default Sidebar;
