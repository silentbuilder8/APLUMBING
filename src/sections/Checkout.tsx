import React from 'react';
import Container from '../components/Container';
import CheckoutForm from '../components/CheckoutForm';

const Checkout: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl mx-auto">
          <CheckoutForm />
        </div>
      </Container>
    </section>
  );
};

export default Checkout;