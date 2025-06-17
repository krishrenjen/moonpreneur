export default function Header(){
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Dashboard Header</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/dashboard" className="hover:underline">Home</a></li>
          <li><a href="/settings" className="hover:underline">Settings</a></li>
          <li><a href="/profile" className="hover:underline">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}