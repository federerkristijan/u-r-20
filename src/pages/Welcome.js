import React from "react";
import { Routes, Route } from "react-router-dom";

import NewUser from "./NewUser";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
        <Route path="/new-user" element={<NewUser />} />
      </Routes>
    </section>
  );
};

export default Welcome;
