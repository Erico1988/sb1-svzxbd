import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardStats } from './components/DashboardStats';
import { Charts } from './components/Charts';
import { TaskList } from './components/TaskList';
import { CoordinationDetail } from './pages/CoordinationDetail';
import { TaskForm } from './pages/TaskForm';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCoordination, setSelectedCoordination] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'task-form'>('dashboard');

  const handleNavigate = (path: string) => {
    if (path === '/task-form') {
      setCurrentPage('task-form');
      setSelectedCoordination(null);
    } else {
      setCurrentPage('dashboard');
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectCoordination={setSelectedCoordination}
        onNavigate={handleNavigate}
        selectedCoordination={selectedCoordination}
      />

      <div className="lg:pl-64">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {currentPage === 'task-form' ? (
              <TaskForm onBack={() => handleNavigate('/')} />
            ) : selectedCoordination ? (
              <CoordinationDetail
                coordinationId={selectedCoordination}
                onBack={() => setSelectedCoordination(null)}
              />
            ) : (
              <div className="space-y-6">
                <DashboardStats />
                <Charts />
                <TaskList />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;