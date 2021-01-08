var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function (value) {
              step("next", value);
            },
            function (err) {
              step("throw", err);
            }
          );
        }
      }
      return step("next");
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var NoiseButton = (function (_PIXI$Application) {
  _inherits(NoiseButton, _PIXI$Application);
  function NoiseButton(options) {
    var _this2 = this;
    var _ret;
    _classCallCheck(this, NoiseButton);
    var _this = _possibleConstructorReturn(
      this,
      (NoiseButton.__proto__ || Object.getPrototypeOf(NoiseButton)).call(
        this,

        {
          autoStart: false,
          autoResize: true,
          transparent: true,
        }
      )
    );
    _this.resize = NoiseButton.debounce(
      _asyncToGenerator(
        /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    if (_this.setSize()) {
                      _this.container.removeChildren(
                        0,
                        _this.container.children.length - 1
                      );

                      _this.addGraphics();
                      _this.createTimeLine();
                      _this.render();
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            },
            _callee,
            _this2
          );
        })
      ),
      _this,
      100
    );
    _this.options = Object.assign(
      {},
      {
        backgroundColor: 0x4875cc,
        backgroundAlpha: 1,
        polygon: "0, 0, 0, 0",
        borderColor: 0x4875cc,
        borderWidth: 0,
        wavesAlpha: 1,
        displacementScale: { x: 30, y: 50 },
        displacementMap: "http://digitalfreepen.com/images/2017/whitenoise.png",
      },
      options
    ); // example of the received polygon string
    // '30, 0, 30, 0'
    _this.polygon = _this.options.polygon
      .replace(/\s/g, "")
      .split(",")
      .map(function (el) {
        var number = el | 0;
        return number > _this.options.borderWidth
          ? number - _this.options.borderWidth / 2
          : number;
      });
    _this.offset = 20;
    _this.animate = false;
    return (
      (_ret = _this.createCanvas()), _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(
    NoiseButton,
    [
      {
        key: "createCanvas",
        value: (function () {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
              var wavesTexture;
              return regeneratorRuntime.wrap(
                function _callee2$(_context2) {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        this.options.element.classList.add("noise-container");
                        this.view.classList.add("noise-canvas");
                        this.options.element.appendChild(this.view);
                        this.container = new PIXI.Container();
                        this.stage.addChild(this.container);
                        _context2.next = 7;
                        return this.loadTexture(this.options.waves);
                      case 7:
                        wavesTexture = _context2.sent;
                        this.waves = new PIXI.Sprite(wavesTexture);
                        this.noiseSprite = PIXI.Sprite.fromImage(
                          this.options.displacementMap
                        );
                        this.setSize();
                        this.addGraphics();
                        this.bindEvents();
                        this.render();
                        this.options.element.classList.add("canvas-ready");
                      case 15:
                      case "end":
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                this
              );
            })
          );
          function createCanvas() {
            return _ref2.apply(this, arguments);
          }
          return createCanvas;
        })(),
      },
      {
        key: "addGraphics",
        value: function addGraphics() {
          this.container.addChild(this.getPolygon(true));
          if (this.options.waves) this.drawWaves();
          var rect = new PIXI.Graphics();
          rect.beginFill(0, 0);
          rect.drawRect(0, 0, this.width, this.width);
          this.container.addChild(rect);
          this.container.addChild(this.getPolygon());
          this.setMask();
          this.addFilter();
        },
      },
      {
        key: "setMask",
        value: function setMask() {
          var mask = this.getPolygon();
          this.stage.addChild(mask);
          this.container.mask = mask;
        },
      },
      {
        key: "drawWaves",
        value: function drawWaves() {
          this.waves.alpha = 1 - this.options.wavesAlpha;
          this.waves.y = this.height * this.options.wavesPos.y;
          this.container.addChild(this.waves);
          this.waves.width = this.waves.height = this.width;
        },
      },
      {
        key: "setSize",
        value: function setSize() {
          var parentWidth = this.options.element.offsetWidth;
          var parentHeight = this.options.element.offsetHeight;
          this.width = parentWidth + this.offset * 2;
          this.height = parentHeight + this.offset * 2;
          if (this.oldWidth !== this.width) {
            this.renderer.resize(this.width, this.height);
            this.oldWidth = this.width;
            return true;
          } else return false;
        },
      },
      {
        key: "loadTexture",
        value: function loadTexture(src) {
          return new Promise(function (resolve) {
            var loader = new PIXI.loaders.Loader();
            loader.add("waves", src);
            loader.load(function (loader, resources) {
              return resolve(resources.waves.texture);
            });
          });
        },
      },
      {
        key: "addFilter",
        value: function addFilter() {
          this.container.addChild(this.noiseSprite);

          this.noiseFilter = new PIXI.filters.DisplacementFilter(
            this.noiseSprite
          );
          this.container.filters = [this.noiseFilter];
          this.noiseSprite.position.x = -this.width;
          this.noiseSprite.width = this.width * 3;
          this.noiseFilter.scale.x = 0;
          this.noiseFilter.scale.y = 0;
        },
      },
      {
        key: "createTimeLine",
        value: function createTimeLine() {
          var _this3 = this;
          this.timeline = new TimelineMax({
            onUpdate: this.render.bind(this),
            paused: true,
            onStart: function onStart() {
              return (_this3.animate = true);
            },
            onComplete: function onComplete() {
              return (_this3.animate = false);
            },
          })
            .to(this.noiseFilter.scale, 0.2, {
              x: this.options.displacementScale.x,
              y: this.options.displacementScale.y,
            })
            .fromTo(
              this.noiseSprite,
              0.5,
              { x: -(this.noiseSprite.width * 0.66) },
              { x: 0 },
              "-=.2"
            )
            .to(this.noiseFilter.scale, 0.2, { x: 0, y: 0 }, "-=.2");
        },
      },
      {
        key: "play",
        value: function play() {
          if (!this.animate) this.timeline.play(0);
        },
      },
      {
        key: "bindEvents",
        value: function bindEvents() {
          this.createTimeLine();
          this.options.element.addEventListener(
            "mouseenter",
            this.play.bind(this)
          );
          window.addEventListener("resize", this.resize.bind(this));
        },
      },
      {
        key: "getPolygon",
        value: function getPolygon(background) {
          var points = this.polygon;
          var graphics = new PIXI.Graphics();
          var width = this.width - this.offset * 2 - this.options.borderWidth;
          var height = this.height - this.offset * 2 - this.options.borderWidth;

          graphics.position.x = this.offset + this.options.borderWidth / 2;
          graphics.position.y = this.offset + this.options.borderWidth / 2;

          var arrayLines = [
            [0, points[0]],
            [points[0], 0],
            [width - points[1], 0],
            [width, points[1]],
            [width, height - points[2]],
            [width - points[2], height],
            [points[3], height],
            [0, height - points[3]],
            [0, points[0]],
          ];

          graphics.lineStyle(
            this.options.borderWidth,
            this.options.borderColor
          );

          graphics.beginFill(
            this.options.backgroundColor,
            background ? 1 - this.options.backgroundAlpha : 0
          );

          for (var i = 0, prevCoords = []; i < arrayLines.length; i++) {
            if (
              prevCoords.length &&
              prevCoords[0] === arrayLines[i][0] &&
              prevCoords[1] === arrayLines[i][1]
            )
              continue;
            if (i === 0) {
              graphics.moveTo(arrayLines[i][0], arrayLines[i][1]);
              prevCoords = arrayLines[i];
              continue;
            }

            prevCoords = arrayLines[i];
            graphics.lineTo(arrayLines[i][0], arrayLines[i][1]);
          }

          graphics.endFill();

          return graphics;
        },
      },
    ],
    [
      {
        key: "debounce",
        value: function debounce(func, context, wait, immediate) {
          var _arguments = arguments;
          var timeout = void 0;
          return function () {
            var args = _arguments;
            var later = function later() {
              timeout = null;
              if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
          };
        },
      },
    ]
  );
  return NoiseButton;
})(PIXI.Application);

// -----------------
// Examples --------
// -----------------

// -----------------
// with border -----
// -----------------
new NoiseButton({
  element: document.querySelector(".noise_btn--border"),
  polygon: "30, 0, 30, 0",
  wavesPos: {
    y: 0,
    x: 0,
  },

  borderWidth: 5,
  borderColor: "0xFFFFFF",
  backgroundAlpha: 1,
  wavesAlpha: 0.8,
  waves: "https://cdn.rawgit.com/av-dev/noise-button/930cbd38/Z3hB7It.png",
  displacementMap:
    "https://cdn.rawgit.com/av-dev/noise-button/930cbd38/displace-map.jpeg",
});

// -----------------
// without border --
// -----------------
new NoiseButton({
  element: document.querySelector(".noise_btn--bg"),
  wavesPos: {
    y: 0.3,
    x: 0,
  },

  polygon: "30, 0, 30, 0",
  backgroundColor: "0xFFFFFF",
  backgroundAlpha: 0,
});
