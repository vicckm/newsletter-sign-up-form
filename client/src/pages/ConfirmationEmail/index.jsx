import React from 'react';
import './style.scss';
import IconList from '../../components/IconList';
import Button from '../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ConfirmationEmail() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section
      className="confirmation-email"
      // aria-live="polite"
      // aria-atomic="true"
    >
      <div className="confirmation-email__info">
        <IconList />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{' '}
          <strong>{location.state.email}</strong>. Please open it and click the
          button inside to confirm your subscription.
        </p>
      </div>
      <Button text="Dismiss message" onClick={() => navigate('/')} />
    </section>
  );
}
