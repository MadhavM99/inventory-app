export const scrollToLeft = (ref) => {
  if (ref?.current) {
    const { scrollLeft, clientWidth } = ref.current;
    ref.current.scrollTo({
      left: scrollLeft - clientWidth,
      behavior: "smooth",
    });
  }
};

export const scrollToRight = (ref) => {
  if (ref?.current) {
    const { scrollLeft, clientWidth } = ref.current;
    ref.current.scrollTo({
      left: scrollLeft + clientWidth,
      behavior: "smooth",
    });
  }
};
