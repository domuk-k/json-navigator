import { useCallback, useEffect, useState } from 'react';

type LoadedJSONType = object | null;

interface FileReaderEffects {
  onLoad?: (data: LoadedJSONType) => void;
  onError?: (error: unknown) => void;
}

const useReadFileAsJSON = (file?: File, effects?: FileReaderEffects) => {
  const [loadedJSON, setLoadedJSON] = useState<LoadedJSONType>({});
  const [isLoading, setIsLoading] = useState(false);
  // FIXME: 이 기능의 도메인 모델에서 정의하는 Error 타입 지정 필요합니다. 관계된 동료와 논의하세요
  const [error, setError] = useState<unknown>();

  const readAsJSON = useCallback(() => {
    return new Promise<LoadedJSONType>((resolve, reject) => {
      if (!file) {
        resolve(null);
      }

      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        const fileAsText = event.target?.result as string;

        try {
          const parsedJSONData = JSON.parse(fileAsText);

          resolve(parsedJSONData);
        } catch (error) {
          if (error instanceof SyntaxError) {
            reject(
              new Error(
                'JSON 형식에 맞지 않는 문자열을 포함한 파일입니다. 내용을 확인해주세요.'
              )
            );
          }
        }
      };

      fileReader.onloadstart = () => setIsLoading(true);

      fileReader.onerror = (error) => setError(error);

      fileReader.readAsText(file as Blob, 'utf-8');
    });
  }, [file]);

  const handleEffect = useCallback(async () => {
    try {
      const data = await readAsJSON();

      setLoadedJSON(data);
      setIsLoading(false);
      setError(null);

      effects?.onLoad?.(data);
    } catch (error) {
      setLoadedJSON(null);
      setError(error);
      setIsLoading(false);

      // TODO: 에러를 위한 UI, 부수효과 구현
      alert(error);

      effects?.onError?.(error);
    }
  }, [effects, readAsJSON]);

  useEffect(() => {
    handleEffect();
  }, [handleEffect]);

  return {
    error,
    isLoading,
    data: loadedJSON,
  };
};

export default useReadFileAsJSON;
