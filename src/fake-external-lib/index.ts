/**
 * A fake auth token hook.
 */
export const useAuthToken = () => {
  return "123";
};

/**
 * A fake video fetcher.
 */
export const fetchVideo = (src: string) => {
  return fetch(src).then((response) => response.blob());
};

/**
 * A fake video appender.
 */
export const appendVideoToDomAndPlay = (blob: Blob) => {
  const video = document.createElement("video");
  video.src = URL.createObjectURL(blob);
  video.play();
};

/**
 * A fake router interface
 */
export interface Router {
  push: (path: string) => void;
}

/**
 * A fake useRouter hook
 */
export const useRouter = () => {
  return {
    push: (path: string) => {
      console.log(`Navigating to ${path}`);
    },
  };
};
