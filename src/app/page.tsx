// pages/login.tsx
import React from 'react';
import Button from './components/Common/Button';
import Input from './components/Common/Input';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-container">
        <h2 className="auth-heading">Login</h2>
        <form className="auth-form">
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="you@example.com"
            required
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="••••••••"
            required
          />
          <Button type="submit">
            Sign In
          </Button>
        </form>
        <div className="auth-footer">
          Don't have an account?{' '}
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
