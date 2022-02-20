import useReadFileAsJSON from 'hooks/useReadFileAsJSON';
import React, { useCallback, useState } from 'react';

const UploadForm = () => {
  const [json, setJson] = useState<object | null>();

  const [file, setFile] = useState<File>();

  useReadFileAsJSON(file, {
    onLoad: setJson,
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (!file) {
        return;
      }

      setFile(file);
    },
    []
  );

  return (
    <form className="flex flex-col" id="upload">
      <label htmlFor="file">업로드할 파일</label>
      <input type="file" accept=".json" onChange={handleChange} />
    </form>
  );
};

export default UploadForm;
