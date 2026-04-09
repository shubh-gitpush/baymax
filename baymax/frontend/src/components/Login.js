import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../auth"

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await loginUser(credentials.username, credentials.password);
      navigate('/user-profile');
    } catch (err) {
      console.error('Login failed:', err);
      setError('Invalid username or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gray-100 py-12 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Login</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Enter your username and password to access your account.</p>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
              placeholder="your-username"
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-50"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-50"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don&apos;t have an account?{" "}
          <Link to="/patient-register" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
