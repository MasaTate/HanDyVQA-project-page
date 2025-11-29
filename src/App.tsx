import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Abstract } from './components/Abstract';
import { DatasetExamples } from './components/DatasetExamples';
import { Method } from './components/Method';
import { Results } from './components/Results';
import { Citation } from './components/Citation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Abstract />
        <DatasetExamples />
        <Method />
        <Results />
        <Citation />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p></p>
        </div>
      </footer>
    </div>
  );
}
