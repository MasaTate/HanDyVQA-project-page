import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback'; // パスは環境に合わせてください
import { ZoomIn, X } from 'lucide-react'; // Xアイコンを追加
import { createPortal } from 'react-dom';

// 動画ファイルのインポート（パスは環境に合わせてください）
import action_video from '../asset/videos/action_0015.mp4';
import process_video from '../asset/videos/process_0072.mp4';
import objects_video from '../asset/videos/objects_0081.mp4';
import location_video from '../asset/videos/location_0097.mp4';
import state_video from '../asset/videos/state_0108.mp4';
import parts_video from '../asset/videos/parts_0019.mp4';

import action_image from '../asset/images/action_open_lid.png'
import process_image from '../asset/images/process_cut_apple.png'
import objects_image from '../asset/images/objects_hammer_pliers.png'
import location_image from '../asset/images/location_put_smartphone.png'
import statechange_image from '../asset/images/state_mix_powder.png'
import objectparts_image from '../asset/images/parts_cpu.png'

type Example = {
  id: number;
  image: string;
  category: string;
  objects: string[];
  annotations: number;
  videoUrl: string;
};

const examples: Example[] = [
  {
    id: 1,
    image: action_image,
    category: 'Action',
    objects: ['MCQ'],
    annotations: 1922,
    videoUrl: action_video,
  },
  {
    id: 2,
    image: process_image,
    category: 'Process',
    objects: ['MCQ'],
    annotations: 1856,
    videoUrl: process_video,
  },
  {
    id: 3,
    image: objects_image,
    category: 'Objects',
    objects: ['MCQ', 'ReasoningVOS'],
    annotations: 1767,
    videoUrl: objects_video,
  },
  {
    id: 4,
    image: location_image,
    category: 'Location',
    objects: ['MCQ'],
    annotations: 1870,
    videoUrl: location_video,
  },
  {
    id: 5,
    image: statechange_image,
    category: 'State Change',
    objects: ['MCQ'],
    annotations: 1857,
    videoUrl: state_video,
  },
  {
    id: 6,
    image: objectparts_image,
    category: 'Object Parts',
    objects: ['MCQ', 'ReasoningVOS'],
    annotations: 1820,
    videoUrl: parts_video,
  },
];

export function DatasetExamples() {
  const [selectedExampleId, setSelectedExampleId] = useState<number | null>(null);
  
  // マウント状態の管理
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (selectedExampleId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedExampleId]);

  const selectedExample =
    selectedExampleId != null
      ? examples.find((ex) => ex.id === selectedExampleId) ?? null
      : null;

  // ★タグの色を決定するヘルパー関数
  const getTagStyle = (tag: string) => {
    if (tag === 'ReasoningVOS') {
      return 'bg-pink-100 text-pink-700';
    }
    // デフォルト（MCQなど）
    return 'bg-blue-100 text-blue-700';
  };

  return (
    <>
      {/* ===== メインのセクション ===== */}
      <section id="dataset" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Dataset Examples</h2> */}
            <h2 className="text-gray-900 mb-4">Dataset Examples</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dataset covers both the manipulation and effect aspects of HOI dynamics across diverse real-world scenarios. <strong>Click on each card to view the example of each category video.</strong>
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {examples.map((example) => (
              <div
                key={example.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedExampleId(example.id)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={example.image}
                    alt={example.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ZoomIn
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-200"
                      size={32}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{example.category}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {/* ★変更点1: ここで getTagStyle を使用 */}
                    {example.objects.map((obj, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${getTagStyle(obj)}`}
                      >
                        {obj}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">{example.annotations} Questions</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== モーダル（Portal） ===== */}
      {mounted && selectedExample && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
          className="p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedExampleId(null)}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '56rem',
              backgroundColor: '#111827',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxHeight: '90vh'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedExampleId(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
            >
              <X size={20} />
            </button>

            <div 
              style={{ 
                width: '100%', 
                backgroundColor: 'black',
                display: 'flex',
                justifyContent: 'center',
                flexGrow: 0 
              }}
            >
              <video
                key={selectedExample.id}
                src={selectedExample.videoUrl}
                controls
                autoPlay
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain'
                }}
                poster={selectedExample.image}
              />
            </div>

            <div 
              className="p-6 text-white border-t border-gray-800"
              style={{ width: '100%', backgroundColor: '#111827' }} 
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">{selectedExample.category}</h3>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="flex items-center gap-1">
                      <span className="bg-blue-600 w-2 h-2 rounded-full"></span>
                      {selectedExample.annotations} Questions
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 items-center">
                  {selectedExample.objects.map((obj, idx) => (
                    <span 
                      key={idx} 
                      // 文字の垂直位置も真ん中に来るように leading-none 等で微調整するとより綺麗です
                      className={`px-2 py-1 rounded-full text-sm font-medium leading-none ${getTagStyle(obj)}`}
                    >
                      {obj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}