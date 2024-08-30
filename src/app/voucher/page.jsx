"use client"; // Ensure this component is a client-side component
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import VoucherList from "@/components/VoucherList";
// import Header from "@/components/AnimeList/Header";
import Sidebar from "@/components/Voucher/Sidebar"; 
import { getVouchers } from "@/libs/api-libs";
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const [vouchers, setVouchers] = useState([]); // State to hold voucher data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); // Redirect to login if no token
      return; // Exit if not authenticated
    }

    const fetchVouchers = async () => {
      try {
        const data = await getVouchers(category);
        setVouchers(data || []); // Set fetched data to state or an empty array if undefined
      } catch (error) {
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchVouchers();
  }, [category, router]);

  if (loading) return <p>Loading...</p>; // Display loading message
  if (error) return <p>Error: {error}</p>; // Display error message

  return (
    <>
      <section className="flex"> 
        <Sidebar /> 
        <div className="flex-grow">
          {/* <Header title="Voucher Tersedia" linkTitle="Lihat Semua" linkHref="/populer" /> */}
          <VoucherList vouchers={vouchers} />
        </div>
      </section>
    </>
  );
};

export default Page;
