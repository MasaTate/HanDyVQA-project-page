import { TrendingUp } from 'lucide-react';
import Qualitative_Results from '../asset/figures/mcq_qualitative_1.jpg';
import Ablation from '../asset/figures/frame_number_per_cat.jpg';
import Qualitative_Results_RVOS from '../asset/figures/seg_qualitative_1.jpg';

const benchmarkResults = [
  { method: 'Faster R-CNN', mAP: 68.4, fps: 15 },
  { method: 'YOLOv5', mAP: 71.2, fps: 45 },
  { method: 'EfficientDet', mAP: 73.8, fps: 32 },
  { method: 'DETR', mAP: 75.1, fps: 18 },
  { method: 'Ours', mAP: 84.5, fps: 28, highlight: true }
];

const categoryResults = [
  { category: 'mPLUG-Owl3-8B', score: 50.9},
  { category: 'LLaVa-Video-7B', score: 54.8},
  { category: 'GPT-4o', score: 58.9 },
  { category: 'Qwen2.5-VL-72B',  score: 69.9 },
  { category: 'Gemini-2.5-Pro', score: 72.6 },
  { category: 'Human',  score: 96.6 }
];


export function Results() {
  const getBarColor = (tag: string) => {
    if (tag === 'Human') {
      return 'bg-pink-500';
    }
    // デフォルト（MCQなど）
    return 'bg-blue-500';
  };

  const getCatText = (tag: string) => {
    if (tag === 'Human') {
      // strongで囲む
      return <strong>{tag}</strong>;
    }
    // デフォルト（MCQなど）
    return <>{tag}</>;
  }

  return (
    <section id="results" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Experimental Results</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We evaluated recent video LLMs on our HanDyVQA benchmark, demonstrating the limitation of current models in fine-grained spatio-temporal reasoning for hand-object interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-gray-900 mb-4">MCQ Performance of Video LLMs and Human (Average Acc.)</h3>
            <div className="space-y-4">
              {categoryResults.map((result, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{getCatText(result.category)}</span>
                    <span className="text-gray-900">{result.score}%</span>
                  </div>
                  <div className="relative h-6 bg-gray-100 rounded overflow-hidden">
                    {/* <div 
                      className="absolute h-full bg-gray-300 transition-all"
                      style={{ width: `${result.baseline}%` }}
                    ></div> */}
                    <div 
                      className={`absolute h-full ${getBarColor(result.category)} transition-all`}
                      style={{ width: `${result.score}%` }}
                    ></div>
                    <div className="absolute inset-0 flex items-center px-2 text-xs">
                      {/* <span className="text-gray-600">Baseline: {result.baseline}%</span> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-gray-900 mb-4 ">Ablation on Number of Input Frames and Resolution</h3>
          <div className="w-full">
            {/* 好きなパスに変えてね */}
            <img
              src={Ablation}
              alt="Benchmark comparison chart"
              className="w-full h-auto rounded-md object-contain"
            />
          </div>
        </div>

        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-12">
          <h3 className="text-gray-900 mb-4 ">Qualitative Results of MCQ</h3>
        <img src={Qualitative_Results} alt="Qualitative results of MCQ" className="w-full h-auto rounded-md object-contain" />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm mb-12">
          <h3 className="text-gray-900 mb-4 ">Qualitative Results of ReasoningVOS</h3>
        <img src={Qualitative_Results_RVOS} alt="Qualitative results of ReasoningVOS" className="w-full h-auto rounded-md object-contain" />
        </div>

        {/* <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-blue-600 mb-2">+12.3%</div>
            <div className="text-gray-600">mAP Improvement</div>
            <div className="text-gray-500 mt-1">over best baseline</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-blue-600 mb-2">+18.7%</div>
            <div className="text-gray-600">Low-Light Performance</div>
            <div className="text-gray-500 mt-1">challenging scenarios</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <div className="text-blue-600 mb-2">28 FPS</div>
            <div className="text-gray-600">Real-Time Inference</div>
            <div className="text-gray-500 mt-1">on single GPU</div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
