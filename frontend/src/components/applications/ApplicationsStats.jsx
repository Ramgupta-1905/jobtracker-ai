import {
  BriefcaseBusiness,
  Send,
  CalendarCheck,
  Trophy,
} from "lucide-react";

export default function ApplicationsStats({ stats }) {
  const statsData = [
    {
      title: "Total Applications",
      value: stats.total,
      icon: BriefcaseBusiness,
    },
    {
      title: "Applied",
      value: stats.applied,
      icon: Send,
    },
    {
      title: "Interviews",
      value: stats.interviews,
      icon: CalendarCheck,
    },
    {
      title: "Offers",
      value: stats.offers,
      icon: Trophy,
    },
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          Icon={stat.icon}
        />
      ))}
    </div>
  );
}

function StatCard({ title, value, Icon }) {
  return (
    <div className="rounded-2xl bg-white/15 p-5 backdrop-blur-md transition hover:bg-white/20">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-blue-100">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-white/20 p-2">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}