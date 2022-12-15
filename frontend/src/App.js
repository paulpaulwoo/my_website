import logo from './logo.svg';
import './App.css';
import Index from './pages/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Index />} />
          {/*
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
