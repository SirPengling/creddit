export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const response = await fetch(`http://localhost:5000/user/${slug}`);

    if (response.status == 404) {
        return (
            <div className="w-screen h-96 flex flex-col items-center justify-center px-96">
                <h2 className="font-mono text-zinc-500 mb-4 text-xl">u/{slug}</h2>
                <h1 className="text-4xl">This user doesn't exist.</h1>
                <p className="mt-4 text-center">The account you're looking for may have been banned or deleted, or the username is incorrect.</p>
            </div>
        )
    }

    const user = await response.json();

    return <h1>User: {user.username}<br />Password Hash: {user.password}</h1>
}