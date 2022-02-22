type JSONValue = string | number | boolean | null | JSONValue[] | JSONObject;

interface JSONObject {
  [k: string]: JSONValue;
}

interface Branch {
  name: string | null;
  value: string | number | boolean | null;
  branches: Branch[] | null;
}
