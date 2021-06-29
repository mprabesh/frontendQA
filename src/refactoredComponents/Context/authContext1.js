import React, { useContext, useState } from "react";

const AuthStatus = React.createContext();
const AuthStatusUpdate = React.createContext();

export function useAuthStatus() {
  return useContext(AuthStatus);
}
export function useChangeStatus() {
  return useContext(AuthStatusUpdate);
}

function AuthContext({ children }) {
  const [authStatus, setAuthStatus] = useState(true);
  function changeStatus() {
    setAuthStatus((aStatus) => !aStatus);
    // console.log(authStatus);
  }
  return (
    <AuthStatus.Provider value={authStatus}>
      <AuthStatusUpdate.Provider value={changeStatus}>
        {children}
      </AuthStatusUpdate.Provider>
    </AuthStatus.Provider>
  );
}

export default AuthContext;
