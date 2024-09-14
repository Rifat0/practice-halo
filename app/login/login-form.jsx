"use client";

import { login, test } from '@/lib/getData';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { credentialLogin } from '../actions';

export function LoginForm() {
  const schema = z.object({
    email: z.string().min(1, "Email is required").email("Must be a valid email"),
    password: z.string().min(1, "Password is required"),
  });

  const {
    register,
    handleSubmit,
    setError,    
    formState: { errors, isSubmitting },
  } = useForm ({
    defaultValues: {
      email: "test@email.com",
      password: "123456"
    },
    resolver: zodResolver(schema)    
  });

  const router = useRouter();

  async function onSubmit(data) {

    try {
      const response = await credentialLogin(data);

      if (!!response.error) {
        setError("email", {
          message: "Authentication failed",
        });
      } else {
        router.push("/dashboard");
      }
    } catch (e) {
      console.error(e);
      setError("email", {
        message: "Authentication failed",
      });
    }
  }

  const checkApi = async () => {
    let response = await login();
    console.log(response);
  }

  const checkApi2 = async () => {
    let response = await test();
    console.log(response);
  }

  return (
    <>
      <button onClick={checkApi}>Check API</button>
      <button onClick={checkApi2}>Check 2</button>
    <form className="theme-form row" onSubmit={handleSubmit(onSubmit)}>
      <h4>Sign in to your account</h4>
      <p>Enter your email & password to login</p>
      <div className="form-group">
        <label htmlFor="email" className="col-form-label">
          Email
        </label>
        <input
          className="form-control"
          {...register('email')}
          type="text"
        />
        {errors.email && <div className="font-danger"><strong>{errors.email.message}</strong></div>}
      </div>
      <div className="form-group">
        <label className="col-form-label" htmlFor="password">
          Password
        </label>
        <div className="form-input position-relative">
          <input
            className="form-control"
            id="password"
            {...register('password')}
            type="password"
          />
          {errors.password && <div className="font-danger">{errors.password.message}</div>}
        </div>
      </div>
      <div className="form-group mb-0">
        <div className="checkbox p-0">
          <input id="checkbox1" type="checkbox" />
          <label className="text-muted" htmlFor="checkbox1">
            Remember password
          </label>
        </div>
        <a className="link" href="#">
          Forgot password?
        </a>
        <div className="text-end mt-3">
          <button className="btn btn-primary btn-block w-100" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Sign in"}
          </button>
        </div>
      </div>
    </form>

    </>
  );
}
