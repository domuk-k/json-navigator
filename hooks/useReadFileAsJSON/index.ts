import { useState } from 'react';

interface FileReaderEffects {
  onLoad: (data: object) => void;
  onError: (error: unknown) => void;
}

const useReadFileAsJSON = () => {
  const [parsedFile, setParsedFile] = useState<object>({});

  const fileReader = new FileReader();

  fileReader.onload = (event) => {
    const fileAsText = event.target?.result as string;

    const parsedJSONData = JSON.parse(fileAsText);

    setParsedFile(parsedJSONData);
  };

  function readAsJSON(blob: Blob, effects?: FileReaderEffects) {
    if (effects) {
      fileReader.addEventListener('load', () => effects?.onLoad(parsedFile));
      fileReader.addEventListener('error', (error) => effects?.onError(error));
    }

    fileReader.readAsText(blob, 'utf-8');
  }

  return {
    data: parsedFile,
    readAsJSON,
  };
};

export default useReadFileAsJSON;
