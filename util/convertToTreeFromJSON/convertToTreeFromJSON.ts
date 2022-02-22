import createTreeFromJSON from '.';

describe('parser', () => {
  it('should parse JSON to tree', () => {
    const JSONData = {
      'textD.json': {
        name: 'Leanne Graham',
        company: { name: 'Romaguera-Crona' },
        address: {
          street: 'Kulas Light',
          geo: { lat: '-37.3159', abc: { exmaple1: '81.1496' } },
        },
      },
    };

    expect(JSON.stringify(createTreeFromJSON(JSONData))).toBe(
      JSON.stringify({
        name: 'textD.json',
        value: null,
        branches: [
          {
            name: 'name',
            value: 'Leanne Graham',
            branches: null,
          },
          {
            name: 'company',
            value: null,
            branches: [
              {
                name: 'name',
                value: 'Romaguera-Crona',
                branches: null,
              },
            ],
          },
          {
            name: 'address',
            value: null,
            branches: [
              {
                name: 'street',
                value: 'Kulas Light',
                branches: null,
              },
              {
                name: 'geo',
                value: null,
                branches: [
                  {
                    name: 'lat',
                    value: '-37.3159',
                    branches: null,
                  },
                  {
                    name: 'abc',
                    value: null,
                    branches: [
                      {
                        name: 'exmaple1',
                        value: '81.1496',
                        branches: null,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      })
    );
  });
});

export {};
