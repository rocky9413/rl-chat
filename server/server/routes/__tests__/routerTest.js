import router from '../router';

describe('api router', () => {
  test('has routes', () => {
    const routes = [
      { path: '/getOne', method: 'post' },
      { path: '/getAll', method: 'get' },
    ];

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods[route.method]
      );
      expect(match).toBeTruthy();
    });
  });
});
