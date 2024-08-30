import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 p-4">
      <h2 className="text-xl font-bold mb-4 text-white">Kategori</h2> 
      <ul>
        <li className="text-white"><Link href="/voucher" className="text-white hover:underline">Semua</Link></li>
        <li><Link href="/voucher?category=potongan" className="text-white hover:underline">Potongan</Link></li>
        <li><Link href="/voucher?category=diskon" className="text-white hover:underline">Diskon</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
