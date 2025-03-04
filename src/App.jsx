import NavBar from './components/NavBar';
import { useConnection } from '@arweave-wallet-kit/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

function App() {
  const { connected } = useConnection();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <Routes>
        <Route path="/" element={
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                You could just...{' '}
                <TypeAnimation
                  sequence={[
                    3000,
                    'build things',
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={0}
                  style={{ display: 'inline-block' }}
                />
              </h1>
              <div className="text-xl text-gray-600 mb-8">
                <TypeAnimation
                  sequence={[
                    5000,
                    'But, you have to learn how to first.',
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={0}
                  style={{ display: 'inline-block' }}
                />
              </div>
              
              {connected ? (
                <div className="mt-8 text-center">
                  <h2 className="text-xl font-semibold mb-4">
                    Connected Successfully! 🎉
                  </h2>
                </div>
              ) : (
                <p className="text-gray-600 mb-8">
                  Connect your wallet to get started
                </p>
              )}

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6 text-center">
                  Powered by these amazing SDKs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <a 
                    href="https://docs.arweavekit.com/arweave-wallet-kit/introduction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3">Arweave Wallet Kit</h3>
                    <p className="text-gray-600">
                      Unified wallet interaction for Arweave applications
                    </p>
                  </a>

                  <a 
                    href="https://docs.ar.io/build/ar-io-sdk/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3">AR.IO SDK</h3>
                    <p className="text-gray-600">
                      Gateway and name system integration for Arweave
                    </p>
                  </a>

                  <a 
                    href="https://docs.ardrive.io/docs/turbo/turbo-sdk/#installation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-3">Turbo SDK</h3>
                    <p className="text-gray-600">
                      Fast and efficient data uploads to Arweave
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </main>
        } />
        <Route path="/dashboard" element={
          connected ? (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Dashboard content */}
            </main>
          ) : (
            <Navigate to="/" replace />
          )
        } />
      </Routes>
    </div>
  );
}

export default App;
