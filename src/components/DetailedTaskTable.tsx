import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Task } from '../types/task';
import { 
  AlertTriangle, 
  Calendar, 
  Clock, 
  Edit2, 
  Paperclip,
  ChevronDown,
  ChevronRight,
  FileText
} from 'lucide-react';

interface Props {
  tasks: Task[];
}

interface GroupedTasks {
  [key: string]: Task[];
}

export function DetailedTaskTable({ tasks }: Props) {
  const [expandedTypes, setExpandedTypes] = useState<string[]>([]);
  const [showAttachments, setShowAttachments] = useState<string | null>(null);

  const groupedTasks = tasks.reduce((acc: GroupedTasks, task) => {
    const type = task.marketType || 'Non catégorisé';
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(task);
    return acc;
  }, {});

  const toggleExpand = (type: string) => {
    setExpandedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const renderTaskRow = (task: Task) => (
    <tr key={task.id} className="hover:bg-gray-50">
      <td className="px-3 py-2 text-sm text-gray-500">{task.mode}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.coordination}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.method}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.conduct}</td>
      <td className="px-3 py-2 text-sm font-medium text-gray-900">{task.reference}</td>
      <td className="px-3 py-2">
        <div className="text-sm text-gray-900 line-clamp-2">{task.description}</div>
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.taskName}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.resources}</td>
      <td className="px-3 py-2 whitespace-nowrap">
        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
          task.status === 'Non commencé'
            ? 'bg-gray-100 text-gray-800'
            : task.status === 'En cours'
            ? 'bg-blue-100 text-blue-800'
            : task.status === 'Terminé'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {task.status}
        </span>
      </td>
      <td className="px-3 py-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-16 bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                task.physicalProgress >= 100
                  ? 'bg-green-600'
                  : task.physicalProgress >= 50
                  ? 'bg-blue-600'
                  : 'bg-yellow-600'
              }`}
              style={{ width: `${task.physicalProgress}%` }}
            />
          </div>
          <span className="ml-2 text-sm text-gray-500">{task.physicalProgress}%</span>
        </div>
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.plannedDuration} jours</td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.plannedStart && format(new Date(task.plannedStart), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.plannedEnd && format(new Date(task.plannedEnd), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.completionPercentage}%</td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.startAlert ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.startAlertSent ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.startAlertDate && format(new Date(task.startAlertDate), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.actualDuration} jours</td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.actualStart && format(new Date(task.actualStart), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.actualEnd && format(new Date(task.actualEnd), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.actualProgress}%</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.remainingDays}</td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.actualStartAlert ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.actualStartAlertSent ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.actualStartAlertDate && format(new Date(task.actualStartAlertDate), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.endAlert ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.endAlertSent ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.endAlertDate && format(new Date(task.endAlertDate), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.startGap}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.durationGap}</td>
      <td className="px-3 py-2 text-sm text-gray-500">{task.comment}</td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.commentDate && format(new Date(task.commentDate), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.reminder ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.reminderDate && format(new Date(task.reminderDate), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.plannedReminder && format(new Date(task.plannedReminder), 'dd/MM/yyyy', { locale: fr })}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.cancelled ? 'Oui' : 'Non'}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        <button 
          onClick={() => setShowAttachments(showAttachments === task.id ? null : task.id)}
          className="flex items-center text-indigo-600 hover:text-indigo-900"
        >
          <Paperclip className="h-4 w-4 mr-1" />
          {task.requiredDocuments.length}
        </button>
        {showAttachments === task.id && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-4 z-10">
            <h4 className="font-medium mb-2">Documents requis:</h4>
            <ul className="space-y-2">
              {task.requiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </td>
      <td className="px-3 py-2 text-sm text-gray-500">
        {task.predecessors.join(', ')}
      </td>
      <td className="px-3 py-2 whitespace-nowrap">
        <div className="flex space-x-2">
          <button className="text-indigo-600 hover:text-indigo-900">
            <Edit2 className="h-4 w-4" />
          </button>
          <button className="text-indigo-600 hover:text-indigo-900">
            <Paperclip className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coordination</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Méthode</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conduite</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Référence</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tâche</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ressources</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Physique</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée prévue</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Début Prévu</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fin Prévue</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Achevé</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte dém.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte env.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date env.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durée réelle</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Début réel</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fin réelle</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">% Réel</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jours rest.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte dém. réel</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte env. réel</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date env. réel</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte fin</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alerte fin env.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date env. fin</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Écart début</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Écart durée</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commentaire</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date comm.</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relance</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date relance</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Relance prévue</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annulé</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prédécesseurs</th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(groupedTasks).map(([type, tasks]) => (
              <React.Fragment key={type}>
                <tr className="bg-gray-50">
                  <td colSpan={38} className="px-3 py-2">
                    <button
                      onClick={() => toggleExpand(type)}
                      className="flex items-center text-sm font-medium text-gray-700"
                    >
                      {expandedTypes.includes(type) ? (
                        <ChevronDown className="h-4 w-4 mr-2" />
                      ) : (
                        <ChevronRight className="h-4 w-4 mr-2" />
                      )}
                      {type} ({tasks.length})
                    </button>
                  </td>
                </tr>
                {expandedTypes.includes(type) && tasks.map(task => renderTaskRow(task))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}