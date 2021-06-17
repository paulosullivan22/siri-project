/*! For license information please see component---src-pages-index-tsx-2bbb67ded92fe60ae205.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    NLiy: function (e, t, n) {
      e.exports = { container: 'index-module--container--2IQ43' }
    },
    QeBL: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('o0o1'),
        r = n.n(i)
      n('ls82')
      function a(e, t, n, i, r, a, o) {
        try {
          var s = e[a](o),
            d = s.value
        } catch (c) {
          return void n(c)
        }
        s.done ? t(d) : Promise.resolve(d).then(i, r)
      }
      var o = n('q1tI'),
        s = n('R6dn'),
        d = n.n(s),
        c = n('TSYQ'),
        u = n.n(c),
        h = n('ANjH'),
        l = n('/MKj'),
        f = n('2tUC'),
        p = {
          addDialogAction: function (e) {
            return { type: f.a, payload: e }
          }
        },
        v = n('todR'),
        m = n.n(v),
        g = function (e) {
          var t,
            n,
            i = e.message,
            r = o.useState,
            a = o.useEffect,
            s = o.useRef,
            d = r(!1),
            c = d[0],
            h = d[1],
            l = s(null),
            f = c ? (null == l || null === (t = l.current) || void 0 === t ? void 0 : t.scrollHeight) + 'px' : '0px'
          return (
            a(function () {
              h(!0)
            }, []),
            o.createElement(
              'div',
              { ref: l, className: u()(m.a.container, ((n = {}), (n[m.a.expanded] = c), n)), style: { maxHeight: f } },
              o.createElement('p', { className: m.a.userPrompt }, i.content)
            )
          )
        },
        w = n('Zhdv'),
        y = n.n(w),
        b = function (e) {
          var t = e.dialog
          return o.createElement(
            'div',
            { className: y.a.container },
            t.map(function (e, t) {
              return o.createElement(
                'div',
                { className: y.a.dialogContainer },
                o.createElement(g, { message: e, key: t })
              )
            })
          )
        },
        A = n('NLiy'),
        x = n.n(A)
      t.default = Object(l.b)(
        function (e) {
          return { dialog: e.dialog }
        },
        function (e) {
          return { actions: Object(h.bindActionCreators)(p, e) }
        }
      )(function (e) {
        var t = e.actions,
          n = e.dialog,
          i = o.useEffect,
          s = o.useState,
          c = t.addDialogAction,
          h = s(!1),
          l = h[0],
          f = h[1],
          p = l ? 'withDiaglog' : 'withoutDialog',
          v = document.getElementsByClassName('record'),
          m = document.getElementsByClassName('stop')
        return (
          i(function () {
            if (navigator.mediaDevices.getUserMedia && navigator.getUserMedia) {
              navigator.getUserMedia(
                { audio: !0 },
                function (e) {
                  var t = new d.a(e)
                  ;(t.audioChannels = 1),
                    (t.mimeType = 'audio/wav'),
                    (v[0].onclick = function () {
                      t.start(1e4)
                    }),
                    (m[0].onclick = function () {
                      t.stop()
                    }),
                    (t.ondataavailable = (function () {
                      var e,
                        t =
                          ((e = r.a.mark(function e(t) {
                            var n, i
                            return r.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      fetch('http://127.0.0.1:5000/audio', { method: 'POST', body: t }).then(function (
                                        e
                                      ) {
                                        return e.json()
                                      })
                                    )
                                  case 2:
                                    ;(n = e.sent), (i = n.content), f(!0), c({ content: i })
                                  case 6:
                                  case 'end':
                                    return e.stop()
                                }
                            }, e)
                          })),
                          function () {
                            var t = this,
                              n = arguments
                            return new Promise(function (i, r) {
                              var o = e.apply(t, n)
                              function s(e) {
                                a(o, i, r, s, d, 'next', e)
                              }
                              function d(e) {
                                a(o, i, r, s, d, 'throw', e)
                              }
                              s(void 0)
                            })
                          })
                      return function (e) {
                        return t.apply(this, arguments)
                      }
                    })())
                },
                function (e) {
                  console.error('media error', e)
                }
              )
            }
          }),
          o.createElement(
            'div',
            { className: x.a.container, key: p },
            o.createElement(b, { dialog: n }),
            o.createElement(
              'div',
              null,
              o.createElement('button', { className: u()('record', x.a.test) }, 'Record'),
              o.createElement('button', { className: 'stop' }, 'Stop')
            )
          )
        )
      })
    },
    R6dn: function (e, t, n) {
      ;(function (n) {
        var i
        function r(e) {
          if (!e) throw 'MediaStream is mandatory.'
          var t
          ;(this.start = function (n) {
            var i
            'undefined' != typeof MediaRecorder
              ? (i = g)
              : (h || u || c) &&
                (-1 !== this.mimeType.indexOf('video') ? (i = b) : -1 !== this.mimeType.indexOf('audio') && (i = w)),
              'image/gif' === this.mimeType && (i = x),
              ('audio/wav' !== this.mimeType && 'audio/pcm' !== this.mimeType) || (i = w),
              this.recorderType && (i = this.recorderType),
              ((t = new i(e)).blobs = [])
            var r = this
            ;(t.ondataavailable = function (e) {
              t.blobs.push(e), r.ondataavailable(e)
            }),
              (t.onstop = this.onstop),
              (t.onStartedDrawingNonBlankFrames = this.onStartedDrawingNonBlankFrames),
              (t = (function (e, t) {
                for (var n in t) 'function' != typeof t[n] && (e[n] = t[n])
                return e
              })(t, this)).start(n)
          }),
            (this.onStartedDrawingNonBlankFrames = function () {}),
            (this.clearOldRecordedFrames = function () {
              t && t.clearOldRecordedFrames()
            }),
            (this.stop = function () {
              t && t.stop()
            }),
            (this.ondataavailable = function (e) {
              console.log('ondataavailable..', e)
            }),
            (this.onstop = function (e) {
              console.warn('stopped..', e)
            }),
            (this.save = function (e, n) {
              if (e) f(e, n)
              else {
                if (!t) return
                ConcatenateBlobs(t.blobs, t.blobs[0].type, function (e) {
                  f(e)
                })
              }
            }),
            (this.pause = function () {
              t && (t.pause(), console.log('Paused recording.', this.mimeType || t.mimeType))
            }),
            (this.resume = function () {
              t && (t.resume(), console.log('Resumed recording.', this.mimeType || t.mimeType))
            }),
            (this.recorderType = null),
            (this.mimeType = 'video/webm'),
            (this.disableLogs = !1)
        }
        void 0 !== r &&
          (r.MultiStreamRecorder = function (e) {
            if (!e) throw 'MediaStream is mandatory.'
            var t,
              n,
              i = this,
              a = m()
            ;(this.stream = e),
              (this.start = function (d) {
                for (var c in ((t = new r(e)),
                (n = new r(e)),
                (t.mimeType = 'audio/ogg'),
                (n.mimeType = 'video/webm'),
                this))
                  'function' != typeof this[c] && (t[c] = n[c] = this[c])
                function u(e) {
                  s++, i.ondataavailable(e)
                }
                ;(t.ondataavailable = function (e) {
                  o[s] || (o[s] = {}),
                    (o[s].audio = e),
                    o[s].video && !o[s].onDataAvailableEventFired && ((o[s].onDataAvailableEventFired = !0), u(o[s]))
                }),
                  (n.ondataavailable = function (e) {
                    if (a) return i.ondataavailable({ video: e, audio: e })
                    o[s] || (o[s] = {}),
                      (o[s].video = e),
                      o[s].audio && !o[s].onDataAvailableEventFired && ((o[s].onDataAvailableEventFired = !0), u(o[s]))
                  }),
                  (n.onstop = t.onstop =
                    function (e) {
                      i.onstop(e)
                    }),
                  a ||
                    (n.onStartedDrawingNonBlankFrames = function () {
                      n.clearOldRecordedFrames(), t.start(d)
                    }),
                  n.start(d)
              }),
              (this.stop = function () {
                t && t.stop(), n && n.stop()
              }),
              (this.ondataavailable = function (e) {
                console.log('ondataavailable..', e)
              }),
              (this.onstop = function (e) {
                console.warn('stopped..', e)
              }),
              (this.pause = function () {
                t && t.pause(), n && n.pause()
              }),
              (this.resume = function () {
                t && t.resume(), n && n.resume()
              })
            var o = {},
              s = 0
          })
        var a,
          o,
          s = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45'
        ;(a = void 0 !== n ? n : window),
          'undefined' == typeof window &&
            ('undefined' == typeof window &&
              void 0 !== n &&
              ((n.navigator = { userAgent: s, getUserMedia: function () {} }), (a.window = n)),
            'undefined' == typeof document &&
              ((a.document = {}),
              (document.createElement =
                document.captureStream =
                document.mozCaptureStream =
                  function () {
                    return {}
                  })),
            'undefined' == typeof location && (a.location = { protocol: 'file:', href: '', hash: '' }),
            'undefined' == typeof screen && (a.screen = { width: 0, height: 0 })),
          void 0 === (o = window.AudioContext) &&
            ('undefined' != typeof webkitAudioContext && (o = webkitAudioContext),
            'undefined' != typeof mozAudioContext && (o = mozAudioContext)),
          'undefined' == typeof window && (window = {}),
          void 0 === (o = window.AudioContext) &&
            ('undefined' != typeof webkitAudioContext && (o = webkitAudioContext),
            'undefined' != typeof mozAudioContext && (o = mozAudioContext))
        var d = window.URL
        void 0 === d && 'undefined' != typeof webkitURL && (d = webkitURL),
          'undefined' != typeof navigator
            ? (void 0 !== navigator.webkitGetUserMedia && (navigator.getUserMedia = navigator.webkitGetUserMedia),
              void 0 !== navigator.mozGetUserMedia && (navigator.getUserMedia = navigator.mozGetUserMedia))
            : (navigator = { getUserMedia: function () {}, userAgent: s })
        var c = !(-1 === navigator.userAgent.indexOf('Edge') || (!navigator.msSaveBlob && !navigator.msSaveOrOpenBlob)),
          u = !1
        'undefined' != typeof opera && navigator.userAgent && -1 !== navigator.userAgent.indexOf('OPR/') && (u = !0)
        var h = !c && !c && !!navigator.webkitGetUserMedia,
          l = window.MediaStream
        function f(e, t) {
          if (!e) throw 'Blob object is required.'
          if (!e.type)
            try {
              e.type = 'video/webm'
            } catch (s) {}
          var n = (e.type || 'video/webm').split('/')[1]
          if (t && -1 !== t.indexOf('.')) {
            var i = t.split('.')
            ;(t = i[0]), (n = i[1])
          }
          var r = (t || Math.round(9999999999 * Math.random()) + 888888888) + '.' + n
          if (void 0 !== navigator.msSaveOrOpenBlob) return navigator.msSaveOrOpenBlob(e, r)
          if (void 0 !== navigator.msSaveBlob) return navigator.msSaveBlob(e, r)
          var a = document.createElement('a')
          ;(a.href = d.createObjectURL(e)),
            (a.target = '_blank'),
            (a.download = r),
            navigator.mozGetUserMedia &&
              ((a.onclick = function () {
                ;(document.body || document.documentElement).removeChild(a)
              }),
              (document.body || document.documentElement).appendChild(a))
          var o = new MouseEvent('click', { view: window, bubbles: !0, cancelable: !0 })
          a.dispatchEvent(o), navigator.mozGetUserMedia || d.revokeObjectURL(a.href)
        }
        function p(e) {
          if (0 === e) return '0 Bytes'
          var t = parseInt(Math.floor(Math.log(e) / Math.log(1e3)), 10)
          return (e / Math.pow(1e3, t)).toPrecision(3) + ' ' + ['Bytes', 'KB', 'MB', 'GB', 'TB'][t]
        }
        void 0 === l && 'undefined' != typeof webkitMediaStream && (l = webkitMediaStream),
          void 0 !== l &&
            ('getVideoTracks' in l.prototype ||
              ((l.prototype.getVideoTracks = function () {
                if (!this.getTracks) return []
                var e = []
                return (
                  this.getTracks.forEach(function (t) {
                    ;-1 !== t.kind.toString().indexOf('video') && e.push(t)
                  }),
                  e
                )
              }),
              (l.prototype.getAudioTracks = function () {
                if (!this.getTracks) return []
                var e = []
                return (
                  this.getTracks.forEach(function (t) {
                    ;-1 !== t.kind.toString().indexOf('audio') && e.push(t)
                  }),
                  e
                )
              })),
            'stop' in l.prototype ||
              (l.prototype.stop = function () {
                this.getAudioTracks().forEach(function (e) {
                  e.stop && e.stop()
                }),
                  this.getVideoTracks().forEach(function (e) {
                    e.stop && e.stop()
                  })
              })),
          'undefined' != typeof location &&
            0 === location.href.indexOf('file:') &&
            console.error('Please load this HTML file on HTTP or HTTPS.')
        var v = { AudioContext: o }
        function m() {
          var e = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
            t = !!window.chrome && !e
          if (void 0 !== window.InstallTrigger) return !0
          if (!t) return !1
          navigator.appVersion
          var n,
            i,
            r = navigator.userAgent,
            a = '' + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10)
          return (
            t && ((n = r.indexOf('Chrome')), (a = r.substring(n + 7))),
            -1 !== (i = a.indexOf(';')) && (a = a.substring(0, i)),
            -1 !== (i = a.indexOf(' ')) && (a = a.substring(0, i)),
            (o = parseInt('' + a, 10)),
            isNaN(o) && ((a = '' + parseFloat(navigator.appVersion)), (o = parseInt(navigator.appVersion, 10))),
            o >= 49
          )
        }
        v = { AudioContext: window.AudioContext || window.webkitAudioContext }
        function g(e) {
          var t,
            n = this
          ;(this.start = function (i, r) {
            var a
            ;(n.mimeType || (n.mimeType = 'video/webm'), -1 !== n.mimeType.indexOf('audio')) &&
              e.getVideoTracks().length &&
              e.getAudioTracks().length &&
              (navigator.mozGetUserMedia
                ? (a = new l()).addTrack(e.getAudioTracks()[0])
                : (a = new l(e.getAudioTracks())),
              (e = a))
            ;-1 !== n.mimeType.indexOf('audio') && (n.mimeType = h ? 'audio/webm' : 'audio/ogg'),
              (n.dontFireOnDataAvailableEvent = !1)
            var o = { mimeType: n.mimeType }
            n.disableLogs || r || console.log('Passing following params over MediaRecorder API.', o),
              t && (t = null),
              h && !m() && (o = 'video/vp8')
            try {
              t = new MediaRecorder(e, o)
            } catch (d) {
              t = new MediaRecorder(e)
            }
            'canRecordMimeType' in t &&
              !1 === t.canRecordMimeType(n.mimeType) &&
              (n.disableLogs || console.warn('MediaRecorder API seems unable to record mimeType:', n.mimeType)),
              (t.ignoreMutedMedia = n.ignoreMutedMedia || !1)
            var s = !1
            ;(t.ondataavailable = function (e) {
              if (!n.dontFireOnDataAvailableEvent && e.data && e.data.size && !(e.data.size < 26800) && !s) {
                s = !0
                var r = n.getNativeBlob ? e.data : new Blob([e.data], { type: n.mimeType || 'video/webm' })
                n.ondataavailable(r),
                  (n.dontFireOnDataAvailableEvent = !0),
                  t && (t.stop(), (t = null)),
                  n.start(i, '__disableLogs')
              }
            }),
              (t.onerror = function (e) {
                n.disableLogs ||
                  ('InvalidState' === e.name
                    ? console.error(
                        'The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.'
                      )
                    : 'OutOfMemory' === e.name
                    ? console.error(
                        'The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.'
                      )
                    : 'IllegalStreamModification' === e.name
                    ? console.error(
                        'A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.'
                      )
                    : 'OtherRecordingError' === e.name
                    ? console.error(
                        'Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.'
                      )
                    : 'GenericError' === e.name
                    ? console.error('The UA cannot provide the codec or recording option that has been requested.', e)
                    : console.error('MediaRecorder Error', e)),
                  t && 'inactive' !== t.state && 'stopped' !== t.state && t.stop()
              })
            try {
              t.start(36e5)
            } catch (d) {
              t = null
            }
            setTimeout(function () {
              t && 'recording' === t.state && t.requestData()
            }, i)
          }),
            (this.stop = function (e) {
              t &&
                'recording' === t.state &&
                (t.requestData(),
                setTimeout(function () {
                  ;(n.dontFireOnDataAvailableEvent = !0), t && 'recording' === t.state && t.stop(), (t = null)
                }, 2e3))
            }),
            (this.pause = function () {
              t && 'recording' === t.state && t.pause()
            }),
            (this.ondataavailable = function (e) {
              console.log('recorded-blob', e)
            }),
            (this.resume = function () {
              if (this.dontFireOnDataAvailableEvent) {
                this.dontFireOnDataAvailableEvent = !1
                var e = n.disableLogs
                return (n.disableLogs = !0), this.record(), void (n.disableLogs = e)
              }
              t && 'paused' === t.state && t.resume()
            }),
            (this.clearRecordedData = function () {
              t && (this.pause(), (this.dontFireOnDataAvailableEvent = !0), this.stop())
            }),
            (function i() {
              t &&
                (!1 !==
                (function () {
                  if ('active' in e) {
                    if (!e.active) return !1
                  } else if ('ended' in e && e.ended) return !1
                  return !0
                })()
                  ? setTimeout(i, 1e3)
                  : n.stop())
            })()
        }
        function w(e) {
          var t, n
          ;(this.start = function (i) {
            ;(i = i || 1e3),
              (t = new y(e, this)).record(),
              (n = setInterval(function () {
                t.requestData()
              }, i))
          }),
            (this.stop = function () {
              t && (t.stop(), clearTimeout(n))
            }),
            (this.pause = function () {
              t && t.pause()
            }),
            (this.resume = function () {
              t && t.resume()
            }),
            (this.ondataavailable = function () {})
        }
        function y(e, t) {
          var n
          v.AudioContextConstructor || (v.AudioContextConstructor = new v.AudioContext()),
            (n = v.AudioContextConstructor.sampleRate)
          var i,
            r = [],
            a = [],
            o = !1,
            s = 0,
            d = t.sampleRate || n,
            c = (t.mimeType || 'audio/wav').indexOf('audio/pcm') > -1,
            u = t.audioChannels || 2
          function h(e, t) {
            for (var n = new Float32Array(t), i = 0, r = e.length, a = 0; a < r; a++) {
              var o = e[a]
              n.set(o, i), (i += o.length)
            }
            return n
          }
          function l(e, t, n) {
            for (var i = n.length, r = 0; r < i; r++) e.setUint8(t + r, n.charCodeAt(r))
          }
          function f(e) {
            for (var t = e.length, n = new Int16Array(t); t--; ) n[t] = 65535 * e[t]
            return n.buffer
          }
          ;(this.record = function () {
            ;(o = !0), (r.length = a.length = 0), (s = 0)
          }),
            (this.requestData = function () {
              if (!A)
                if (0 !== s) {
                  b = !0
                  var e = r.slice(0),
                    n = a.slice(0),
                    i = s
                  ;(r.length = a.length = []), (s = 0), (b = !1)
                  var o = h(e, i),
                    v = o
                  if (2 === u)
                    v = (function (e, t) {
                      for (var n = e.length + t.length, i = new Float32Array(n), r = 0, a = 0; a < n; )
                        (i[a++] = e[r]), (i[a++] = t[r]), r++
                      return i
                    })(o, h(n, i))
                  if (c) {
                    var m = new Blob([f(v)], { type: 'audio/pcm' })
                    return console.debug('audio recorded blob size:', p(m.size)), void t.ondataavailable(m)
                  }
                  var g = new ArrayBuffer(44 + 2 * v.length),
                    w = new DataView(g)
                  l(w, 0, 'RIFF'),
                    w.setUint32(4, 44 + 2 * v.length - 8, !0),
                    l(w, 8, 'WAVE'),
                    l(w, 12, 'fmt '),
                    w.setUint32(16, 16, !0),
                    w.setUint16(20, 1, !0),
                    w.setUint16(22, u, !0),
                    w.setUint32(24, d, !0),
                    w.setUint32(28, d * u * 2, !0),
                    w.setUint16(32, 2 * u, !0),
                    w.setUint16(34, 16, !0),
                    l(w, 36, 'data'),
                    w.setUint32(40, 2 * v.length, !0)
                  for (var y = v.length, x = 44, T = 0; T < y; T++) w.setInt16(x, 32767 * v[T], !0), (x += 2)
                  m = new Blob([w], { type: 'audio/wav' })
                  console.debug('audio recorded blob size:', p(m.size)), t.ondataavailable(m)
                } else b = !1
            }),
            (this.stop = function () {
              ;(o = !1), this.requestData(), g.disconnect()
            })
          var m = v.AudioContextConstructor
          v.VolumeGainNode = m.createGain()
          var g,
            w = v.VolumeGainNode
          ;(v.AudioInput = m.createMediaStreamSource(e)), (g = v.AudioInput).connect(w)
          var y = t.bufferSize || 2048
          if ((0 === t.bufferSize && (y = 0), m.createJavaScriptNode)) i = m.createJavaScriptNode(y, u, u)
          else {
            if (!m.createScriptProcessor) throw 'WebAudio API has no support on this browser.'
            i = m.createScriptProcessor(y, u, u)
          }
          ;(y = i.bufferSize), console.debug('using audio buffer-size:', y)
          var b = !1
          ;(window.scriptprocessornode = i), 1 === u && console.debug('All right-channels are skipped.')
          var A = !1
          ;(this.pause = function () {
            A = !0
          }),
            (this.resume = function () {
              A = !1
            }),
            (i.onaudioprocess = function (e) {
              if (o && !b && !A) {
                var t = e.inputBuffer.getChannelData(0)
                if ((r.push(new Float32Array(t)), 2 === u)) {
                  var n = e.inputBuffer.getChannelData(1)
                  a.push(new Float32Array(n))
                }
                s += y
              }
            }),
            w.connect(i),
            i.connect(m.destination)
        }
        function b(e) {
          var t, n
          ;(this.start = function (i) {
            for (var r in ((i = i || 1e3), (t = new A(e, this)), this)) 'function' != typeof this[r] && (t[r] = this[r])
            t.record(),
              (n = setInterval(function () {
                t.requestData()
              }, i))
          }),
            (this.stop = function () {
              t && (t.stop(), clearTimeout(n))
            }),
            (this.clearOldRecordedFrames = function () {
              t && t.clearOldRecordedFrames()
            }),
            (this.pause = function () {
              t && t.pause()
            }),
            (this.resume = function () {
              t && t.resume()
            }),
            (this.ondataavailable = function () {})
        }
        function A(e, t) {
          ;(this.record = function (n) {
            this.width || (this.width = 320),
              this.height || (this.height = 240),
              this.video &&
                this.video instanceof HTMLVideoElement &&
                (this.width || (this.width = o.videoWidth || o.clientWidth || 320),
                this.height || (this.height = o.videoHeight || o.clientHeight || 240)),
              this.video || (this.video = { width: this.width, height: this.height }),
              (this.canvas && this.canvas.width && this.canvas.height) ||
                (this.canvas = { width: this.width, height: this.height }),
              (u.width = this.canvas.width),
              (u.height = this.canvas.height),
              this.video && this.video instanceof HTMLVideoElement
                ? ((this.isHTMLObject = !0), (o = this.video.cloneNode()))
                : (((o = document.createElement('video')).src = d.createObjectURL(e)),
                  (o.width = this.video.width),
                  (o.height = this.video.height)),
              (o.muted = !0),
              o.play(),
              (s = new Date().getTime()),
              (c = new T.Video(t.speed, t.quality)),
              console.log('canvas resolutions', u.width, '*', u.height),
              console.log('video width/height', o.width || u.width, '*', o.height || u.height),
              r()
          }),
            (this.clearOldRecordedFrames = function () {
              c.frames = []
            })
          var n = !1
          this.requestData = function () {
            if (!f)
              if (c.frames.length) {
                n = !0
                var e = c.frames.slice(0)
                ;(c.frames = (function (e, t, n, i) {
                  var r = document.createElement('canvas')
                  ;(r.width = u.width), (r.height = u.height)
                  for (
                    var a = r.getContext('2d'),
                      o = [],
                      s = -1 === t,
                      d = t && t > 0 && t <= e.length ? t : e.length,
                      c = { r: 0, g: 0, b: 0 },
                      h = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
                      l = n && n >= 0 && n <= 1 ? n : 0,
                      f = i && i >= 0 && i <= 1 ? i : 0,
                      p = !1,
                      v = 0;
                    v < d;
                    v++
                  ) {
                    var m, g, w
                    if (!p) {
                      var y = new Image()
                      ;(y.src = e[v].image), a.drawImage(y, 0, 0, u.width, u.height)
                      var b = a.getImageData(0, 0, u.width, u.height)
                      ;(m = 0), (g = b.data.length), (w = b.data.length / 4)
                      for (var A = 0; A < g; A += 4) {
                        var x = { r: b.data[A], g: b.data[A + 1], b: b.data[A + 2] }
                        Math.sqrt(Math.pow(x.r - c.r, 2) + Math.pow(x.g - c.g, 2) + Math.pow(x.b - c.b, 2)) <= h * l &&
                          m++
                      }
                    }
                    ;(!p && w - m <= w * f) || (s && (p = !0), o.push(e[v]))
                  }
                  ;(o = o.concat(e.slice(d))).length <= 0 && o.push(e[e.length - 1])
                  return o
                })(e, -1)),
                  c.compile(function (e) {
                    t.ondataavailable(e), console.debug('video recorded blob size:', p(e.size))
                  }),
                  (c.frames = []),
                  (n = !1)
              } else n = !1
          }
          var i = !1
          function r() {
            if (f) return (s = new Date().getTime()), void setTimeout(r, 500)
            if (!a) {
              if (n) return setTimeout(r, 100)
              var e = new Date().getTime() - s
              if (!e) return r()
              ;(s = new Date().getTime()),
                !l.isHTMLObject && o.paused && o.play(),
                h.drawImage(o, 0, 0, u.width, u.height),
                a || c.frames.push({ duration: e, image: u.toDataURL('image/webp') }),
                i ||
                  (function (e, t, n) {
                    var i = document.createElement('canvas')
                    ;(i.width = u.width), (i.height = u.height)
                    var r,
                      a,
                      o,
                      s = i.getContext('2d'),
                      d = { r: 0, g: 0, b: 0 },
                      c = Math.sqrt(Math.pow(255, 2) + Math.pow(255, 2) + Math.pow(255, 2)),
                      h = t && t >= 0 && t <= 1 ? t : 0,
                      l = n && n >= 0 && n <= 1 ? n : 0,
                      f = new Image()
                    ;(f.src = e.image), s.drawImage(f, 0, 0, u.width, u.height)
                    var p = s.getImageData(0, 0, u.width, u.height)
                    ;(r = 0), (a = p.data.length), (o = p.data.length / 4)
                    for (var v = 0; v < a; v += 4) {
                      var m = { r: p.data[v], g: p.data[v + 1], b: p.data[v + 2] }
                      Math.sqrt(Math.pow(m.r - d.r, 2) + Math.pow(m.g - d.g, 2) + Math.pow(m.b - d.b, 2)) <= c * h &&
                        r++
                    }
                    return !(o - r <= o * l)
                  })(c.frames[c.frames.length - 1]) ||
                  ((i = !0), t.onStartedDrawingNonBlankFrames()),
                setTimeout(r, 10)
            }
          }
          var a = !1
          this.stop = function () {
            ;(a = !0), this.requestData()
          }
          var o,
            s,
            c,
            u = document.createElement('canvas'),
            h = u.getContext('2d'),
            l = this
          var f = !1
          ;(this.pause = function () {
            f = !0
          }),
            (this.resume = function () {
              f = !1
            })
        }
        function x(e) {
          if ('undefined' == typeof GIFEncoder) throw 'Please link: https://cdn.webrtc-experiment.com/gif-recorder.js'
          function t() {
            Date.now()
            var e = new Blob([new Uint8Array(c.stream().bin)], { type: 'image/gif' })
            i.ondataavailable(e), (c.stream().bin = [])
          }
          ;(this.start = function (e) {
            e = e || 1e3
            var i = this.videoWidth || 320,
              d = this.videoHeight || 240
            ;(r.width = o.width = i),
              (r.height = o.height = d),
              (c = new GIFEncoder()).setRepeat(0),
              c.setDelay(this.frameRate || this.speed || 200),
              c.setQuality(this.quality || 1),
              c.start(),
              Date.now(),
              (h = requestAnimationFrame(function e(t) {
                n
                  ? setTimeout(e, 500, t)
                  : ((h = requestAnimationFrame(e)),
                    void 0 === typeof s && (s = t),
                    t - s < 90 || (o.paused && o.play(), a.drawImage(o, 0, 0, i, d), c.addFrame(a), (s = t)))
              })),
              (u = setTimeout(t, e))
          }),
            (this.stop = function () {
              h && (cancelAnimationFrame(h), clearTimeout(u), t())
            })
          var n = !1
          ;(this.pause = function () {
            n = !0
          }),
            (this.resume = function () {
              n = !1
            }),
            (this.ondataavailable = function () {}),
            (this.onstop = function () {})
          var i = this,
            r = document.createElement('canvas'),
            a = r.getContext('2d'),
            o = document.createElement('video')
          ;(o.muted = !0), (o.autoplay = !0), (o.src = d.createObjectURL(e)), o.play()
          var s,
            c,
            u,
            h = null
        }
        void 0 !== r && (r.MediaRecorderWrapper = g),
          void 0 !== r && (r.StereoAudioRecorder = w),
          void 0 !== r && (r.StereoAudioRecorderHelper = y),
          void 0 !== r && (r.WhammyRecorder = b),
          void 0 !== r && (r.WhammyRecorderHelper = A),
          void 0 !== r && (r.GifRecorder = x)
        var T = (function () {
          function e(e, t) {
            ;(this.frames = []), e || (e = 1), (this.duration = 1e3 / e), (this.quality = t || 0.8)
          }
          function t(e) {
            function t(e, t, n) {
              return [{ data: e, id: 231 }].concat(
                n.map(function (e) {
                  var n = (function (e) {
                    var t = 0
                    e.keyframe && (t |= 128)
                    e.invisible && (t |= 8)
                    e.lacing && (t |= e.lacing << 1)
                    e.discardable && (t |= 1)
                    if (e.trackNum > 127) throw 'TrackNumber > 127 not supported'
                    return (
                      [128 | e.trackNum, e.timecode >> 8, 255 & e.timecode, t]
                        .map(function (e) {
                          return String.fromCharCode(e)
                        })
                        .join('') + e.frame
                    )
                  })({
                    discardable: 0,
                    frame: e.data.slice(4),
                    invisible: 0,
                    keyframe: 1,
                    lacing: 0,
                    trackNum: 1,
                    timecode: Math.round(t)
                  })
                  return (t += e.duration), { data: n, id: 163 }
                })
              )
            }
            function n(e) {
              for (var t = []; e > 0; ) t.push(255 & e), (e >>= 8)
              return new Uint8Array(t.reverse())
            }
            function i(e) {
              var t = []
              e = (e.length % 8 ? new Array(9 - (e.length % 8)).join('0') : '') + e
              for (var n = 0; n < e.length; n += 8) t.push(parseInt(e.substr(n, 8), 2))
              return new Uint8Array(t)
            }
            function r(e, t) {
              return parseInt(
                e
                  .substr(t + 4, 4)
                  .split('')
                  .map(function (e) {
                    var t = e.charCodeAt(0).toString(2)
                    return new Array(8 - t.length + 1).join('0') + t
                  })
                  .join(''),
                2
              )
            }
            var a = new (function (e) {
              var r = (function (e) {
                if (!e[0])
                  return void postMessage({
                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
                  })
                for (var t = e[0].width, n = e[0].height, i = e[0].duration, r = 1; r < e.length; r++)
                  i += e[r].duration
                return { duration: i, width: t, height: n }
              })(e)
              if (!r) return []
              for (
                var a,
                  o = [
                    {
                      id: 440786851,
                      data: [
                        { data: 1, id: 17030 },
                        { data: 1, id: 17143 },
                        { data: 4, id: 17138 },
                        { data: 8, id: 17139 },
                        { data: 'webm', id: 17026 },
                        { data: 2, id: 17031 },
                        { data: 2, id: 17029 }
                      ]
                    },
                    {
                      id: 408125543,
                      data: [
                        {
                          id: 357149030,
                          data: [
                            { data: 1e6, id: 2807729 },
                            { data: 'whammy', id: 19840 },
                            { data: 'whammy', id: 22337 },
                            {
                              data:
                                ((a = r.duration),
                                [].slice
                                  .call(new Uint8Array(new Float64Array([a]).buffer), 0)
                                  .map(function (e) {
                                    return String.fromCharCode(e)
                                  })
                                  .reverse()
                                  .join('')),
                              id: 17545
                            }
                          ]
                        },
                        {
                          id: 374648427,
                          data: [
                            {
                              id: 174,
                              data: [
                                { data: 1, id: 215 },
                                { data: 1, id: 29637 },
                                { data: 0, id: 156 },
                                { data: 'und', id: 2274716 },
                                { data: 'V_VP8', id: 134 },
                                { data: 'VP8', id: 2459272 },
                                { data: 1, id: 131 },
                                {
                                  id: 224,
                                  data: [
                                    { data: r.width, id: 176 },
                                    { data: r.height, id: 186 }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  s = 0,
                  d = 0;
                s < e.length;

              ) {
                var c = [],
                  u = 0
                do {
                  c.push(e[s]), (u += e[s].duration), s++
                } while (s < e.length && u < 3e4)
                var h = { id: 524531317, data: t(d, 0, c) }
                o[1].data.push(h), (d += u)
              }
              return (function e(t) {
                for (var r = [], a = 0; a < t.length; a++) {
                  var o = t[a].data
                  'object' == typeof o && (o = e(o)),
                    'number' == typeof o && (o = i(o.toString(2))),
                    'string' == typeof o &&
                      (o = new Uint8Array(
                        o.split('').map(function (e) {
                          return e.charCodeAt(0)
                        })
                      ))
                  var s = o.size || o.byteLength || o.length,
                    d = Math.ceil(Math.ceil(Math.log(s) / Math.log(2)) / 8),
                    c = s.toString(2),
                    u = new Array(7 * d + 7 + 1 - c.length).join('0') + c,
                    h = new Array(d).join('0') + '1' + u
                  r.push(n(t[a].id)), r.push(i(h)), r.push(o)
                }
                return new Blob(r, { type: 'video/webm' })
              })(o)
            })(
              e.map(function (e) {
                var t = (function (e) {
                  for (var t = e.RIFF[0].WEBP[0], n = t.indexOf('*'), i = 0, r = []; i < 4; i++)
                    r[i] = t.charCodeAt(n + 3 + i)
                  return { width: 16383 & ((r[1] << 8) | r[0]), height: 16383 & ((r[3] << 8) | r[2]), data: t, riff: e }
                })(
                  (function e(t) {
                    for (var n = 0, i = {}; n < t.length; ) {
                      var a = t.substr(n, 4),
                        o = r(t, n),
                        s = t.substr(n + 4 + 4, o)
                      ;(n += 8 + o), (i[a] = i[a] || []), 'RIFF' === a || 'LIST' === a ? i[a].push(e(s)) : i[a].push(s)
                    }
                    return i
                  })(atob(e.image.slice(23)))
                )
                return (t.duration = e.duration), t
              })
            )
            postMessage(a)
          }
          return (
            (e.prototype.add = function (e, t) {
              if (
                ('canvas' in e && (e = e.canvas),
                'toDataURL' in e && (e = e.toDataURL('image/webp', this.quality)),
                !/^data:image\/webp;base64,/gi.test(e))
              )
                throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp'
              this.frames.push({ image: e, duration: t || this.duration })
            }),
            (e.prototype.compile = function (e) {
              var n,
                i,
                r,
                a =
                  ((n = t),
                  (i = d.createObjectURL(
                    new Blob([n.toString(), 'this.onmessage =  function (e) {' + n.name + '(e.data);}'], {
                      type: 'application/javascript'
                    })
                  )),
                  (r = new Worker(i)),
                  d.revokeObjectURL(i),
                  r)
              ;(a.onmessage = function (t) {
                t.data.error ? console.error(t.data.error) : e(t.data)
              }),
                a.postMessage(this.frames)
            }),
            { Video: e }
          )
        })()
        void 0 !== r && (r.Whammy = T),
          (window.ConcatenateBlobs = function (e, t, n) {
            var i = [],
              r = 0
            !(function a() {
              if (!e[r])
                return (function () {
                  var e = 0
                  i.forEach(function (t) {
                    e += t.byteLength
                  })
                  var r = new Uint16Array(e),
                    a = 0
                  i.forEach(function (e) {
                    var t = e.byteLength
                    t % 2 != 0 && (e = e.slice(0, t - 1)), r.set(new Uint16Array(e), a), (a += t)
                  })
                  var o = new Blob([r.buffer], { type: t })
                  n(o)
                })()
              var o = new FileReader()
              ;(o.onload = function (e) {
                i.push(e.target.result), r++, a()
              }),
                o.readAsArrayBuffer(e[r])
            })()
          }),
          (e.exports = r),
          void 0 ===
            (i = function () {
              return r
            }.apply(t, [])) || (e.exports = i)
      }.call(this, n('yLpj')))
    },
    TSYQ: function (e, t, n) {
      var i
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var i = arguments[t]
            if (i) {
              var a = typeof i
              if ('string' === a || 'number' === a) e.push(i)
              else if (Array.isArray(i) && i.length) {
                var o = r.apply(null, i)
                o && e.push(o)
              } else if ('object' === a) for (var s in i) n.call(i, s) && i[s] && e.push(s)
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (i = function () {
                return r
              }.apply(t, [])) || (e.exports = i)
      })()
    },
    Zhdv: function (e, t, n) {
      e.exports = { container: 'styles-module--container--3WKLl' }
    },
    ls82: function (e, t, n) {
      var i = (function (e) {
        'use strict'
        var t = Object.prototype,
          n = t.hasOwnProperty,
          i = 'function' == typeof Symbol ? Symbol : {},
          r = i.iterator || '@@iterator',
          a = i.asyncIterator || '@@asyncIterator',
          o = i.toStringTag || '@@toStringTag'
        function s(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t]
        }
        try {
          s({}, '')
        } catch (k) {
          s = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function d(e, t, n, i) {
          var r = t && t.prototype instanceof h ? t : h,
            a = Object.create(r.prototype),
            o = new T(i || [])
          return (
            (a._invoke = (function (e, t, n) {
              var i = 'suspendedStart'
              return function (r, a) {
                if ('executing' === i) throw new Error('Generator is already running')
                if ('completed' === i) {
                  if ('throw' === r) throw a
                  return E()
                }
                for (n.method = r, n.arg = a; ; ) {
                  var o = n.delegate
                  if (o) {
                    var s = b(o, n)
                    if (s) {
                      if (s === u) continue
                      return s
                    }
                  }
                  if ('next' === n.method) n.sent = n._sent = n.arg
                  else if ('throw' === n.method) {
                    if ('suspendedStart' === i) throw ((i = 'completed'), n.arg)
                    n.dispatchException(n.arg)
                  } else 'return' === n.method && n.abrupt('return', n.arg)
                  i = 'executing'
                  var d = c(e, t, n)
                  if ('normal' === d.type) {
                    if (((i = n.done ? 'completed' : 'suspendedYield'), d.arg === u)) continue
                    return { value: d.arg, done: n.done }
                  }
                  'throw' === d.type && ((i = 'completed'), (n.method = 'throw'), (n.arg = d.arg))
                }
              }
            })(e, n, o)),
            a
          )
        }
        function c(e, t, n) {
          try {
            return { type: 'normal', arg: e.call(t, n) }
          } catch (k) {
            return { type: 'throw', arg: k }
          }
        }
        e.wrap = d
        var u = {}
        function h() {}
        function l() {}
        function f() {}
        var p = {}
        p[r] = function () {
          return this
        }
        var v = Object.getPrototypeOf,
          m = v && v(v(M([])))
        m && m !== t && n.call(m, r) && (p = m)
        var g = (f.prototype = h.prototype = Object.create(p))
        function w(e) {
          ;['next', 'throw', 'return'].forEach(function (t) {
            s(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function y(e, t) {
          var i
          this._invoke = function (r, a) {
            function o() {
              return new t(function (i, o) {
                !(function i(r, a, o, s) {
                  var d = c(e[r], e, a)
                  if ('throw' !== d.type) {
                    var u = d.arg,
                      h = u.value
                    return h && 'object' == typeof h && n.call(h, '__await')
                      ? t.resolve(h.__await).then(
                          function (e) {
                            i('next', e, o, s)
                          },
                          function (e) {
                            i('throw', e, o, s)
                          }
                        )
                      : t.resolve(h).then(
                          function (e) {
                            ;(u.value = e), o(u)
                          },
                          function (e) {
                            return i('throw', e, o, s)
                          }
                        )
                  }
                  s(d.arg)
                })(r, a, i, o)
              })
            }
            return (i = i ? i.then(o, o) : o())
          }
        }
        function b(e, t) {
          var n = e.iterator[t.method]
          if (void 0 === n) {
            if (((t.delegate = null), 'throw' === t.method)) {
              if (e.iterator.return && ((t.method = 'return'), (t.arg = void 0), b(e, t), 'throw' === t.method))
                return u
              ;(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"))
            }
            return u
          }
          var i = c(n, e.iterator, t.arg)
          if ('throw' === i.type) return (t.method = 'throw'), (t.arg = i.arg), (t.delegate = null), u
          var r = i.arg
          return r
            ? r.done
              ? ((t[e.resultName] = r.value),
                (t.next = e.nextLoc),
                'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)),
                (t.delegate = null),
                u)
              : r
            : ((t.method = 'throw'),
              (t.arg = new TypeError('iterator result is not an object')),
              (t.delegate = null),
              u)
        }
        function A(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t)
        }
        function x(e) {
          var t = e.completion || {}
          ;(t.type = 'normal'), delete t.arg, (e.completion = t)
        }
        function T(e) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(A, this), this.reset(!0)
        }
        function M(e) {
          if (e) {
            var t = e[r]
            if (t) return t.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                a = function t() {
                  for (; ++i < e.length; ) if (n.call(e, i)) return (t.value = e[i]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (a.next = a)
            }
          }
          return { next: E }
        }
        function E() {
          return { value: void 0, done: !0 }
        }
        return (
          (l.prototype = g.constructor = f),
          (f.constructor = l),
          (l.displayName = s(f, o, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor
            return !!t && (t === l || 'GeneratorFunction' === (t.displayName || t.name))
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), s(e, o, 'GeneratorFunction')),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          w(y.prototype),
          (y.prototype[a] = function () {
            return this
          }),
          (e.AsyncIterator = y),
          (e.async = function (t, n, i, r, a) {
            void 0 === a && (a = Promise)
            var o = new y(d(t, n, i, r), a)
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next()
                })
          }),
          w(g),
          s(g, o, 'Generator'),
          (g[r] = function () {
            return this
          }),
          (g.toString = function () {
            return '[object Generator]'
          }),
          (e.keys = function (e) {
            var t = []
            for (var n in e) t.push(n)
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var i = t.pop()
                  if (i in e) return (n.value = i), (n.done = !1), n
                }
                return (n.done = !0), n
              }
            )
          }),
          (e.values = M),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this) 't' === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ('throw' === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function i(n, i) {
                return (o.type = 'throw'), (o.arg = e), (t.next = n), i && ((t.method = 'next'), (t.arg = void 0)), !!i
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  o = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var s = n.call(a, 'catchLoc'),
                    d = n.call(a, 'finallyLoc')
                  if (s && d) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (s) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!d) throw new Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var r = this.tryEntries[i]
                if (r.tryLoc <= this.prev && n.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                  var a = r
                  break
                }
              }
              a && ('break' === e || 'continue' === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null)
              var o = a ? a.completion : {}
              return (
                (o.type = e),
                (o.arg = t),
                a ? ((this.method = 'next'), (this.next = a.finallyLoc), u) : this.complete(o)
              )
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                u
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var i = n.completion
                  if ('throw' === i.type) {
                    var r = i.arg
                    x(n)
                  }
                  return r
                }
              }
              throw new Error('illegal catch attempt')
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: M(e), resultName: t, nextLoc: n }),
                'next' === this.method && (this.arg = void 0),
                u
              )
            }
          }),
          e
        )
      })(e.exports)
      try {
        regeneratorRuntime = i
      } catch (r) {
        Function('r', 'regeneratorRuntime = r')(i)
      }
    },
    o0o1: function (e, t, n) {
      e.exports = n('ls82')
    },
    todR: function (e, t, n) {
      e.exports = {
        container: 'styles-module--container--2_1VN',
        userPrompt: 'styles-module--userPrompt--1SH_K',
        expanded: 'styles-module--expanded--1UQ8K'
      }
    }
  }
])
//# sourceMappingURL=component---src-pages-index-tsx-2bbb67ded92fe60ae205.js.map
