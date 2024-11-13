import React, { useState } from 'react';
import { ArrowLeft, Save } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export function TaskForm({ onBack }: Props) {
  const [formData, setFormData] = useState({
    mode: 'Planifié automatiquement',
    coordination: '',
    marketType: '',
    method: '',
    reference: '',
    description: '',
    taskName: '',
    resources: '',
    plannedStart: '',
    plannedEnd: '',
    requiredDocuments: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            Nouvelle tâche
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Mode</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Planifié automatiquement">Planifié automatiquement</option>
              <option value="Manuel">Manuel</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Coordination</label>
            <select
              name="coordination"
              value={formData.coordination}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Sélectionner une coordination</option>
              <option value="CIR-FNR">CIR FIANARANTSOA</option>
              <option value="CIR-MNK">CIR MANAKARA</option>
              <option value="CIR-FTD">CIR FORT DAUPHIN</option>
              <option value="UCP">UCP</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type de marché</label>
            <input
              type="text"
              name="marketType"
              value={formData.marketType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Méthode</label>
            <input
              type="text"
              name="method"
              value={formData.method}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Référence du marché</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date de début prévue</label>
            <input
              type="date"
              name="plannedStart"
              value={formData.plannedStart}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date de fin prévue</label>
            <input
              type="date"
              name="plannedEnd"
              value={formData.plannedEnd}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <Save className="h-4 w-4 mr-2" />
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
}