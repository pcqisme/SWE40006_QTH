"use client"

import React from 'react';
import {signOut} from "next-auth/react";
import SecondaryBtn from "~/app/_components/Button/SecondaryBtn";

const ProfileDropCard = () => {
  return (
    <div className="absolute border right-0 mt-2 p-2 w-48 bg-white rounded-md shadow-md">
      <SecondaryBtn className="mr-2 w-full text-left" onclick={() => signOut()}>
        Sign Out
      </SecondaryBtn>
    </div>
  );
};

export default ProfileDropCard;