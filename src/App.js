import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/analytics";
import Dashboard from "./pages/dashboard";
import Message from "./pages/message";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/task" element={<Tasks />} />
        <Route path="/message" element={<Message />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
