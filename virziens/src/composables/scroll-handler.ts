export function useScrollHandler() {
  let scrollTimeout: ReturnType<typeof setTimeout>;
  let scrollStarted = false;
  let listener: EventListenerOrEventListenerObject | null = null;

  const handleScroll = (options?: {
    onStart?: CallableFunction;
    onStop?: CallableFunction;
    delay?: number;
  }) => {
    if (!options) return;
    const { onStart, onStop, delay } = options;

    if (scrollStarted) {
      clearTimeout(scrollTimeout);
    } else if (onStart) {
      onStart();
      scrollStarted = true;
    }

    const d = delay ?? 1;

    scrollTimeout = setTimeout(() => {
      scrollStarted = false;
      if (onStop) onStop();
    }, d);
  };

  const create = (options?: {
    onStart?: CallableFunction;
    onStop?: CallableFunction;
    delay?: number;
  }) => {
    listener = () => handleScroll(options);
    window.addEventListener("scroll", listener);
  };

  const remove = () => {
    if (listener) {
      window.removeEventListener("scroll", listener);
      listener = null;
    }
  };

  return {
    handleScroll,
    create,
    remove,
  };
}
