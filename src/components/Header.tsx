import { FileText, Github, Database, Download } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-gray-900 hover:text-blue-600 transition-colors"
          >
            👋 HanDyVQA Dataset
          </button>
          <nav className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('abstract')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Abstract
            </button>
            <button 
              onClick={() => scrollToSection('dataset')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dataset
            </button>
            <button 
              onClick={() => scrollToSection('results')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('citation')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Citation
            </button>
            <div className="flex items-center gap-3 ml-4 border-l border-gray-200 pl-4">
              <a href="#" target="_blank" rel="noopener noreferrer"  className="text-gray-600 hover:text-gray-900 transition-colors" title="Paper">
                <FileText size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"  className="text-gray-600 hover:text-gray-900 transition-colors" title="Code">
                <Github size={20} />
              </a>
              <a href="https://huggingface.co/datasets/aist-cvrt/HanDyVQA" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" title="Dataset">
                <Database size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
