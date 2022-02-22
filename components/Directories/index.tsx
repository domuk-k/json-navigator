import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import isObject from 'util/isObject';

type ContentType = JSONKeyMeta[] | JSONValueMeta;

interface DirectoriesProps {
  name: string;
  value: JSONObject;
  path: string[];
}

function Directories({ name, value, path }: DirectoriesProps) {
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
    <div className="px-4 min-w-[200px]">
      {Array.isArray(content) ? (
        <ul className="flex flex-col">
          {content.map((keyData) => (
            <JSONKey
              selected={name === keyData.value}
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

const JSONKey = ({
  path,
  value,
  selected,
}: {
  path: string[];
  value: string;
  selected: boolean;
}) => {
  return (
    <StyledEntity selected={selected}>
      <Link href={`/${path.join('/')}`} passHref>
        <a className="focus w-full block">{value}</a>
      </Link>
    </StyledEntity>
  );
};

type JSONValueMeta = {
  path: null;
  value: string;
};

const JSONValue = ({ value }: { value: ReactNode }) => (
  <StyledEntity>{value}</StyledEntity>
);

const StyledEntity = ({
  children,
  selected,
}: {
  children: ReactNode;
  selected?: boolean;
}) => (
  <div
    className="text-2xl mt-1 px-3 py-1.5 hover:text-slate-200 text-slate-400 hover:bg-slate-800 rounded-xl"
    style={{
      color: selected ? '#38bdf8' : undefined,
      fontWeight: selected ? '500' : undefined,
    }}
  >
    {children}
  </div>
);

export default Directories;
