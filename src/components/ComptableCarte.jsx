import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AvatarImg from "./AvatarImg";

function ComptableCarte({ ...props }) {
  const {
    numeroComptable,
    nomComplet,
    age,
    nombreClients,
    nombreAnneesExperience,
    image,
  } = props;
  return (
    <div>
      <Card>
        <CardHeader>
          <AvatarImg image={image} />
          <CardTitle>{nomComplet}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ComptableCarte;
