const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export const dataURLToFile = (dataURL, fileName) => {
  const array = dataURL.split(',');
  const mime = array[0].match(/:(.*?);/)[1];
  const byteString = atob(array[1]);
  let n = byteString.length;
  const uint8Array = new Uint8Array(n);

  while (n--) {
    uint8Array[n] = byteString.charCodeAt(n);
  }

  return new File([uint8Array], fileName, { type: mime });
};

export default fileToBase64;