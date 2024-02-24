import React from "react";

import { useSelector } from "react-redux";
import { selectAllComptable } from "./comptableSlice";
import ComptableCarte from "@/components/ComptableCarte";

function ProfilesComptables() {
  const comptables = useSelector(selectAllComptable);
  console.log(comptables);

  return (
    <div>
      {comptables.map((c) => (
        <ComptableCarte {...c} />
      ))}
    </div>
  );
}

export default ProfilesComptables;
