import React, { useCallback, useState, useRef, type FormEvent } from 'react';

const UploadForm = () => {
  const [json, setJson] = useState<object>();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    if (!fileInputRef) return;

    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      const fileAsText = event.target?.result as string;

      const parsedJSONData = JSON.parse(fileAsText);

      setJson(parsedJSONData);
    };

    if (!fileInputRef.current?.files?.[0]) {
      return;
    }

    fileReader.readAsText(fileInputRef.current.files[0]);
  }, []);

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
