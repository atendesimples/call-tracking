;(() => {
  var e = {
      609: () => {
        self.fetch ||
          (self.fetch = function (e, t) {
            return (
              (t = t || {}),
              new Promise(function (n, r) {
                var o = new XMLHttpRequest(),
                  s = [],
                  i = {},
                  a = function e() {
                    return {
                      ok: 2 == ((o.status / 100) | 0),
                      statusText: o.statusText,
                      status: o.status,
                      url: o.responseURL,
                      text: function () {
                        return Promise.resolve(o.responseText)
                      },
                      json: function () {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([o.response]))
                      },
                      clone: e,
                      headers: {
                        keys: function () {
                          return s
                        },
                        entries: function () {
                          return s.map(function (e) {
                            return [e, o.getResponseHeader(e)]
                          })
                        },
                        get: function (e) {
                          return o.getResponseHeader(e)
                        },
                        has: function (e) {
                          return null != o.getResponseHeader(e)
                        },
                      },
                    }
                  }
                for (var l in (o.open(t.method || 'get', e, !0),
                (o.onload = function () {
                  o
                    .getAllResponseHeaders()
                    .toLowerCase()
                    .replace(/^(.+?):/gm, function (e, t) {
                      i[t] || s.push((i[t] = t))
                    }),
                    n(a())
                }),
                (o.onerror = r),
                (o.withCredentials = 'include' == t.credentials),
                t.headers))
                  o.setRequestHeader(l, t.headers[l])
                o.send(t.body || null)
              })
            )
          })
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var s = (t[r] = { exports: {} })
    return e[r](s, s.exports, n), s.exports
  }
  ;(n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e
    return n.d(t, { a: t }), t
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      'use strict'
      n(609)
      var e,
        t,
        r,
        o = (e, t, n) => {
          if (!t.has(e)) throw TypeError('Cannot ' + n)
        },
        s = (e, t, n) => (o(e, t, 'read from private field'), n ? n.call(e) : t.get(e)),
        i = (e, t, n) => {
          if (t.has(e)) throw TypeError('Cannot add the same private member more than once')
          t instanceof WeakSet ? t.add(e) : t.set(e, n)
        },
        a = (e, t, n, r) => (o(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n)
      ;(e = new WeakMap()), (t = new WeakMap()), (r = new WeakMap())
      const l = {
        CallTracking: class {
          constructor(n) {
            i(this, e, void 0), i(this, t, void 0), i(this, r, void 0), a(this, e, n.token), a(this, t, n.fallback), a(this, r, n.html)
          }
          googleClientId() {
            let e = document.cookie.split(';').find((e) => e.match(/_ga=(.+?)/))
            return e ? e.split('.').slice(-2).join('.') : ''
          }
          run() {
            const n = `https://api.staging.atendesimples.com/call-tracking/check-in/2/${s(this, e)}`,
              o = { method: 'POST', data: JSON.stringify({ cid: this.googleClientId() }), headers: { 'Content-Type': 'application/json' } }
            let i = document.querySelector(s(this, r).selector)
            if (!i) return console.info('[CallTracking] Campo HTML não encontrado'), s(this, t).error
            const a = () =>
              fetch(n, o).then((e) => {
                return (
                  (n = this),
                  null,
                  (r = function* () {
                    const n = yield e.json()
                    return (i.textContent = (null == n ? void 0 : n.number) || s(this, t).error), (null == n ? void 0 : n.number) || s(this, t).error
                  }),
                  new Promise((e, t) => {
                    var o = (e) => {
                        try {
                          i(r.next(e))
                        } catch (e) {
                          t(e)
                        }
                      },
                      s = (e) => {
                        try {
                          i(r.throw(e))
                        } catch (e) {
                          t(e)
                        }
                      },
                      i = (t) => (t.done ? e(t.value) : Promise.resolve(t.value).then(o, s))
                    i((r = r.apply(n, null)).next())
                  })
                )
                var n, r
              })
            'load' == s(this, r).event ? a() : 'click' == s(this, r).event && i.addEventListener('click', a)
          }
        },
      }
      window.AtendeSimples = l
    })()
})()
//# sourceMappingURL=ct.js.map?2344ca0a628f69115a62
