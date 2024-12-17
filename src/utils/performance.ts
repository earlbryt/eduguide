// Performance optimization utilities

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// RAF (Request Animation Frame) throttle for smooth animations
export const rafThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let ticking = false;
  let lastArgs: Parameters<T> | null = null;

  return (...args: Parameters<T>) => {
    lastArgs = args;

    if (!ticking) {
      requestAnimationFrame(() => {
        if (lastArgs) func(...lastArgs);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Batch DOM updates for better performance
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    const fragment = document.createDocumentFragment();
    updates.forEach(update => update());
    document.body.appendChild(fragment);
  });
};

// Memoize expensive calculations
export const memoize = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache = new Map();

  return (...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};

// Detect high-performance mode
export const isHighPerformanceDevice = () => {
  return (
    !matchMedia('(prefers-reduced-motion: reduce)').matches &&
    navigator.hardwareConcurrency > 4 &&
    !navigator.connection?.saveData
  );
};

// Enable hardware acceleration for an element
export const enableHardwareAcceleration = (element: HTMLElement) => {
  element.style.transform = 'translateZ(0)';
  element.style.backfaceVisibility = 'hidden';
  element.style.perspective = '1000px';
};
