import React, { useState } from 'react';
import { X } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('user', JSON.stringify(data));
                alert('Login Successful!');
                setEmail('');
                setPassword('');
                onClose();
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred during login');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transform transition-all scale-100 text-left">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                >
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-blue-900 mb-6">Login</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
