import Head from "next/head";
import Link from "next/link";
import Brand from "../components/ui/Brand";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - IO Academy</title>
      </Head>
      <main className='bg-gray-50 dark:bg-gray-900 w-full h-screen flex flex-col items-center justify-center px-4'>
        <div className='max-w-sm w-full text-gray-600 dark:text-gray-300'>
          <div className='text-center'>
            <Brand className='mx-auto w-48 text-gray-800 dark:text-white' />
            <div className='mt-5 space-y-2'>
              <h3 className='text-gray-800 dark:text-white text-2xl font-bold sm:text-3xl'>
                Log in to your account
              </h3>
              <p className=''>
                Don't have an account?{" "}
                <Link
                  href='/#pricing'
                  className='font-medium text-blue-600 dark:text-sky-500 hover:text-blue-400 dark:hover:text-sky-600 duration-150'>
                  Get access
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='mt-8 space-y-5'>
            <div>
              <label className='font-medium'>Email</label>
              <Input
                type='email'
                required
                className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Password</label>
              <Input
                type='password'
                required
                className='w-full mt-2 bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:text-gray-300 focus:border-gray-800'
              />
            </div>
            <Button className='w-full text-white bg-gray-800 dark:bg-sky-500 hover:bg-gray-700 dark:hover:bg-sky-600 ring-offset-2 ring-gray-800 dark:ring-sky-500 focus:ring shadow rounded-lg'>
              Sign in
            </Button>
            <div className='text-center'>
              <Link
                href='javascript:void(0)'
                className='hover:text-blue-600 dark:hover:text-sky-500 duration-150'>
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
