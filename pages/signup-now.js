import AuthHeader from "components/core/AuthHeader";
import AuthEmail from "components/core/AuthEmail";
import AuthFirebase from "components/core/AuthFirebase";

export default function SignUp() {
  return (
    <>
      <div className="font-sans textblue bg-white bg-gradient-to-tl from-orange-200 via-white">
        <div className="grid grid-cols-8">
          <div
            className="col-span-3 bg-cover h-screen"
            style={{ backgroundImage: `url(/images/signup/signupbanner.png` }}
          ></div>
          <div className="col-span-5">
            <div className="mt-24 sm:mx-auto sm:w-full sm:max-w-md">
              <AuthHeader />
              <AuthEmail />
              <AuthFirebase />
              <div className="textblue mt-6 text-xs text-left">
                By continuing, you accept our Terms of Service and Privacy
                Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
