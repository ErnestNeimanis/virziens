export function useInView(
  element: HTMLElement,
  callback: CallableFunction,
  threshold?: number
) {
  const defaultThreshold = threshold ?? 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= defaultThreshold
        ) {
          callback();
        }
      });
    },
    { threshold: defaultThreshold }
  );

  observer.observe(element);
}

export function useNotInView(
  element: HTMLElement,
  callback: CallableFunction,
  threshold?: number
) {
  const defaultThreshold = threshold ?? 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          !entry.isIntersecting 
         
        ) {
          callback();
        }
      });
    },
    { threshold: defaultThreshold }
  );

  observer.observe(element);
}