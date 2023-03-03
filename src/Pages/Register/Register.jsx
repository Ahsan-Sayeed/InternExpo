import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import StrongPassword from "./StrongPassword/StrongPassword";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../Feature/AuthSlice/AuthSlice";

const Icon = {
  eyeOpen: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1.5em"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path>
    </svg>
  ),
  eyeClose: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 1024 1024"
      height="1.5em"
      width="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path>
      <path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path>
    </svg>
  ),
  ThemeIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="100px"
      height="100px"
      stroke="currentColor"
      strokeWidth="0"
      className="fill-secondary my-2"
    >
      <path d="M 25 3 C 22.089763 3 19.426171 4.6219485 18.101562 7.2109375 C 18.101562 7.2109375 18.101562 7.2128906 18.101562 7.2128906 C 18.100721 7.2145406 18.098456 7.2151469 18.097656 7.2167969 C 14.362181 14.470691 11.153754 20.806968 8.8125 25.537109 C 7.6414743 27.902985 6.687023 29.865615 5.9882812 31.351562 C 5.2895395 32.837511 4.8852246 33.690051 4.6484375 34.445312 L 4.6464844 34.451172 L 4.6445312 34.455078 C 4.3882597 35.286653 4.0507813 36.398902 4.0507812 37.710938 C 4.050775 42.817736 8.2464268 47 13.359375 47 C 19.155308 47 23.13514 42.379741 25 40.246094 C 26.863773 42.378622 30.84408 47 36.640625 47 C 41.753573 47 45.949219 42.817041 45.949219 37.710938 C 45.949219 36.400725 45.611269 35.290244 45.357422 34.462891 L 45.355469 34.457031 L 45.353516 34.451172 C 45.116766 33.696932 44.710766 32.842025 44.011719 31.355469 C 43.312672 29.868912 42.358775 27.905437 41.1875 25.539062 C 38.845946 20.808326 35.636451 14.471917 31.900391 7.2167969 L 31.896484 7.2089844 C 30.573258 4.6215238 27.909692 3 25 3 z M 25 7 C 26.501366 7 27.663733 7.7112326 28.337891 9.0332031 L 28.339844 9.0371094 L 28.341797 9.0410156 C 32.072698 16.286027 35.273612 22.609248 37.601562 27.3125 C 38.765538 29.664126 39.712688 31.612775 40.392578 33.058594 C 41.070992 34.501273 41.51864 35.591444 41.535156 35.642578 C 41.766356 36.396981 41.949219 37.142801 41.949219 37.710938 C 41.949219 40.640833 39.589677 43 36.640625 43 C 33.058397 43 29.288603 39.125076 27.574219 37.181641 L 27.570312 37.177734 L 27.564453 37.171875 C 29.414381 34.870802 32.5 30.815064 32.5 26.285156 C 32.5 22.24174 29.075312 19 25 19 C 20.924688 19 17.5 22.24174 17.5 26.285156 C 17.5 30.821724 20.585713 34.874909 22.433594 37.171875 L 22.429688 37.175781 L 22.425781 37.181641 C 20.71032 39.126116 16.941603 43 13.359375 43 C 10.410323 43 8.0507812 40.642105 8.0507812 37.710938 C 8.0507812 37.139669 8.2326858 36.397306 8.4648438 35.642578 C 8.4785567 35.598838 8.9298042 34.499865 9.609375 33.054688 C 10.288946 31.60951 11.234712 29.661671 12.398438 27.310547 C 14.725886 22.608298 17.926351 16.285977 21.65625 9.0429688 L 21.658203 9.0390625 L 21.660156 9.0371094 C 22.336573 7.7118248 23.498634 7 25 7 z M 25 23 C 26.990688 23 28.5 24.498572 28.5 26.285156 C 28.5 28.42415 26.577097 31.630372 24.998047 33.798828 C 23.4206 31.634253 21.5 28.434819 21.5 26.285156 C 21.5 24.498572 23.009312 23 25 23 z" />
    </svg>
  ),
};

const Register = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible2, setVisible2] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
    dispatch(createUser({email:data.email,password:data.password}))
  }

  // console.log(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/.test(watch('password')))


  return (
    <div className="lg:hero min-h-screen bg-base-100 lg:bg-base-200">
      <div className="lg:hero-content flex-col lg:flex-row-reverse">
        <div className="lg:text-left lg:block mx-5 py-5">
          <div className="pt-5 pb-3 lg:py-0">
            {Icon.ThemeIcon}
            <span className="mx-1 lg:hidden">
              Process with your information
            </span>
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <p className="py-6 hidden lg:flex">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="divider lg:divider-horizontal hidden lg:flex"></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:card lg:flex-shrink-0 w-full lg:max-w-sm lg:shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="lg:input lg:input-bordered border-b-secondary border-2 border-base-100 p-2 rounded bg-inherit outline-none"
                {...register("email")}
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={isVisible ? "text" : "password"}
                placeholder="***********"
                className="lg:input lg:input-bordered border-b-secondary border-2 border-base-100 p-2 rounded bg-inherit outline-none"
                {...register("password")}
              />
              <span
                className="absolute top-12 right-4"
                onClick={() => setVisible((prev) => !prev)}
              >
                {isVisible ? Icon.eyeClose : Icon.eyeOpen}
              </span>
              <StrongPassword pass={watch("password")} />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type={isVisible2 ? "text" : "password"}
                placeholder="***********"
                className="lg:input lg:input-bordered border-b-secondary border-2 border-base-100 p-2 rounded bg-inherit outline-none"
                {...register("confirm-password")}
              />{" "}
              <span
                className="absolute top-12 right-4"
                onClick={() => setVisible2((prev) => !prev)}
              >
                {isVisible2 ? Icon.eyeClose : Icon.eyeOpen}
              </span>
              {watch("password") === watch("confirm-password") ? (
                <span></span>
              ) : (
                watch("confirm-password")?.length > 0 && (
                  <span className="text-red-400 text-sm my-2">
                    Password didn't match
                  </span>
                )
              )}
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-secondary"
                type="submit"
                disabled={
                  watch("password") !== watch("confirm-password") ||
                  watch('password')=== undefined ||
                  watch('password') ===  ''
                }
              >
                Register
              </button>
            </div>
            <p className="text-sm">
              Already have an account?
              <Link to={"/signin"} className="underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
