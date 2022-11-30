import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics, Dashboard, Message, Projects, Tasks } from "./pages";

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
