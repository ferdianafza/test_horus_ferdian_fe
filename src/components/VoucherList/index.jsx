"use client"; 

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { useEffect } from "react"; 
import Swal from 'sweetalert2';

const VoucherList = ({ vouchers = [] }) => { 
  const router = useRouter();

  const handleClaimClick = async (voucherId) => {
    try {
      const result = await Swal.fire({
        title: 'Apakah Yakin?',
        text: 'Apakah Ingin Ambil Voucher ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Ambil!',
        cancelButtonText: 'Tidak, Terimakasih!',
      });

      if (result.isConfirmed) {
        const response = await fetch(`http://localhost:4000/vouchers/${voucherId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: voucherId }),
        });

        if (response.ok) {
          Swal.fire('Claimed!', 'Voucher claimed successfully!', 'success');
          router.push('/history');
        } else {
          console.error('Failed to claim voucher');
          Swal.fire('Failed!', 'Failed to claim voucher.', 'error');
        }
      }
    } catch (error) {
      console.error('Error claiming voucher:', error);
      Swal.fire('Error!', 'Error claiming voucher.', 'error');
    }
  };

  // Debugging: Verify vouchers data is loaded correctly
  useEffect(() => {
    console.log('Loaded vouchers:', vouchers);
  }, [vouchers]);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {vouchers && vouchers.length > 0 ? (
        vouchers.map((voucher) => (
          <div key={voucher.id} className="cursor-pointer">
            <Image
              src="http://localhost:4000/assets/foto.jpg"
              alt={voucher.nama}
              width={350}
              height={350}
              className="w-full max-h-64 object-cover"
            />
            <h3 className="text-yellow-500 font-bold md:text-xl text-md p-4">{voucher.nama}</h3>
            <p className="text-yellow-500 text-sm p-4">Jenis Voucher: {voucher.kategori}</p>
              {voucher.status === 'unclaim' ? (
                <button 
                  onClick={() => handleClaimClick(voucher.id)} 
                  className="text-yellow-500 bg-blue-500 px-4 py-2 rounded hover:text-yellow-500"
                >
                  Claim
                </button>
              ) : (
                <p className="text-green-500">{voucher.status}</p>
              )}
          </div>
        ))
      ) : (
        <p className="p-4">No vouchers available.</p>
      )}
    </div>
  );
};

export default VoucherList;
