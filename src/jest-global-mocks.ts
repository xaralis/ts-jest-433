const mock = () => {
    let storage: any = {};
    return {
        getItem: (key: any) => key in storage ? storage[key] : null,
        setItem: (key: any, value: any) => storage[key] = value || '',
        removeItem: (key: any) => delete storage[key],
        clear: () => storage = {},
    };
};

Object.defineProperty(window, 'localStorage', { value: mock() });
Object.defineProperty(window, 'sessionStorage', { value: mock() });
Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance']
});

Object.defineProperty(window, 'matchMedia', { value: () => (
    {
      matches : false,
      addListener: () => { },
      removeListener: () => { },
    }
) });

Object.defineProperty(document.body.style, 'transform', {
    value: () =>
      ({
        enumerable: true,
        configurable: true,
      }),
  });


//   Object.defineProperty(document.location, 'href', {
//     value: () => '/',
//   });
