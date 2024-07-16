import React from "react";
import { createClient } from "@/prismicio";

import NavBar from "@/components/NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-0 z-50 mx-auto max-w-screen-2xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
