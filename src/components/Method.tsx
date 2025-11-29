import { Database, User, Bot} from 'lucide-react';

export function Method() {
  return (
    <section id="method" className="py-12 bg-white">
      <div className="text-center">
        <h2 className="text-gray-900 mb-6">Dataset Construction</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Ego4D Dataset */}
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                <Database className="w-5 h-5 mr-2 text-gray-900" />
                <div className="flex-1 gap-1 text-gray-900">
                  <div>Ego4D</div>
                  <div>Dataset</div>
                </div>
              </div>

              <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 h-0 min-w-8" />

              {/* Automatic Question Generation */}
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-900" />
                <div className="flex-1 gap-1 text-blue-900">
                  <div>Automatic</div>
                  <div>Question</div>
                  <div>Generation</div>
                </div>
              </div>

              <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 h-0 min-w-8" />

              {/* Human Answer Annotation */}
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-900" />
                <div className="flex-1 gap-1 text-purple-900">
                  <div>Human</div>
                  <div>Answer</div>
                  <div>Annotation</div>
                </div>
              </div>

              <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 h-0 min-w-8" />

              {/* Automatic Distractor Generation */}
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                <Bot className="w-5 h-5 mr-2 text-blue-900" />
                <div className="flex-1 gap-1 text-blue-900">
                  <div>Automatic</div>
                  <div>Distractor</div>
                  <div>Generation</div>
                </div>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-gray-300 mx-2 h-0 min-w-8" />

              {/* Human Refinement */}
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center">
                <User className="w-5 h-5 mr-2 text-purple-900" />
                <div className="flex-1 gap-1 text-purple-900">
                  <div>Human</div>
                  <div>Refinement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-gray-900 mb-3">Collaborative Approach</h3>
              <p>
                We developed a collaborative framework that uses <strong>LLMs</strong> to automatically propose initial QA candidates, that are carefully refined and verified by <strong>humans</strong> to ensure quality and diversity.
                Note that all QA pairs undergo human verification to ensure the quality and the difficulty of the questions.
              </p>
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Data Source</h3>
              <p>
                Our dataset is built upon the Ego4D dataset, which provides a <strong>rich collection of egocentric videos capturing diverse hand-object interactions in real-world scenarios.</strong> We extracted a subset of videos that prominently feature hand-object interactions to ensure relevance to our research focus.
              </p>
              {/* <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Context-Aware Feature Pyramid:</span> Dynamically adjusts feature aggregation based on scene complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Adaptive Detection Head:</span> Adjusts detection thresholds based on environmental conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><span className="text-gray-900">Multi-Task Learning:</span> Jointly optimizes for detection, segmentation, and scene understanding</span>
                </li>
              </ul> */}
            </div>

            <div>
              <h3 className="text-gray-900 mb-3">Mask Annotation</h3>
              <p>
                For the Objects and Object Parts questions, we provide pixel-level segmentation masks corresponding to the referenced objects or object parts.
                These part-level annotation masks enable <strong>the evaluation of component-level reasoning in video object segmentation, making our benchmark the first to support fine-grained part-aware VOS evaluation.</strong>  
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
