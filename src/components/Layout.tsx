import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Add meta viewport for mobile responsiveness */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Spiderwebs Agency</title>
      </head>

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
