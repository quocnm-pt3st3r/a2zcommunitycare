import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Referral from './pages/Referral';
import News from './pages/News';
import Careers from './pages/Jobs';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book-appointment" element={<BookAppointment />} />
        <Route path="referral" element={<Referral />} />
        <Route path="news" element={<News />} />
        <Route path="jobs" element={<Careers />} />
      </Route>
    </Routes>
  );
}
