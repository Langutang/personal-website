(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [906],
  {
    7556: function(e, n, s) {
      'use strict';
      s.r(n);
      var l = s(7294),
        r = s(8039),
        t = s(1754),
        i = s(158),
        c = s(6017),
        u = s(1166),
        x = s(8136),
        a = s(3201),
        d = s(5893);
      n.default = function() {
        var e = (0, l.useContext)(x.VU);
        return (0, d.jsxs)(r.Z, {
          title: 'Lens',
          children: [
            (0, d.jsx)(a.PageSection, {
              children: (0, d.jsxs)(r.F, {
                children: [
                  (0, d.jsx)('h1', {
                    className: 'intro__text',
                    children: 'Lens.',
                  }),
                  ' ',
                  (0, d.jsx)('br', {}),
                  (0, d.jsxs)(i.Z, {
                    children: [
                      (0, d.jsx)(i.l, {
                        label: 'All',
                        children: (0, d.jsx)(c.Z, {
                          children: e.map(function(e, n) {
                            return (0, d.jsx)(u.Z, { item: e }, n);
                          }),
                        }),
                      }),
                      (0, d.jsx)(i.l, {
                        label: 'Ray Ban',
                        children: (0, d.jsx)(c.Z, {
                          children: e.map(function(e, n) {
                            return (
                              e.type.includes('ray-ban') &&
                              (0, d.jsx)(u.Z, { item: e }, n)
                            );
                          }),
                        }),
                      }),
                      (0, d.jsx)(i.l, {
                        label: 'Persol',
                        children: (0, d.jsx)(c.Z, {
                          children: e.map(function(e, n) {
                            return (
                              e.type.includes('persol') &&
                              (0, d.jsx)(u.Z, { item: e }, n)
                            );
                          }),
                        }),
                      }),
                      (0, d.jsx)(i.l, {
                        label: 'EdBlue',
                        children: (0, d.jsx)(c.Z, {
                          children: e.map(function(e, n) {
                            return (
                              e.type.includes('Edblue') &&
                              (0, d.jsx)(u.Z, { item: e }, n)
                            );
                          }),
                        }),
                      }),
                      (0, d.jsx)(i.l, {
                        label: 'Sight Relax',
                        children: (0, d.jsx)(c.Z, {
                          children: e.map(function(e, n) {
                            return (
                              e.type.includes('sight-relax') &&
                              (0, d.jsx)(u.Z, { item: e }, n)
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, d.jsxs)(r.F, {
              children: [
                (0, d.jsx)(t.Z, {
                  goto: '/projects',
                  className: 'mt-3 mb-5',
                  children: 'Lets Go To My Projects.',
                }),
                (0, d.jsx)('br', {}),
              ],
            }),
          ],
        });
      };
    },
    1974: function(e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/lens',
        function() {
          return s(7556);
        },
      ]);
    },
  },
  function(e) {
    e.O(0, [148, 51, 675, 989, 201, 774, 888, 179], function() {
      return e((e.s = 1974));
    }),
      (_N_E = e.O());
  },
]);
