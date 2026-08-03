export default function WelcomeCard({ user }) {
  return (
    <div className="text-white">
      <h1 className="mt-3 text-5xl font-bold tracking-tight">
        👋 Welcome back, {user?.name || "User"}!
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-blue-100">
        Manage your job applications, prepare for interviews, track your
        progress, and stay focused on landing your dream opportunity.
      </p>
    </div>
  );
}