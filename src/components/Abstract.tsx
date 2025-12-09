import teaser from "../asset/figures/HanDyVQA_teaser.jpg"

export function Abstract() {
  return (
    <section id="abstract" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <img src={teaser} alt="HanDyVQA Teaser" className="w-full h-auto rounded-md object-contain mb-12" />
        <div className="text-center">
          <h2 className="text-gray-900 mb-6">Abstract</h2>
        </div>
        <div className="text-gray-700 space-y-4">
          <p>
            Hand–object interaction (HOI) inherently involves dynamics where human manipulations produce distinct spatio-temporal effects on objects.
            However, existing semantic HOI benchmarks focused either on manipulation or on the resulting effects at a coarse level, lacking fine-grained spatio-temporal reasoning to capture the underlying dynamics in HOI.
          </p>
          <p>
            We introduce <strong>HanDyVQA</strong>, a fine-grained video question-answering benchmark that comprehensively covers both the manipulation and effect aspects of HOI. HanDyVQA comprises six complementary question types (Action, Process, Objects, Location, State Change, and Object Parts), totalling 11.1K multiple-choice QA pairs. 
            Collected QA pairs recognizing manipulation styles, hand/object motions, and part-level state changes.
            HanDyVQA also includes 10.3K segmentation masks for Objects and Object Parts questions, enabling the evaluation of object/part-level reasoning in video object segmentation.
          </p>
          <p>
            We evaluated recent video foundation models on our benchmark and found that even the best-performing model, Gemini-2.5-Pro, reached only 73% average accuracy, which is far from human performance (97%). 
            Further analysis shows the remaining challenges in spatial relationship, motion, and part-level geometric understanding.
            We also found that integrating explicit HOI-related cues into visual features improves performance, offering insights for developing future models with a deeper understanding of HOI dynamics.
          </p>

          {/* Add youtube video */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl aspect-16-9">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/WQklN8H14KM"
                title="HanDyVQA Teaser Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-10 pt-10 border-t border-gray-200">
          <div className="text-center">
            <div className="text-blue-600 mb-2">11.1K</div>
            <div className="text-gray-600">Question-Answer Pairs</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2">10.3K</div>
            <div className="text-gray-600">Mask Annotations</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2">6</div>
            <div className="text-gray-600">Question Categories</div>
          </div>
          <div className="text-center">
            <div className="text-blue-600 mb-2">112</div>
            <div className="text-gray-600">Annotated Video Domains</div>
          </div>
        </div>
      </div>
    </section>
  );
}
