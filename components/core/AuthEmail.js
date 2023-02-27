import { useState } from "react";

export default function AuthEmail({}) {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [errorflag, setErrorFlag] = useState(false);

  return (
    <div className="mt-8">
      <div className="relative flex justify-left text-sm mb-8">
        <span className="text-lg font-medium textorange">
          Sign Up with Email
        </span>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              value={useremail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              id="email"
              type="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="-mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 -mt-4"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              value={userpassword}
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
              id="password"
              type="password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );

  async function handleSubmit() {
    //https://www.imonggo.net/signup_from_landing
    //account[email]
    //account[user_password]

    console.log(useremail + userpassword);

    if (
      !useremail ||
      useremail.trim() === "" ||
      !userpassword ||
      userpassword.trim() === ""
    ) {
      setErrorFlag(true);
    } else {
      await fetch("https://secure.imonggo.com/signup-now_from_landing", {
        body: JSON.stringify({
          "account[email]": useremail,
          "account[user_password]": userpassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then((res) => console.log(res));
    }
  }
}
