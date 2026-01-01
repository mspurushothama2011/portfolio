// src/components/GalleryPage.jsx
import { ArrowLeft, BookOpen, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const GalleryPage = () => {
  const location = useLocation();
  const activeSection = location.state?.section || 'nvc';

  // 1. Load NVC Internship Images
  const nvcImages = import.meta.glob('../assets/designs/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
  const nvcList = Object.values(nvcImages);

  // 2. Load College Images
  const collegeImages = import.meta.glob('../assets/college-designs/*.{png,jpg,jpeg,svg}', { eager: true, as: 'url' });
  const collegeList = Object.values(collegeImages);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      {/* Header & Back Button */}
      <div className="container mx-auto mb-12 flex items-center gap-4 sticky top-0 bg-slate-900/95 backdrop-blur z-20 py-4 border-b border-slate-800">
        <Link to="/" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <div>
          {/* UPDATED: Title based on section */}
          <h1 className="text-3xl font-bold">
            {activeSection === 'nvc' ? 'NVC Internship Experience' : 'College Event Leadership'}
          </h1>
          {/* UPDATED: Description */}
          <p className="text-slate-400">
            {activeSection === 'nvc' 
              ? 'Learning Design Principles & Creating Visual Assets' 
              : 'Managing Design Teams for Campus Events'}
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        
        {/* VIEW 1: NVC INTERNSHIP */}
        {activeSection === 'nvc' && (
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <BookOpen size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Internship Learning Outcomes</h2>
                {/* UPDATED: Text to reflect learning experience */}
                <p className="text-slate-400 text-sm max-w-2xl mt-1">
                  During my internship at NVC & Associates, I was trained in professional design workflows. 
                  These projects represent the practical application of the skills I learnt in 
                  <span className="text-white"> Layout Design, Typography, and Adobe Suite/Canva</span>.
                </p>
              </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {nvcList.map((imgSrc, index) => (
                <div key={`nvc-${index}`} className="break-inside-avoid">
                  <img src={imgSrc} alt="NVC Internship Work" className="w-full rounded-xl border border-slate-800 hover:border-blue-500 shadow-lg" />
                </div>
              ))}
              {nvcList.length === 0 && <p className="text-slate-500">No images found in src/assets/designs</p>}
            </div>
          </div>
        )}

        {/* VIEW 2: COLLEGE EVENTS */}
        {activeSection === 'college' && (
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Campus Leadership</h2>
                <p className="text-slate-400 text-sm max-w-2xl mt-1">
                  As the Design Team Lead, I was responsible for creating the visual identity for major college fests like ICRTMS and Synergia.
                </p>
              </div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {collegeList.map((imgSrc, index) => (
                <div key={`college-${index}`} className="break-inside-avoid">
                  <img src={imgSrc} alt="College Event Design" className="w-full rounded-xl border border-slate-800 hover:border-purple-500 shadow-lg" />
                </div>
              ))}
              {collegeList.length === 0 && <p className="text-slate-500">No images found in src/assets/college-designs</p>}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default GalleryPage;