import React, { createContext, useContext } from "react";

interface Order {
  item: string;
  date: string;
  delivered?: boolean;
}

interface UserProfile {
  name: string;
  phone: string;
  email: string;
  activeAccount: string;
  blockedAccount: string;
  orders: Order[];
}

const UserProfileContext = createContext<UserProfile | null>(null);

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const userProfile: UserProfile = {
    name: "Sahil Bagade",
    phone: "+314-987-4567",
    email: "sahil@gmail.com",
    activeAccount: "23x-456X-7896",
    blockedAccount: "556-456X-7896",
    orders: [
      { item: "Linen-spa 8 Inch Memory Foam and Spring", date: "Delivered 8/22/2018" },
      { item: "Adidas Falcons Shoes", date: "Delivered 6/11/2018" },
    ],
  };

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};
