import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Web app devolopment", "Mobile App Development"],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
      />
    </>
  );
};
