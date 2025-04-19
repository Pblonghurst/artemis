export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <a
        href="/api/auth/login?returnTo=/dashboard"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Login to Artemis
      </a>
    </main>
  );
}