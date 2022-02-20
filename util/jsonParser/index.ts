import isValidJsonKey from '../isValidJsonKey';

type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue };

interface JSONObject {
  [k: string]: JSONValue;
}

function jsonParser(jsonRaw: unknown): unknown {
  if (!isValidJsonKey(jsonRaw)) {
    throw new Error('keys are broken');
  }

  if (!jsonRaw || typeof jsonRaw !== 'object') return jsonRaw;

  return Object.entries(jsonRaw).reduce<JSONObject>((result, [key, value]) => {
    const [firstKey, ...rest] = key.split('.');

    const restKey = rest.join('.');

    const isNestedValue = value !== null && typeof value === 'object';

    // 마침표 dot이 없는 키에 대해서는 key:value로 프로퍼티 등록
    if (!rest.length) {
      return {
        ...result,
        [firstKey]: isNestedValue ? jsonParser(value) : value,
      };
    }

    /**
     * 마침표 dot이 있는 키에 대해서는 dot 기준으로 나눠
     * firstKey: (나머지 key:value에 대한 재귀호출 반환값)으로 프로퍼티 등록
     */
    return {
      ...result,
      [firstKey]: jsonParser(
        Object.assign(result[firstKey] ?? {}, {
          [restKey]: value,
        })
      ),
    };
  }, {});
}

export default jsonParser;
