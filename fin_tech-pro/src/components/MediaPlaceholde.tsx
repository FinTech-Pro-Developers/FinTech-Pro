import React from 'react';
import Image from 'next/image';
import { FiImage, FiVideo } from 'react-icons/fi';

interface MediaPlaceholderProps {
  src?: string;
  alt?: string;
  type?: 'image' | 'video';
  width?: number;
  height?: number;
}

const MediaPlaceholder = ({ src, alt, type = 'image', width = 400, height = 300 }: MediaPlaceholderProps) => {
  return (
    <div 
      className={`
        flex items-center justify-center 
        bg-gray-100 rounded-lg overflow-hidden
        relative
      `}
      style={{ width, height }}
    >
      {src ? (
        type === 'image' ? (
          <Image 
            src={src} 
            alt={alt || 'Media content'} 
            width={width}
            height={height}
            className="object-cover w-full h-full"
          />
        ) : (
          <video 
            src={src} 
            controls 
            width={width}
            height={height}
            className="object-cover w-full h-full"
          />
        )
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-500">
          {type === 'image' ? (
            <FiImage size={48} className="opacity-50 mb-3" />
          ) : (
            <FiVideo size={48} className="opacity-50 mb-3" />
          )}
          <span className="text-sm font-medium">
            {type === 'image' ? 'No image available' : 'No video available'}
          </span>
        </div>
      )}
    </div>
  );
};

export default MediaPlaceholder;