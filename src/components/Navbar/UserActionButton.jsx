"use client"; // Ensure this is a client-side component
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UserActionButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to check if user is logged in
    const router = useRouter();

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
    }, []);

    const handleLogout = () => {
        // Remove token from localStorage
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        router.push("/login"); // Redirect to login page after logout
    };

    return (
        <div className="flex justify-between gap-2">
            <Link href="/voucher">Voucher</Link>
            <Link href="/history">History</Link>
            {isLoggedIn && ( // Conditional rendering of the Logout button
                <button onClick={handleLogout} className="text-red-500">
                    Logout
                </button>
            )}
        </div>
    );
};

export default UserActionButton;
