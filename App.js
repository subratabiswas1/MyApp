import React from "react";
import { AuthProvider } from "./components/context/AuthContext";
import AppNav from "./components/navigation/AppNav";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
