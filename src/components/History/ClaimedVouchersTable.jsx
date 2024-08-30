"use client";
import React from 'react';
import Swal from 'sweetalert2';

const ClaimedVouchersTable = ({ vouchers }) => {
  const handleDelete = async (voucherId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this voucher?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch('http://localhost:4000/unclaimvoucher', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: voucherId }),
        });

        if (response.ok) {
          Swal.fire(
            'Deleted!',
            'The voucher has been deleted.',
            'success'
          );
          window.location.reload();
        } else {
          throw new Error('Failed to delete voucher');
        }
      } catch (error) {
        Swal.fire(
          'Error!',
          'There was an error deleting the voucher.',
          'error'
        );
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Foto</th>
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher.id}>
              <td className="py-2 px-4 border-b">
                <img src={voucher.foto} alt={voucher.nama} className="w-16 h-16 object-cover" />
              </td>
              <td className="py-2 px-4 border-b">{voucher.nama}</td>
              <td className="py-2 px-4 border-b">
                <button
                    onClick={() => handleDelete(voucher.id)}
                    className="text-red-500 hover:text-red-700 bg-transparent hover:bg-red-100 px-4 py-2 rounded"
                >
                    Hapus
                </button>
               </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimedVouchersTable;
