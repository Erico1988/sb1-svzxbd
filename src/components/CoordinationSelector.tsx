import React from 'react';
import { MapPin } from 'lucide-react';

const COORDINATIONS = [
  { id: 'CIR-FNR', name: 'CIR FIANARANTSOA' },
  { id: 'CIR-MNK', name: 'CIR MANAKARA' },
  { id: 'CIR-FTD', name: 'CIR FORT DAUPHIN' },
  { id: 'UCP', name: 'UCP' },
];

interface Props {
  selectedCoordination: string;
  onSelect: (coordination: string) => void;
}

export function CoordinationSelector({ selectedCoordination, onSelect }: Props) {
  return (
    <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
      {COORDINATIONS.map((coord) => (
        <button
          key={coord.id}
          onClick={() => onSelect(coord.id)}
          className={`flex items-center px-4 py-2 rounded-lg ${
            selectedCoordination === coord.id
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          } shadow-sm transition-colors duration-200`}
        >
          <MapPin className="h-4 w-4 mr-2" />
          <span className="whitespace-nowrap">{coord.name}</span>
        </button>
      ))}
    </div>
  );
}