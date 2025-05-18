export const getOrientationClasses = (orientation) => {
  switch (orientation) {
    case "top":
      return {
        container:
          "flex flex-row items-center w-full absolute top-16 left-0 px-8",
        scrollWrapper: "flex gap-4 overflow-x-auto scrollbar-hide w-full",
        item: "flex-shrink-0 basis-1/7",
      };
    case "bottom":
      return {
        container:
          "flex flex-row items-center w-full absolute bottom-16 left-0 px-8",
        scrollWrapper: "flex gap-4 overflow-x-auto scrollbar-hide w-full",
        item: "flex-shrink-0 basis-1/7",
      };
    case "left":
      return {
        container:
          "flex flex-col items-center h-full absolute left-15 top-0 py-8",
        scrollWrapper:
          "flex flex-col gap-4 overflow-y-auto scrollbar-hide h-full",
        item: "flex-shrink-0 w-[250px]",
      };
    case "right":
      return {
        container:
          "flex flex-col items-center h-full absolute right-10 top-0 py-8",
        scrollWrapper:
          "flex flex-col gap-4 overflow-y-auto scrollbar-hide h-full",
        item: "flex-shrink-0 w-[250px]",
      };
    default:
      return {
        container: "",
        scrollWrapper: "",
        item: "",
      };
  }
};
