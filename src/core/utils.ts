export const isVideoFile = (fileName: string) => {
  return /\.(mp4|mov|avi|wmv|flv|mkv|webm|m4v|3gp)$/i.test(fileName);
};
