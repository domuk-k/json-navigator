import jsonParser from '.';

describe('parser', () => {
  it('should parse JSON with dotted key', () => {
    const JSONData = {
      name: '김패파',
      description: '10x dev',
      'geo.latitude': '37.53',
      'geo.longitude': '127.02',
      'example.foo.abc': true,
    };

    expect(JSON.stringify(jsonParser(JSONData))).toBe(
      JSON.stringify({
        name: '김패파',
        description: '10x dev',
        geo: { latitude: '37.53', longitude: '127.02' },
        example: { foo: { abc: true } },
      })
    );
  });
});

export {};
