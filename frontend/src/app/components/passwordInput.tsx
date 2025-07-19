"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="flex flex-col mt-4 ml-[32px]">
      <label className="text-zinc-400 mb-1 text-sm" htmlFor="password-input">
        Password
      </label>
      <div className="flex items-center">
        <input
          id="password-input"
          type={showPassword ? "text" : "password"}
          className="rounded border border-zinc-600 p-2.5 py-1.5 focus:outline-1 focus:outline-zinc-600"
        />
        <Icon
          className="ml-4"
          icon={showPassword ? "octicon:eye-16" : "octicon:eye-closed-16"}
          color="#52525c"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
