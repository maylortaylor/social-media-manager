/** @format */

import { BrowserRouter as Router } from "react-router-dom";
import { Sidebar } from "@/components/layout/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          {/* Main content will go here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
