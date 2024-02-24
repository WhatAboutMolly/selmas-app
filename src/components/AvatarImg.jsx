import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarImg({ ...props }) {
  const { image } = props;
  return (
    <div>
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
