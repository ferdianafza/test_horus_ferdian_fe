"use client"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/History/Sidebar";
import ClaimedVouchersTable from "@/components/History/ClaimedVouchersTable";
import { getVouchersClaimeds } from "@/libs/api-libs";
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const [vouchersClaimeds, setVouchersClaimeds] = useState([]); 
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login'); 
    } else {
      const fetchClaimedVouchers = async () => {
        try {
          const vouchers = await getVouchersClaimeds(category);
          setVouchersClaimeds(vouchers || []); 
        } catch (error) {
          console.error("Failed to fetch vouchers:", error);
          setVouchersClaimeds([]); 
        }
      };

      fetchClaimedVouchers();
    }
  }, [router, category]);

  return (
    <>
      <section className="flex"> 
        <div className="flex-grow">
          <ClaimedVouchersTable vouchers={vouchersClaimeds} />
        </div>
        <Sidebar /> 
      </section>
    </>
  );
};

export default Page;
