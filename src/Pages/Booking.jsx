/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const Booking = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const bookingData = { bookTitle, quantity, date };

        try {
            const response = await axios.post('http://localhost:8080/api/booking/add', bookingData);
            console.log('Booking created:', response.data);
            toast.success('Booking successful!');
            setBookTitle('');
            setQuantity(1);
            setDate('');
        } catch (error) {
            console.error('Error creating booking:', error);
            toast.error('Error creating booking');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 py-12">
            <ToastContainer />
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6">Booking</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="bookTitle" className="block text-gray-700 font-bold mb-2">
                            Book Title
                        </label>
                        <input
                            type="text"
                            id="bookTitle"
                            name="bookTitle"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the book title"
                            value={bookTitle}
                            onChange={(e) => setBookTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                            Booking Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Booking...' : 'Book Now'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Booking;
