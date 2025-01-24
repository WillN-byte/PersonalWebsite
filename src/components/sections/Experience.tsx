'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineCard from '@/components/ui/TimelineCard';
import ZoomedTimelineItem from '@/components/ui/ZoomedTimelineItem';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import logo from '@/assets/thesunrisestate_logo.jpg';

const timelineData = [
  {
    title: 'Software Engineer Intern',
    company: 'The Sunrise State',
    period: 'Oct. 2024 – Present',
    location: 'Remote',
    image: '@/assets/thesunrisestate_logo.jpg',
    accomplishments: [
      'Set up scalable, secure cloud infrastructure for content-management system on Microsoft Azure with CI/CD',
      'Implemented automated testing, reducing bug reports by 30%',
    ],
  },
  {
    title: 'Software Developer',
    company: 'PalAte',
    period: 'Sep. 2023 – Present',
    location: 'San Jose, CA',
    image: '/placeholder.svg?height=400&width=600',
    accomplishments: [
      'Engineered a React Native app with 20+ screens and 15+ integrated packages',
      'Implemented advanced bitwise algorithms, reducing runtime by 37%',
      'Orchestrated strategic product launch campaign, targeting 1,000+ potential clients',
    ],
  },
  {
    title: 'Project Developer and Tutor',
    company: 'San Jose State University',
    period: 'Aug. 2022 — Present',
    location: 'San Jose, CA',
    image: '/placeholder.svg?height=400&width=600',
    accomplishments: [
      'Cultivated digital literacy and cybersecurity awareness in 280+ students',
      'Developed comprehensive computer science and information security curriculum',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'IBM',
    period: 'Jun. 2022 – Aug. 2022',
    location: 'San Jose, CA',
    image: '/placeholder.svg?height=400&width=600',
    accomplishments: [
      'Spearheaded implementation of Agile SDLC methodologies, resulting in a 30% faster product launch cycle',
      'Developed JavaScript application to address local homelessness and unemployment',
    ],
  },
  {
    title: 'AI/ML Intern',
    company: 'SJSU Software & Computer Engineering Society',
    period: 'Aug. 2021 – Feb. 2023',
    location: 'San Jose, CA',
    image: '/placeholder.svg?height=400&width=600',
    accomplishments: [
      'Documented classification and clustering algorithms in Python',
      'Built a machine learning model using tokenization and BERT embeddings',
    ],
  },
];

const Experience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(timelineData.length - 1, prevIndex + 1)
    );
  };

  const handleZoom = (index: number) => {
    setZoomedIndex(index);
  };

  const handleCloseZoom = () => {
    setZoomedIndex(null);
  };

  return (
    <section id='experience' className='w-full py-16 relative bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Experience</h2>
        <div className='relative overflow-hidden'>
          <div className='flex items-center justify-center relative mb-8'>
            <Button
              variant='outline'
              size='icon'
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className='mr-4 z-20 opacity-75 hover:opacity-100 transition-opacity'
              aria-label='Previous experience'
            >
              <ChevronLeft className='h-6 w-6' />
            </Button>
            <div className='w-full max-w-4xl relative z-10'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <TimelineCard
                    {...timelineData[currentIndex]}
                    onZoom={() => handleZoom(currentIndex)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <Button
              variant='outline'
              size='icon'
              onClick={handleNext}
              disabled={currentIndex === timelineData.length - 1}
              className='ml-4 z-20 opacity-75 hover:opacity-100 transition-opacity'
              aria-label='Next experience'
            >
              <ChevronRight className='h-6 w-6' />
            </Button>
          </div>
          <div className='flex justify-center mt-6'>
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {zoomedIndex !== null && (
          <ZoomedTimelineItem
            data={timelineData[zoomedIndex]}
            onClose={handleCloseZoom}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
