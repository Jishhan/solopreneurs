"use client";

import React, { useState } from 'react';
import Link from 'next/link';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Use formData here
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('User created successfully:', data);
    } catch (error: any) {
      console.error('Error creating user:', error.response?.data || error.message);
    }
  };

  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-medium">Sign up</h1>
        <p className="text-sm text text-foreground">
          Already have an account?{" "}
          <Link className="text-primary font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <button className="btn-primary" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
