import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
      const { register, formState: { errors }, handleSubmit } = useForm();
    if(user){
        console.log(user);
    }
     const onSubmit = data => console.log(data);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 mx-auto bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-xl text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Your Email" 
                    class="input input-bordered w-full max-w-xs" 
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

                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" 
                    class="input input-bordered w-full max-w-xs" 
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

                    <label class="label">
                        {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                </div>

                    
                    
                    
                    <input className='btn w-full max-w-xs btn-outline btn-info' type="submit" />
                    </form>
                 <div class="divider">OR</div>
                 <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-info">Continue with Google</button>
            </div>
            </div>
        </div>
    );
};

export default Login;