import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let signinError;

  if (user || gUser) {
    console.log(gUser);
    navigate(from, { replace: true });
  }
  if (loading || gLoading) {
    return <button className="btn loading">loading</button>
  }
  if (error || gError) {
    signinError = <p className='text-red-500 text-sm'>{error?.message || gError?.message}</p>
  }
  const onSubmit = data => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
    navigate(from, { replace: true });
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl text-center font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is Required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid Email'
                  }
                })} />

              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is Required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 charecter or longer'
                  }
                })} />

              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

              </label>
            </div>


            {signinError}
            <input className='btn w-full max-w-xs my-4 btn-outline btn-info' type="submit" value='Log In' />
          </form>
          <p><small>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></small></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-info">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;