'use client';

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <section>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold mt-10'>An error occurred.</h1>
            <p className='text-gray-500 text-xs text-pretty my-10'>
              {error.toString()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
