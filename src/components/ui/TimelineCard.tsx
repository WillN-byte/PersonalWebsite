import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './Card';
import { Button } from './Button';
import { ZoomIn } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  image?: string;
  accomplishments: string[];
  onZoom: () => void;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  company,
  period,
  location,
  image,
  accomplishments,
  onZoom,
}) => {
  return (
    <Card className='w-full overflow-hidden relative z-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden'>
          <Image
            src={image || '/placeholder.svg'}
            alt={title}
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
        <CardContent className='w-full md:w-1/2 p-6 flex flex-col justify-between'>
          <div>
            <h3 className='text-2xl font-bold mb-2'>{title}</h3>
            <p className='text-xl text-primary mb-2'>{company}</p>
            <p className='text-lg text-muted-foreground mb-1'>{period}</p>
            <p className='text-lg text-muted-foreground mb-4'>{location}</p>
            <ul className='list-disc list-inside space-y-2'>
              {accomplishments.slice(0, 2).map((accomplishment, index) => (
                <li key={index} className='text-base'>
                  {accomplishment}
                </li>
              ))}
            </ul>
          </div>
          <Button variant='outline' size='lg' className='mt-4' onClick={onZoom}>
            <ZoomIn className='mr-2 h-5 w-5' />
            View Details
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default TimelineCard;
