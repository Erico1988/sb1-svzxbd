import React from 'react';
import { Activity, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { mockTasks } from '../data/mockData';

export function DashboardStats() {
  const stats = [
    {
      name: 'Marchés en cours',
      value: mockTasks.filter((t) => t.status === 'En cours').length,
      icon: Activity,
      change: '+2.1%',
      changeType: 'positive',
    },
    {
      name: 'Marchés complétés',
      value: mockTasks.filter((t) => t.status === 'Terminé').length,
      icon: CheckCircle2,
      change: '+12.5%',
      changeType: 'positive',
    },
    {
      name: 'Non commencés',
      value: mockTasks.filter((t) => t.status === 'Non commencé').length,
      icon: Clock,
      change: '-3.2%',
      changeType: 'negative',
    },
    {
      name: 'Alertes',
      value: mockTasks.filter((t) => t.startAlert && !t.startAlertSent).length,
      icon: AlertTriangle,
      change: '+2',
      changeType: 'warning',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
        >
          <dt>
            <div className="absolute rounded-md bg-indigo-50 p-3">
              <item.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {item.name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                item.changeType === 'positive'
                  ? 'text-green-600'
                  : item.changeType === 'negative'
                  ? 'text-red-600'
                  : 'text-yellow-600'
              }`}
            >
              {item.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  );
}