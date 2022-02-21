const isObject = (o: any): o is Record<string, any> =>
  typeof o === 'object' && o !== null;

export default isObject;
