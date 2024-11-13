import React from 'react';
import { MapPin, LayoutDashboard, PlusCircle, Settings } from 'lucide-react';

const COORDINATIONS = [
  { id: 'CIR-FNR', name: 'CIR FIANARANTSOA' },
  { id: 'CIR-MNK', name: 'CIR MANAKARA' },
  { id: 'CIR-FTD', name: 'CIR FORT DAUPHIN' },
  { id: 'UCP', name: 'UCP' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectCoordination: (id: string) => void;
  onNavigate: (path: string) => void;
  selectedCoordination: string | null;
}

export function Sidebar({ isOpen, onClose, onSelectCoordination, onNavigate, selectedCoordination }: Props) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center justify-center border-b border-gray-200">
            <h1 className="text-xl font-bold text-indigo-600">Suivi des Marchés</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-6">
            <div>
              <button
                onClick={() => onNavigate('/')}
                className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <LayoutDashboard className="h-5 w-5 mr-3" />
                Tableau de bord
              </button>
              <button
                onClick={() => onNavigate('/task-form')}
                className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg mt-2"
              >
                <PlusCircle className="h-5 w-5 mr-3" />
                Nouvelle tâche
              </button>
            </div>

            <div>
              <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Coordinations
              </h2>
              <div className="mt-2 space-y-1">
                {COORDINATIONS.map((coord) => (
                  <button
                    key={coord.id}
                    onClick={() => onSelectCoordination(coord.id)}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-lg ${
                      selectedCoordination === coord.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <MapPin className="h-5 w-5 mr-3" />
                    {coord.name}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Settings */}
          <div className="p-4 border-t border-gray-200">
            <button
              className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              <Settings className="h-5 w-5 mr-3" />
              Paramètres
            </button>
          </div>
        </div>
      </div>
    </>
  );
}