import { ThreeDMarqueeDemo } from "@/components/demo/ThreeDMarqueeDemo";
import { TimelineDemo } from "@/components/demo/TimelineDemo";
import Head from "@/components/ui/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head />
      <ThreeDMarqueeDemo />
      <TimelineDemo />
    </>
  );
};

export default page;
