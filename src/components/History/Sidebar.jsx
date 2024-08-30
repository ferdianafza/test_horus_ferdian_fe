import Link from "next/link"; // Import Link from next/link

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      {/* Add any additional links or content here */}
      <ul>
        <li><Link href="/history">Semua</Link></li>
        <li><Link href="/history?category=potongan">Potongan</Link></li>
        <li><Link href="/history?category=diskon">Diskon</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
