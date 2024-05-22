"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { push } = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
        callbackUrl: "/dashboard",
      });
      if (!res?.error) {
        push("/dashboard");
      } else {
        console.log(res.error);
      }
    } catch (err) {
      console.log(err);
    }

    return;
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable ">
        <div className="flex items-center justify-center w-full lg:p-12 ">
          <div className="flex items-center xl:p-10">
            <form
              className="flex flex-col w-full h-full py-4 px-8 text-center bg-gray-50 rounded-3xl"
              onSubmit={handleLogin}
            >
              <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                Sign In
              </h3>
              <label
                className="mb-2 text-sm text-start text-grey-900"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="mail@loopple.com"
                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              <label
                className="mb-2 text-sm text-start text-grey-900"
                htmlFor="password"
              >
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter a password"
                className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
              />
              <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white bg-blue-500 transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">
                Sign In
              </button>

              <p className="text-sm leading-relaxed text-grey-900">
                Not registered yet?{" "}
                <Link href="/register" className="font-bold text-grey-700">
                  Create an Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
