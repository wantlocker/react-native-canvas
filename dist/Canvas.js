Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image.default;
  }
});
Object.defineProperty(exports, "ImageData", {
  enumerable: true,
  get: function get() {
    return _ImageData.default;
  }
});
Object.defineProperty(exports, "Path2D", {
  enumerable: true,
  get: function get() {
    return _Path2D.default;
  }
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeWebview = require("react-native-webview");

var _Bus = _interopRequireDefault(require("./Bus"));

var _webviewBinders = require("./webview-binders");

var _CanvasRenderingContext2D = _interopRequireDefault(require("./CanvasRenderingContext2D"));

var _indexHtml = _interopRequireDefault(require("./index.html.js"));

var _Image = _interopRequireDefault(require("./Image"));

var _ImageData = _interopRequireDefault(require("./ImageData"));

var _Path2D = _interopRequireDefault(require("./Path2D"));

require("./CanvasGradient");

var _dec,
    _dec2,
    _dec3,
    _class,
    _jsxFileName = "src/Canvas.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if ((typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var stylesheet = _reactNative.StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 0
  },
  webview: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    flex: 0
  },
  webviewAndroid9: {
    overflow: 'hidden',
    backgroundColor: 'transparent',
    flex: 0,
    opacity: 0.99
  }
});

var Canvas = (_dec = (0, _webviewBinders.webviewTarget)('canvas'), _dec2 = (0, _webviewBinders.webviewProperties)({
  width: 300,
  height: 150
}), _dec3 = (0, _webviewBinders.webviewMethods)(['toDataURL', 'initFonts', 'addFont']), _dec(_class = _dec2(_class = _dec3(_class = function (_Component) {
  function Canvas() {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Canvas).call(this));
    _this.state = {
      isLoaded: false
    };

    _this.addMessageListener = function (listener) {
      _this.listeners.push(listener);

      return function () {
        return _this.removeMessageListener(listener);
      };
    };

    _this.removeMessageListener = function (listener) {
      _this.listeners.splice(_this.listeners.indexOf(listener), 1);
    };

    _this.webviewPostMessage = function (message) {
      if (_this.webview) {
        _this.webview.postMessage(JSON.stringify(message));
      }
    };

    _this.bus = new _Bus.default(_this.webviewPostMessage);
    _this.listeners = [];
    _this.context2D = new _CanvasRenderingContext2D.default(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.getContext = function (contextType, contextAttributes) {
      switch (contextType) {
        case '2d':
          {
            return _this.context2D;
          }
      }

      return null;
    };

    _this.postMessage = function _callee(message) {
      var _ref, stack, _ref2, type, payload, error;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref = new Error(), stack = _ref.stack;
              _context.next = 3;
              return regeneratorRuntime.awrap(_this.bus.post(_objectSpread({
                id: Math.random()
              }, message)));

            case 3:
              _ref2 = _context.sent;
              type = _ref2.type;
              payload = _ref2.payload;
              _context.t0 = type;
              _context.next = _context.t0 === 'error' ? 9 : _context.t0 === 'json' ? 12 : _context.t0 === 'blob' ? 13 : 14;
              break;

            case 9:
              error = new Error(payload.message);
              error.stack = stack;
              throw error;

            case 12:
              return _context.abrupt("return", payload);

            case 13:
              return _context.abrupt("return", atob(payload));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    };

    _this.handleMessage = function (e) {
      var data = JSON.parse(e.nativeEvent.data);

      switch (data.type) {
        case 'log':
          {
            var _console;

            (_console = console).log.apply(_console, _toConsumableArray(data.payload));

            break;
          }

        case 'error':
          {
            throw new Error(data.payload.message);
          }

        default:
          {
            if (data.payload) {
              var _constructor = _webviewBinders.constructors[data.meta.constructor];

              if (_constructor) {
                var _data = data,
                    args = _data.args,
                    payload = _data.payload;

                var object = _constructor.constructLocally.apply(_constructor, [_assertThisInitialized(_assertThisInitialized(_this))].concat(_toConsumableArray(args)));

                _extends(object, payload, _defineProperty({}, _webviewBinders.WEBVIEW_TARGET, data.meta.target));

                data = _objectSpread({}, data, {
                  payload: object
                });
              }

              for (var _iterator = _this.listeners, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator"]();;) {
                var _ref3;

                if (_isArray) {
                  if (_i >= _iterator.length) break;
                  _ref3 = _iterator[_i++];
                } else {
                  _i = _iterator.next();
                  if (_i.done) break;
                  _ref3 = _i.value;
                }

                var _listener = _ref3;

                _listener(data.payload);
              }
            }

            _this.bus.handle(data);
          }
      }
    };

    _this.handleRef = function (element) {
      _this.webview = element;
    };

    _this.handleLoad = function () {
      _this.setState({
        isLoaded: true
      });

      _this.bus.resume();
    };

    _this.bus.pause();

    return _this;
  }

  _createClass(Canvas, [{
    key: "render",
    value: function render() {
      var width = this.width,
          height = this.height;
      var _this$props = this.props,
          style = _this$props.style,
          _this$props$baseUrl = _this$props.baseUrl,
          baseUrl = _this$props$baseUrl === void 0 ? '' : _this$props$baseUrl,
          _this$props$originWhi = _this$props.originWhitelist,
          originWhitelist = _this$props$originWhi === void 0 ? ['*'] : _this$props$originWhi;
      var isLoaded = this.state.isLoaded;

      if (_reactNative.Platform.OS === 'android') {
        var isAndroid9 = _reactNative.Platform.Version >= 28;
        return _react.default.createElement(_reactNative.View, {
          style: [stylesheet.container, {
            width: width,
            height: height
          }, style],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react.default.createElement(_reactNativeWebview.WebView, {
          ref: this.handleRef,
          style: [isAndroid9 ? stylesheet.webviewAndroid9 : stylesheet.webview, {
            height: height,
            width: width
          }],
          source: {
            html: _indexHtml.default,
            baseUrl: baseUrl
          },
          originWhitelist: originWhitelist,
          onMessage: this.handleMessage,
          onLoad: this.handleLoad,
          overScrollMode: "never",
          mixedContentMode: "always",
          scalesPageToFit: false,
          javaScriptEnabled: true,
          domStorageEnabled: true,
          thirdPartyCookiesEnabled: true,
          allowUniversalAccessFromFileURLs: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }));
      }

      return _react.default.createElement(_reactNative.View, {
        style: [stylesheet.container, {
          width: width,
          height: height,
          opacity: isLoaded ? 1 : 0
        }, style],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react.default.createElement(_reactNativeWebview.WebView, {
        ref: this.handleRef,
        style: [stylesheet.webview, {
          height: height,
          width: width
        }],
        source: {
          html: _indexHtml.default,
          baseUrl: baseUrl
        },
        originWhitelist: originWhitelist,
        onMessage: this.handleMessage,
        onLoad: this.handleLoad,
        scrollEnabled: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }));
    }
  }]);

  _inherits(Canvas, _Component);

  return Canvas;
}(_react.Component)) || _class) || _class) || _class);
exports.default = Canvas;