import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './Card';
import { Button } from './Button';
import { X } from 'lucide-react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

interface ZoomedTimelineItemProps {
  data: {
    title: string;
    company: string;
    period: string;
    location: string;
    image: string;
    accomplishments: string[];
  };
  onClose: () => void;
}

const ZoomedTimelineItem: React.FC<ZoomedTimelineItemProps> = ({
  data,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
    >
      <Card className='w-full max-w-4xl max-h-[90vh] overflow-y-auto'>
        <CardHeader className='relative'>
          <CardTitle className='text-3xl'>{data.title}</CardTitle>
          <Button
            variant='ghost'
            size='icon'
            className='absolute right-4 top-4'
            onClick={onClose}
          >
            <X className='h-6 w-6' />
          </Button>
        </CardHeader>
        <CardContent>
          <div className='mb-6 relative w-full h-64 md:h-96'>
            <Image
              src={data.image || '/placeholder.svg'}
              alt={data.title}
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-md'
            />
          </div>
          <h3 className='text-2xl font-bold mb-2'>{data.company}</h3>
          <div className='flex items-center text-lg text-muted-foreground mb-2'>
            <FaCalendarAlt className='mr-2' />
            <span>{data.period}</span>
          </div>
          <div className='flex items-center text-lg text-muted-foreground mb-4'>
            <FaMapMarkerAlt className='mr-2' />
            <span>{data.location}</span>
          </div>
          <h4 className='text-xl font-semibold mb-4'>Key Accomplishments:</h4>
          <ul className='list-disc list-inside space-y-3'>
            {data.accomplishments.map((accomplishment, index) => (
              <li key={index} className='text-lg'>
                {accomplishment}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ZoomedTimelineItem;
