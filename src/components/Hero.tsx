import { ArrowRight, Award } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6"> */}
            {/* <Award size={16} /> */}
            {/* <span>CVPR 2026</span> */}
          {/* </div> */}
          <h1 className="hero-title text-gray-900 mb-6">
            HanDyVQA: A Video QA Benchmark for 
            <br />
            Fine-Grained Hand-Object Interaction Dynamics
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-700">
            <span><a href="https://masatate.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Masatoshi Tateno</a><sup>1,2</sup></span>
            <span><a href="https://scholar.google.com/citations?user=gx-DxAEAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Gido Kato</a><sup>2,3</sup></span>
            <span><a href="https://hirokatsukataoka.net/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Hirokatsu Kataoka</a><sup>2,4</sup></span>
            <span><a href="https://sites.google.com/ut-vision.org/ysato/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Yoichi Sato</a><sup>1</sup></span>
            <span><a href="https://artilects.net/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">Takuma Yagi</a><sup>2</sup></span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-gray-600">
            <div className="flex gap-4">
              <span><sup>1</sup>The University of Tokyo</span>
              <span><sup>2</sup>Institute of Advanced Industrial Science and Technology (AIST)</span>
            </div>
            <div className="flex gap-4">
              <span><sup>3</sup>Waseda University</span>
              <span><sup>4</sup>Oxford VGG Group</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Read Paper
              <ArrowRight size={18} />
            </a>
            <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors">
              View Code
            </a>
            <a href="https://huggingface.co/datasets/aist-cvrt/HanDyVQA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-300 hover:border-gray-400 transition-colors">
              Download Dataset
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
