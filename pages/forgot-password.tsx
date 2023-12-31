import Layout from '../layouts/Main';
import Link from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form";
import { server } from '../utils/server';
import { postData } from '../utils/services';

type ForgotMail = {
  email: string;
  password:string;
}

const ForgotPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ForgotMail>();

  const onSubmit:SubmitHandler<ForgotMail> = async (data: ForgotMail) => {
    const res = await postData(`${server}/api/login`, {
      email: data.email,
    });

    console.log(res);
  };


  return (
    <Layout>
      <section className="form-page">
        <div className="container">
          <div className="back-button-section">
            <Link href="/products">
              <a><i className="icon-left"></i> Back to shop</a>
            </Link>
          </div>

          <div className="form-content">
            <div className="form-block">
              <h2 className="form-block__title">Forgot your password?</h2>
              <p className="form-block__description">Enter your email or phone number and recover your account</p>

              <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form__input-row">
                  <input
                    className="form__input"
                    placeholder="email"
                    type="text"
                    // name="email"
                    {...register("email", {
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />

                  {errors?.email && errors.email.type === 'required' &&
                    <p className="message message--error">This field is required</p>
                  }

                  {errors?.email && errors.email.type === 'pattern' &&
                    <p className="message message--error">Please write a valid email</p>
                  }
                </div>

                <div className="form__input-row">
                  <input
                    className="form__input"
                    type="password"
                    placeholder="Password"
                    // name="password"
                    {...register("password", { required: true })}
                  />
                  {errors?.password && errors.password.type === 'required' &&
                    <p className="message message--error">This field is required</p>
                  }
                </div>

                <button type="submit" className="btn btn--rounded btn--yellow btn-submit">Reset password</button>
              </form>
            </div>
            <img src="https://i.pinimg.com/474x/e0/63/1e/e0631e8b2e86e59ba84b7bb9b1e6c674.jpg" alt="login img" className='img-form' />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ForgotPassword