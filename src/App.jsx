import { useState } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import ProfilesComptables from "./features/comptable/ProfilesComptables";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <ProfilesComptables />
    </ThemeProvider>
  );
}

export default App;
