import { LoginForm } from "@/components/login-form"
import React from 'react'; //Tambah ini kalo error saat  commit



export default function Page() {
  return (
    (<div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>)
  );
}
