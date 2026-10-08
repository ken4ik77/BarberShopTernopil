
import css from './page.module.css';
import LoginForm from '@/components/LoginForm/LoginForm';

const Page = () => {
  return (
    <div className={css['page']}>
      <LoginForm />
    </div>
  );
};

export default Page;