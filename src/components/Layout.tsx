import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Add meta viewport for mobile responsiveness */}

      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Optional Footer can be added here */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
