
import { MacbookScrollDemo } from "@/components/demo/MacbookScrollDemo";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React from "react";

const page = () => {
  return (
    <>
      <MacbookScrollDemo />
      <div className="h-[40rem] flex items-center opacity-10 justify-center">
      <TextHoverEffect text="BOLD" />
    </div>
    </>
  );
};

export default page;
