import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import MobileHome from './pages/MobileHome';
import MobileDish from './pages/MobileDish';
import MobileProfile from './pages/MobileProfile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mobile/home" element={<MobileHome />} />
        <Route path="/mobile/dish" element={<MobileDish />} />
        <Route path="/mobile/profile" element={<MobileProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
