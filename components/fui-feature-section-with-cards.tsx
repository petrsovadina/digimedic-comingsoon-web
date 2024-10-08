'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-powder-blue flex items-center justify-center">
    {children}
  </div>
);

const FeatureCard = ({ title, content, icon }: { title: string; content: string; icon: React.ReactNode }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    <div className="flex items-center mb-4">
      <IconWrapper>{icon}</IconWrapper>
      <h3 className="text-xl font-space font-bold text-blumine ml-4">{title}</h3>
    </div>
    <p className="text-gray-600 font-raleway">{content}</p>
  </motion.div>
);

const Modal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg w-full h-full max-w-2xl max-h-[90vh] m-4 flex flex-col" // Změněno z max-w-4xl na max-w-2xl
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-blumine">Domluvte si konzultaci</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-grow overflow-hidden">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CTAButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <motion.button 
    className="bg-blumine text-white font-bold py-3 px-6 rounded-lg hover:bg-blumine/90 transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

export default function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState('mise');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://opnform.com/widgets/iframe.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const features = [
    {
      title: "Efektivní digitalizace",
      content: "Snižujeme administrativní zátěž a optimalizujeme procesy ve zdravotnictví.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1B4D6A" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    },
    {
      title: "Bezpečnost dat",
      content: "Garantujeme nejvyšší standardy ochrany citlivých zdravotnických informací.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1B4D6A" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    },
    {
      title: "Inovativní řešení",
      content: "Přinášíme nejmodernější technologie pro zlepšení kvality zdravotní péče.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1B4D6A" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    }
  ];

  return (
    <section className="bg-polar py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-space font-bold text-blumine mb-4">
            Transformujeme zdravotnictví digitálními inovacemi
          </h2>
          <p className="text-xl text-astral font-raleway max-w-3xl mx-auto">
            DigiMedic přináší revoluční řešení, která zlepšují kvalitu péče, usnadňují práci zdravotníkům a přinášejí pozitivní změny do života pacientů.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <motion.button 
            className={`px-8 py-3 font-space font-bold text-lg ${activeTab === 'mise' ? 'bg-blumine text-white' : 'bg-white text-blumine'} rounded-l-lg shadow-md transition-colors duration-300`}
            onClick={() => setActiveTab('mise')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Naše mise
          </motion.button>
          <motion.button 
            className={`px-8 py-3 font-space font-bold text-lg ${activeTab === 'vize' ? 'bg-blumine text-white' : 'bg-white text-blumine'} rounded-r-lg shadow-md transition-colors duration-300`}
            onClick={() => setActiveTab('vize')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Naše vize
          </motion.button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          {activeTab === 'mise' ? (
            <p className="text-gray-700 font-raleway text-lg">
              Naším posláním je vytvářet inovativní digitální řešení, která zefektivňují procesy ve zdravotnictví, snižují administrativní zátěž a umožňují zdravotníkům věnovat více času péči o pacienty. Spojujeme nejmodernější technologie s hlubokou znalostí zdravotnického prostředí.
            </p>
          ) : (
            <p className="text-gray-700 font-raleway text-lg">
              Naší vizí je zdravotnictví, kde každý pacient má přístup k personalizované a preventivní péči, kde data pomáhají včas předcházet nemocem a kde špičková zdravotní péče je dostupná všem bez ohledu na to, kde žijí. Usilujeme o propojení všech účastníků zdravotní péče a vytvoření efektivního ekosystému.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="bg-blumine/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-space font-bold text-blumine mb-4">
            Připraveni na digitální transformaci?
          </h3>
          <p className="text-gray-700 font-raleway mb-6 max-w-2xl mx-auto">
            Zjistěte, jak DigiMedic může pomoci vaší organizaci zefektivnit procesy, zlepšit péči o pacienty a připravit se na budoucnost zdravotnictví. Nabízíme osobní konzultace šité na míru vašim potřebám.
          </p>
          <CTAButton onClick={() => setIsModalOpen(true)}>
            Domluvte si bezplatnou konzultaci
          </CTAButton>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <iframe 
          ref={iframeRef}
          style={{border:'none', width:'100%', height:'100%'}} 
          id="pripraveni-na-digitalni-transformaci-qeze1m" 
          src="https://opnform.com/forms/pripraveni-na-digitalni-transformaci-qeze1m"
        />
      </Modal>
    </section>
  );
}