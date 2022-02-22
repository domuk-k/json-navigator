import isObject from '../isObject';

function convertToTreeFromJSON(json: JSONObject): Branch {
  const doesRootHasSingleKey = Object.keys(json).length !== 1;

  if (doesRootHasSingleKey) {
    return {
      name: null,
      value: null,
      branches: isObject(json)
        ? Object.entries(json).map(([key, root]) =>
            convertToTreeFromJSON({ [key]: root })
          )
        : null,
    };
  }

  const [[key, value]] = Object.entries(json);

  return {
    name: key,
    value: isObject(value) ? null : value,
    branches: isObject(value)
      ? Object.entries(value).map(([key, value]) =>
          convertToTreeFromJSON({ [key]: value })
        )
      : null,
  };
}

export default convertToTreeFromJSON;
