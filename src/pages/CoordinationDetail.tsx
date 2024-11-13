import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { DetailedTaskTable } from '../components/DetailedTaskTable';
import { mockTasks } from '../data/mockData';

interface Props {
  coordinationId: string;
  onBack: () => void;
}

export function CoordinationDetail({ coordinationId, onBack }: Props) {
  const tasks = mockTasks.filter(task => task.coordination === coordinationId);
  const coordinationName = {
    'CIR-FNR': 'CIR FIANARANTSOA',
    'CIR-MNK': 'CIR MANAKARA',
    'CIR-FTD': 'CIR FORT DAUPHIN',
    'UCP': 'UCP',
  }[coordinationId] || coordinationId;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">
            {coordinationName}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Marchés actifs</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {tasks.filter(t => t.status === 'En cours').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Progression moyenne</h3>
          <p className="text-3xl font-bold text-green-600">
            {Math.round(
              tasks.reduce((acc, t) => acc + t.physicalProgress, 0) / tasks.length
            )}%
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Alertes</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {tasks.filter(t => (t.startAlert && !t.startAlertSent) || (t.endAlert && !t.endAlertSent)).length}
          </p>
        </div>
      </div>

      <DetailedTaskTable tasks={tasks} />
    </div>
  );
}