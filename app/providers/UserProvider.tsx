import { UserContextProvider } from "../hooks/useUser";

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => (
  <UserContextProvider>{children}</UserContextProvider>
);
