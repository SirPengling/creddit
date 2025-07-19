import PasswordInput from "../components/passwordInput"
import SignUpUsernameInput from "../components/signUpUsernameInput"

export default function Page() {
  return (
    <form className="h-screen w-screen flex flex-col items-center">
      <h1 className="text-4xl font-semibold mt-12 mb-2">Sign up</h1>
      <p className="mb-4 text-zinc-300">First, we'll need some general info.</p>
      <div className="flex flex-col items-center max-w-48">
        <div className="flex items-center space-x-4 mb-4"> {/* Added consistent wrapper */}
          <SignUpUsernameInput />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-zinc-400 mb-1 text-sm" htmlFor="email-input">
            E-Mail
          </label>
          <input
            id="email-input"
            type="email"
            className="rounded border border-zinc-600 p-2.5 py-1.5"
          />
        </div>
        <PasswordInput />
        <div className="flex flex-col mt-4">
          <label className="text-zinc-400 mb-1 text-sm" htmlFor="confirm-password-input">
            Confirm Password
          </label>
          <input
            id="confirm-password-input"
            type="password"
            className="rounded border border-zinc-600 p-2.5 py-1.5"
          />
        </div>
        
        <input type="submit" className="rounded mt-6 p-2.5 py-1.5 bg-white text-black" value="Continue" />
      </div>
    </form>
  );
}