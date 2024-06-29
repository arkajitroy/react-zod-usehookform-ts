import React from "react";
import { UsersProviders } from "./components";

const App: React.FC = () => {
  return (
    <div className="w-full px-4">
      <h3 className="text-blue-900 font-semibold my-8">React Form use-hook-form + zod</h3>
      <UsersProviders />
    </div>
  );
};

export default App;
