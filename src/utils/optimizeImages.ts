import { useEffect, useRef, useState } from 'react';

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Optimized image component with blur-up loading
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 800,
  quality = 80
}: {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  quality?: number;
}) => {
  const [imageRef, isVisible] = useIntersectionObserver();
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate optimized image URL
  const optimizedSrc = `${src}?auto=format&fit=crop&w=${width}&q=${quality}`;
  
  // Generate tiny placeholder
  const placeholderSrc = `${src}?auto=format&w=20&blur=15`;

  useEffect(() => {
    if (isVisible && !isLoaded) {
      preloadImage(optimizedSrc).then(() => setIsLoaded(true));
    }
  }, [isVisible, optimizedSrc, isLoaded]);

  return (
    <div 
      ref={imageRef as any}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Blurred placeholder */}
      <img
        src={placeholderSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(10px)' }}
      />
      
      {/* Main image */}
      {isVisible && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`relative w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};
