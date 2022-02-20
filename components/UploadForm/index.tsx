import React, { useCallback, useState, useRef, type FormEvent } from 'react';

import useReadFileAsJSON from 'hooks/useReadFileAsJSON';

const UploadForm = () => {
  const [loadedJSON, setLoadedJSON] = useState<object>();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { readAsJSON, data } = useReadFileAsJSON();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!fileInputRef.current?.files?.[0]) {
        return;
      }

      readAsJSON(fileInputRef.current.files[0], {
        onLoad: (data) => {
          setLoadedJSON(data);
        },
        // FIXME: 적절한 에러 분기 및 UI 표시 - effect 함수전달
        onError: alert,
      });
    },
    [readAsJSON]
  );

  return (
    <form className="flex flex-col" id="upload" onSubmit={handleSubmit}>
      <label htmlFor="file">업로드할 파일</label>
      <input type="file" accept=".json" ref={fileInputRef} />
      <button className="w-20 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
        업로드
      </button>
    </form>
  );
};

export default UploadForm;
