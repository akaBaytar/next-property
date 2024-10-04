import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <section className='grid place-items-center py-12'>
      <SignUp />
    </section>
  );
};

export default SignUpPage;
