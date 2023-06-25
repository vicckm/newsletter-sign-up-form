import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './style.scss';
import ListItem from '../../components/ListItem';
import List from '../../components/List';
import IllustrationIcon from '../../components/IllustrationIcon';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Newsletter() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  const breakpoint = 468;
  const isMobile = width < breakpoint ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const onSubmit = (data) => {
    navigate('confirmation-email', { state: { email: data.email } });
  };

  return (
    <main className="newsletter">
      <section className="newsletter-left">
        <h1>Stay updated!</h1>
        <h2>Join 60,000+ product managers receiving monthly updates on:</h2>

        <List>
          <ListItem text="Product discovery and building what matters" />
          <ListItem text="Measuring to ensure updates are a success" />
          <ListItem text="And much more!" />
        </List>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            name="email"
            labelText="Email address"
            placeholder="email@company.com"
            register={register}
            clearErrors={clearErrors}
            errors={errors}
          />

          <Button
            type="submit"
            text="Subscribe to montly newsletter"
            onClick={null}
          />
        </form>
      </section>
      <section className="newsletter-right">
        <IllustrationIcon isMobile={isMobile} />
      </section>
    </main>
  );
}
