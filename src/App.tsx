/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { BookOpen, History, LogOut, Sparkles } from 'lucide-react';
import Home from './pages/Home';
import MistakeBook from './pages/MistakeBook';

function Layout({ children }: { children: React.ReactNode }) {
  const { user, login, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <nav className="bg-white border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-emerald-500 mr-2" />
              <Link to="/" className="text-xl font-bold text-emerald-800">
                春玉的专属长难句理解训练
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/" className="text-slate-600 hover:text-emerald-600 flex items-center px-3 py-2 rounded-md text-sm font-medium">
                    <BookOpen className="h-4 w-4 mr-1" />
                    训练
                  </Link>
                  <Link to="/mistakes" className="text-slate-600 hover:text-emerald-600 flex items-center px-3 py-2 rounded-md text-sm font-medium">
                    <History className="h-4 w-4 mr-1" />
                    错题本
                  </Link>
                  <div className="flex items-center ml-4 pl-4 border-l border-slate-200">
                    <img src={user.photoURL || ''} alt="avatar" className="h-8 w-8 rounded-full mr-2" referrerPolicy="no-referrer" />
                    <button onClick={logout} className="text-slate-500 hover:text-red-500">
                      <LogOut className="h-5 w-5" />
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mistakes" element={<MistakeBook />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
