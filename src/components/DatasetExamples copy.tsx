import { ImageWithFallback } from './figma/ImageWithFallback';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

const examples = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGRhdGFzZXR8ZW58MXx8fHwxNzY0MzE0NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Urban Scene',
    objects: ['Vehicles', 'Buildings', 'Pedestrians'],
    annotations: 47
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1611703523714-663c38cd9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbWFnZSUyMHJlY29nbml0aW9uJTIwZXhhbXBsZXN8ZW58MXx8fHwxNzY0MzE0NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Indoor Environment',
    objects: ['Furniture', 'Electronics', 'Lighting'],
    annotations: 32
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1673732250907-b6a8ea5e6f0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYmplY3QlMjBkZXRlY3Rpb258ZW58MXx8fHwxNzY0MzE0NjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Natural Landscape',
    objects: ['Trees', 'Terrain', 'Wildlife'],
    annotations: 28
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NDMwOTMwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Cluttered Space',
    objects: ['Multiple Objects', 'Occlusions'],
    annotations: 56
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1475906067486-6c5bd3aa9c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzY0MzE0NjQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Low Light',
    objects: ['Lights', 'Reflections'],
    annotations: 23
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjQyMjkzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Complex Pattern',
    objects: ['Patterns', 'Textures'],
    annotations: 41
  }
];

export function DatasetExamples() {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);

  return (
    <section id="dataset" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">Dataset Examples</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dataset covers diverse real-world scenarios with comprehensive annotations. 
            Each image includes bounding boxes, semantic labels, and contextual metadata.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examples.map((example) => (
            <div 
              key={example.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedExample(selectedExample === example.id ? null : example.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={example.image}
                  alt={example.category}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 hover:opacity-100 transition-opacity" size={32} />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-gray-900 mb-2">{example.category}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {example.objects.map((obj, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {obj}
                    </span>
                  ))}
                </div>
                <div className="text-gray-600">{example.annotations} annotations</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-gray-900 mb-4">Dataset Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-gray-900 mb-3">Annotation Types</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Bounding box coordinates with pixel-level precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>150+ semantic category labels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Instance segmentation masks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Scene complexity ratings</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Environmental Conditions</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Varied lighting conditions (day, night, indoor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Weather variations (rain, fog, snow, clear)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Occlusion and clutter scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Multiple viewpoints and scales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
