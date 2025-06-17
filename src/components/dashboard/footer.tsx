export default function Footer(){
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <p className="text-sm">© 2025 Moonpreneur. All rights reserved.</p>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
}