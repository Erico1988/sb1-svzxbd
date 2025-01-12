import { Task } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: 'MDG-2000001492-0099-W-NCB',
    mode: 'Planifié automatiquement',
    coordination: 'CIR-FNR',
    marketType: 'Travaux',
    method: '',
    conduct: '',
    reference: 'MDG-2000001492-0099-W-NCB',
    description: 'Travaux de réhabilitation des réseaux hydroagricoles des deux (02) Périmètres Irrigués de Tsiefa et de Sahafoy dans la Commune Rurale Ambondromisotra, District Ambatofinandrahana, Région Amoron\'i Mania',
    taskName: '',
    resources: '',
    status: 'Non commencé',
    physicalProgress: 0,
    plannedDuration: 0,
    plannedStart: '2024-03-15',
    plannedEnd: '2024-08-23',
    completionPercentage: 100,
    startAlert: true,
    startAlertSent: false,
    startAlertDate: null,
    actualDuration: 0.75,
    actualStart: '2024-08-23',
    actualEnd: '2024-08-23',
    actualProgress: 0,
    remainingDays: 0,
    actualStartAlert: false,
    actualStartAlertSent: false,
    actualStartAlertDate: null,
    endAlert: false,
    endAlertSent: false,
    endAlertDate: null,
    startGap: 0,
    durationGap: 0,
    comment: '',
    commentDate: null,
    reminder: false,
    reminderDate: null,
    plannedReminder: null,
    cancelled: false,
    requiredDocuments: [],
    predecessors: [],
  },
  {
    id: 'MDG-2000001492-0100-W-NCB',
    mode: 'Planifié automatiquement',
    coordination: 'CIR-MNK',
    marketType: 'Travaux',
    method: 'NCB',
    conduct: 'Standard',
    reference: 'MDG-2000001492-0100-W-NCB',
    description: 'Travaux de réhabilitation du système d\'irrigation de Manakara',
    taskName: 'Réhabilitation système irrigation',
    resources: 'Équipe technique',
    status: 'En cours',
    physicalProgress: 45,
    plannedDuration: 180,
    plannedStart: '2024-02-01',
    plannedEnd: '2024-07-30',
    completionPercentage: 45,
    startAlert: false,
    startAlertSent: true,
    startAlertDate: '2024-02-01',
    actualDuration: 45,
    actualStart: '2024-02-01',
    actualEnd: null,
    actualProgress: 45,
    remainingDays: 135,
    actualStartAlert: false,
    actualStartAlertSent: true,
    actualStartAlertDate: '2024-02-01',
    endAlert: false,
    endAlertSent: false,
    endAlertDate: null,
    startGap: 0,
    durationGap: 0,
    comment: 'Progression conforme au planning',
    commentDate: '2024-03-15',
    reminder: true,
    reminderDate: '2024-04-01',
    plannedReminder: '2024-04-01',
    cancelled: false,
    requiredDocuments: ['Rapport hebdomadaire', 'Photos du site'],
    predecessors: [],
  },
  {
    id: 'MDG-2000001492-0101-W-NCB',
    mode: 'Planifié automatiquement',
    coordination: 'CIR-FTD',
    marketType: 'Travaux',
    method: 'NCB',
    conduct: 'Standard',
    reference: 'MDG-2000001492-0101-W-NCB',
    description: 'Construction du système d\'irrigation de Fort Dauphin',
    taskName: 'Construction système irrigation',
    resources: 'Équipe technique',
    status: 'En cours',
    physicalProgress: 75,
    plannedDuration: 240,
    plannedStart: '2024-01-15',
    plannedEnd: '2024-09-15',
    completionPercentage: 75,
    startAlert: false,
    startAlertSent: true,
    startAlertDate: '2024-01-15',
    actualDuration: 60,
    actualStart: '2024-01-15',
    actualEnd: null,
    actualProgress: 75,
    remainingDays: 180,
    actualStartAlert: false,
    actualStartAlertSent: true,
    actualStartAlertDate: '2024-01-15',
    endAlert: false,
    endAlertSent: false,
    endAlertDate: null,
    startGap: 0,
    durationGap: 0,
    comment: 'Avancement satisfaisant',
    commentDate: '2024-03-15',
    reminder: true,
    reminderDate: '2024-04-15',
    plannedReminder: '2024-04-15',
    cancelled: false,
    requiredDocuments: ['Rapport mensuel', 'Photos du site'],
    predecessors: [],
  }
];