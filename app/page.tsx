export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <a
        href="auth/login"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Login to Artemis

      </a>

        <a
        href="auth/logout"
        className="px-4 py-2 bg-black text-white rounded"
      >
        Logout of Artemis
      </a>
    </main>
  );
}