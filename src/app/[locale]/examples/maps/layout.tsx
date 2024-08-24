"use client";

import { APIProvider } from "@vis.gl/react-google-maps";
import type { ReactNode } from "react";

import { Env } from "@/config/Env";

export default function ExampleMapsLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!Env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    return (
      <div>
        <h1>Error</h1>
        <p>You need to set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY variable.</p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={Env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      {children}
    </APIProvider>
  );
}
