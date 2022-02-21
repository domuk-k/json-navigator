import Link from 'next/link';
import { ReactNode } from 'react';

import isObject from 'util/isObject';

type ContentType = JSONKeyMeta[] | JSONValueMeta;

interface DirectoriesProps {
  value: JSONObject;
  path: string[];
}

function Directories({ value, path }: DirectoriesProps) {
  const accessResult = path.reduce<string | Record<string, any>>(
    (result, p) => (isObject(result) ? result[p] : result),
    value
  );

  const content: ContentType = isObject(accessResult)
    ? Object.keys(accessResult).map((key) => ({
        path: [...path, key],
        value: key,
      }))
    : { path: null, value: JSON.stringify(accessResult) };

  return (
    <div className="px-4">
      {Array.isArray(content) ? (
        <ul className="flex flex-col">
          {content.map((keyData) => (
            <JSONKey
              key={`${path.join('.')}.${keyData.value}`}
              path={keyData.path}
              value={keyData.value}
            />
          ))}
        </ul>
      ) : (
        <JSONValue value={content.value} />
      )}
    </div>
  );
}

type JSONKeyMeta = {
  path: string[];
  value: string;
};

const JSONKey = ({ path, value }: { path: string[]; value: string }) => (
  <StyledEntity>
    <Link href={`/${path.join('/')}`} passHref>
      <a>{value}</a>
    </Link>
  </StyledEntity>
);

type JSONValueMeta = {
  path: null;
  value: string;
};

const JSONValue = ({ value }: { value: ReactNode }) => (
  <StyledEntity>{value}</StyledEntity>
);

const StyledEntity = ({ children }: { children: ReactNode }) => (
  <div className="text-2xl mt-1 px-3 py-1.5 hover:text-slate-200 text-slate-400 hover:bg-slate-800 rounded-xl">
    {children}
  </div>
);

export default Directories;
