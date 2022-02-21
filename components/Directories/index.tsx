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
    <div>
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
  <Link href={`/${path.join('/')}`} passHref>
    <a>{value}</a>
  </Link>
);

type JSONValueMeta = {
  path: null;
  value: string;
};

const JSONValue = ({ value }: { value: ReactNode }) => <div>{value}</div>;

export default Directories;
