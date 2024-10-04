import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <section className='grid place-items-center py-12'>
      <SignIn />
    </section>
  );
};

export default SignInPage;
