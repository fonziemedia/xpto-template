import { createFileRoute } from "@tanstack/react-router";
import {
  ContactUs,
  HowWeWork,
  Intro,
  Testimonials,
  WhatWeDo
} from "@/components";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="page-wrap px-4 pb-12 pt-10">
      <Intro />
      <WhatWeDo />
      <HowWeWork />
      <Testimonials />
      <ContactUs />
    </main>
  );
}
