import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function Citation() {
  const [copied, setCopied] = useState(false);

  const bibtex = `@article{tateno2025handyvqa,
  title={HanDyVQA: A Video QA Benchmark for Fine-Grained Hand-Object Interaction Dynamics},
  author={Tateno, Masatoshi and Kato, Gido and Kataoka, Hirokatsu and Sato, Yoichi and Yagi, Takuma},
  journal={arXiv preprint arXiv:2512.00885},
  year={2025}
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="citation" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-gray-900 mb-6 text-center">Citation</h2>
        <div className="bg-gray-50 rounded-lg p-6 relative">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check size={18} className="text-green-600" />
            ) : (
              <Copy size={18} className="text-gray-600" />
            )}
          </button>
          <pre className="text-gray-800 overflow-x-auto text-sm">
            {bibtex}
          </pre>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <a href="https://arxiv.org/abs/2512.00885" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors text-center">
            <div className="mb-2">📄</div>
            <div>ArXiv Paper</div>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white p-6 rounded-lg hover:bg-gray-800 transition-colors text-center">
            <div className="mb-2">💻</div>
            <div>GitHub Repository</div>
          </a>
          <a href="https://huggingface.co/datasets/aist-cvrt/HanDyVQA" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-600 p-6 rounded-lg hover:bg-yellow-600 transition-colors text-center">
            <div className=" mb-2">🤗</div>
            <div>Dataset Download</div>
          </a>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>
            For questions, please contact:{' '}
            {/* <a href="mailto:masatate@iis.u-tokyo.ac.jp" className="text-blue-600 hover:underline">
              masatate[at] iis.u-tokyo.ac.jp
            </a> */}
            masatate[at]iis.u-tokyo.ac.jp
          </p>
        </div>
      </div>
    </section>
  );
}
