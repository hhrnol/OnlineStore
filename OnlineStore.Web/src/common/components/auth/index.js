import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignInForm from './components/sign-in-form';
import SignUpForm from './components/sign-up-form';

const LogInModal = ({ show, onHide, onSubmit }) => {
  const [isRegisteredUser, setIsRegisteredUser] = useState(true);

  const handleUserRegistration = () => setIsRegisteredUser(false);

  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Body>
        {isRegisteredUser ? (
          <SignInForm onUserRegistration={handleUserRegistration} onSubmit={onSubmit} />
        ) : (
          <SignUpForm onSubmit={onSubmit} />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LogInModal;
