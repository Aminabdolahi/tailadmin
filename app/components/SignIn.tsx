'use client';
import { useFormik } from 'formik';
import Image from 'next/image';
import * as Yup from 'yup';

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  remember: Yup.boolean(),
  terms: Yup.boolean().oneOf([true], 'Required'),
  newsletter: Yup.boolean(),
});

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className=''>
      <div className='mt-[55px] h-[30px] w-[1125px] flex justify-between items-center '>
        <span className='text-[26px] font-bold  '>Sign In</span>
      </div>

      <div className='flex justify-center items-center w-[1125px] h-[660px]  mt-[25px] shadow-md  '>
        <div
          className='flex flex-col justify-center items-center 
        border-r-2 h-full w-1/2 gap-10' 
         
        >
          <Image
            height={100}
            width={153}
            src={'/images/Logo black.svg'}
            alt='logo'
          />
          <div className='w-[318px] text-[16px] text-center'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              suspendisse.
            </span>
          </div>
          <Image
            height={350}
            width={350}
            src='/images/undraw_access_account_re_8spm 1.svg'
            alt='image'
          />
        </div>
        <div>
          <div className='px-[70px] '>
            <span className='flex text-[16px] '>Start for free</span>
            <span className='font-bold text-[33px] mt-[6px] '>
              Sign In to TailAdmin
            </span>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className='px-[70px] mt-[35px] flex flex-col '>
            <div>
              <label htmlFor='email'>Email </label>
              <input
                id='email'
                name='email'
                type='email'
                onChange={formik.handleChange}
                value={formik.values.email}
                className='border-2 focus:border-primary rounded-md flex w-[428px] h-[56px] px-[25px] mt-[10px] focus:outline '
                placeholder='Enter your email'
              />
              {formik.touched.email && formik.errors.email ? (
                <div className='text-error'>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className='mt-[35px]'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                name='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                autoComplete='off'
                placeholder='6+ Characters, 1 Capital letter'
                className='border-2 focus:border-primary rounded-md flex w-[428px] h-[56px] px-[25px] mt-[10px] focus:outline '
              />
              {formik.touched.password && formik.errors.password ? (
                <div className='text-error'>{formik.errors.password}</div>
              ) : null}
              <div className='flex-col '>
                <button
                  type='submit'
                  className='flex justify-center items-center bg-primary rounded-md w-[428px] h-[56px] mt-[35px] text-white'>
                  Sign In
                </button>
                <button className='bg-[#EFF4FB] rounded-md w-[428px] h-[56px] mt-[35px] text-[#64748B] flex items-center justify-center gap-[14px]'>
                  <img src='/images/google (1) 1.svg' alt='google' />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
