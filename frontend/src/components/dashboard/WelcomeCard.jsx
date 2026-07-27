// components/dashboard/WelcomeCard.jsx
export default function WelcomeCard({ name }) {
  return (
    <div className="mb-6">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
        👋 Welcome {name}!
      </h1>
      <p className="mt-4 text-xl text-gray-700 leading-relaxed">
        Keep applying. You're closer than you think.
      </p>
      <p className="mt-3 text-lg text-gray-600 italic">
        Every step counts toward your goal.
      </p>
    </div>
  );
}
