'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion';

const SocialButton = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
        rotate: [0, 10, -10, 5, -5, 0],
        transition: { duration: 0.5 },
      });
    }
  }, [isHovered, controls]);

  return (
    <motion.a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out z-10'
      aria-label={label}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={controls}
    >
      {icon}
    </motion.a>
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rotateX = useTransform(cursorY, [0, 300], [15, -15]);
  const rotateY = useTransform(cursorX, [0, 300], [-15, 15]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY]);

  return (
    <section className='relative w-full overflow-hidden min-h-screen'>
      <div className='max-w-6xl mx-auto px-4 py-16 md:py-32 flex flex-col-reverse md:flex-row items-center justify-between'>
        <motion.div
          className='w-full md:w-1/2 space-y-6 text-center md:text-left z-20'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className='text-4xl md:text-6xl font-bold text-primary drop-shadow-lg'
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
              type: 'spring',
              stiffness: 200,
            }}
          >
            Hi, I'm William Ngo
          </motion.h1>
          <motion.p
            className='text-xl md:text-2xl text-primary-foreground mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Computer Science Graduate & Aspiring Software Engineer
          </motion.p>
          <motion.div
            className='flex justify-center md:justify-start space-x-6'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 2,
              type: 'spring',
              stiffness: 200,
            }}
          >
            <SocialButton
              href='https://www.linkedin.com/in/william-ngo-byte/'
              icon={<Linkedin size={24} />}
              label='LinkedIn'
            />
            <SocialButton
              href='https://github.com/WillN-byte'
              icon={<Github size={24} />}
              label='GitHub'
            />
            {/* <SocialButton
              href='mailto:your.email@example.com'
              icon={<Mail size={24} />}
              label='Email'
            /> */}
          </motion.div>
        </motion.div>
        <motion.div
          className='w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden mb-8 md:mb-0 z-20'
          style={{ rotateX, rotateY, perspective: 1000 }}
        >
          <motion.div
            className='w-full h-full'
            animate={{
              scale: [1, 1.2, 1, 1.2, 1],
              rotate: [0, 360],
              borderRadius: ['50%', '25%', '50%', '25%', '50%'],
            }}
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <Image
              src='/placeholder.svg'
              alt='William Ngo'
              layout='fill'
              objectFit='cover'
              className='rounded-full'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
