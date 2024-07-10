/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/api/booking/all');
            console.log('All Bookings:', response.data);
            setBookings(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            setLoading(false);
        }
    };

    const handleCancelBooking = async (bookingId) => {
        try {
            setLoading(true);
            await axios.delete(`http://localhost:8080/api/booking/cancel/${bookingId}`);
            setLoading(false);
            fetchBookings(); // Refresh bookings after cancellation
        } catch (error) {
            console.error('Error cancelling booking:', error);
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Booking List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded">
                        <thead className="bg-blue-400 text-white">
                            <tr>
                                <th className="w-1/4 text-left py-2 px-4">Booking ID</th>
                                <th className="w-1/4 text-left py-2 px-4">Book Title</th>
                                <th className="w-1/4 text-left py-2 px-4">Quantity</th>
                                <th className="w-1/4 text-left py-2 px-4">Booking Date</th>
                                <th className="w-1/4 text-left py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td className="border py-2 px-4">{booking.id}</td>
                                    <td className="border py-2 px-4">{booking.bookTitle}</td>
                                    <td className="border py-2 px-4">{booking.quantity}</td>
                                    <td className="border py-2 px-4">{new Date(booking.date).toLocaleDateString()}</td>
                                    <td className="border py-2 px-4">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleCancelBooking(booking.id)}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BookingList;
