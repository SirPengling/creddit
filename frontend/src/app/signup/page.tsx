export default function signup() {
  return (
    <form className="h-screen w-screen flex flex-col items-center">
      <h1 className="text-4xl font-semibold mt-24 mb-2">Sign up</h1>
      <p className="mb-4 text-zinc-300">First, we'll need some general info.</p>
      <div className="flex flex-col items-center">
        <div className="flex flex-col">
          <label className="text-zinc-400 mb-1 text-sm" htmlFor="username-input">
            Username
          </label>
          <input
            id="username-input"
            className="rounded border border-zinc-600 p-2.5 py-1.5"
          />
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
        <div className="flex flex-col mt-4">
          <label className="text-zinc-400 mb-1 text-sm" htmlFor="password-input">
            Username
          </label>
          <input
            id="password-input"
            type="password"
            className="rounded border border-zinc-600 p-2.5 py-1.5"
          />
        </div>
        <input type="submit" className="rounded mt-6 p-2.5 py-1.5 bg-white text-black" value="Continue" />
        <div className="w-xl h-8 mt-4 bg-neutral-800 grid">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
        </div>
      </div>
    </form>
  );
}
