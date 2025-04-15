import React, { createContext, useContext, useState } from "react";
const jwtDecode = require("jwt-decode").default;

interface AuthUser {
  userId: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: AuthUser | null;
  isLoggedIn: boolean;
  logout: () => void;
  setUserFromToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const setUserFromToken = (token: string) => {
    try {
      const decoded = jwtDecode(token) as AuthUser & {
        exp: number;
        sub?: string;
      };

      if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        setUser(null);
      } else {
        const normalizedUser: AuthUser = {
          userId: decoded.userId || decoded.sub || "", // Use `sub` as fallback
          email: decoded.email,
          name: decoded.name,
          role: (decoded.role?.toLowerCase() as "admin" | "user") || "user", // Default to "user"
        };
        setUser(normalizedUser);
      }
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, logout, setUserFromToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
