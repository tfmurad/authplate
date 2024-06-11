"use client";

import LoginForm from "@/components/Form/LoginForm";
import { Button } from "@/components/ui/button";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="h2 font-semibold">Sign in to your account</h1>
        <p className="text-center">
          Don't Have An Account?{" "}
          <Link
            className="font-semibold text-primary cursor-pointer"
            href="/signup"
          >
            sign up
          </Link>
        </p>
      </div>
      <div className="mx-auto max-w-md">
        <LoginForm />
        <div className="space-y-5 mt-5">
          <div className="w-full text-center">Or Continue With</div>
          <Button
            onClick={() => {
              signIn("github");
            }}
            className="w-full"
          >
            <SiGithub color="#000" size={24} className="mr-3 inline-block" />
            <span>Login With Github</span>
          </Button>
        </div>
      </div>
    </>
  );
}
