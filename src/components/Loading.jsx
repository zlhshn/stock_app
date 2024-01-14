import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  const arr = [1,2,3,4,5,6,7,8];

  return (
    <>
      {arr.map((item) => (
        <div className="flex flex-col gap-4 w-80 ">
          <div className="skeleton h-[200px] w-full"></div>
          <div className="skeleton h-4 w-20 mt-4"></div>
          <div className="skeleton h-4 w-28 mt-5"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </>
  );
}
