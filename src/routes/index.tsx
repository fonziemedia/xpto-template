import { createFileRoute } from "@tanstack/react-router";
import ContactUs from "@/components/ContactUs";
import HowWeWork from "@/components/HowWeWork";
import Intro from "@/components/Intro";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";

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
