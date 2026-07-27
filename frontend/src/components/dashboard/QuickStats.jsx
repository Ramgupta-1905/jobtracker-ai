import React from 'react'
import { FileText, CalendarDays, Trophy, XCircle } from 'lucide-react'

const stats = [
  {
    id: 1,
    title: 'Applications',
    value: 24,
    subtitle: '+3 this week',
    icon: FileText,
    color: 'text-blue-500',
  },
  {
    id: 2,
    title: 'Interviews',
    value: 5,
    subtitle: '2 upcoming',
    icon: CalendarDays,
    color: 'text-green-500',
  },
  {
    id: 3,
    title: 'Offers',
    value: 2,
    subtitle: '1 pending',
    icon: Trophy,
    color: 'text-amber-500',
  },
  {
    id: 4,
    title: 'Rejections',
    value: 8,
    subtitle: 'Keep improving',
    icon: XCircle,
    color: 'text-red-500',
  },
]

export default function QuickStats() {
  return (
    <div className="w-full h-full bg-white rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.id}
              className="flex flex-col items-start p-4 rounded-lg hover:bg-gray-50"
            >
              <Icon className={`${s.color} w-6 h-6 mb-2`} />
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="text-sm font-medium mt-1">{s.title}</div>
              <div className="text-xs text-gray-500 mt-1">{s.subtitle}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
