type JSONValue = string | number | boolean | null | JSONValue[] | JSONObject;

interface JSONObject {
  [k: string]: JSONValue;
}
