import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ padding: '1rem', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      &copy; 2025 My App
    </footer>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '1rem' }}>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout; 