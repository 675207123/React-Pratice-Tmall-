"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sideleftnav = function (_React$Component) {
	_inherits(Sideleftnav, _React$Component);

	function Sideleftnav() {
		_classCallCheck(this, Sideleftnav);

		return _possibleConstructorReturn(this, (Sideleftnav.__proto__ || Object.getPrototypeOf(Sideleftnav)).apply(this, arguments));
	}

	_createClass(Sideleftnav, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"nav",
				{ id: "sideleft" },
				"\u5DE6\u8FB9\u51FA\u73B0\u7684\u5BFC\u822A\u6761\uFF0C \u5F53\u9875\u9762\u6EDA\u52A8\u4E00\u5B9A\u8DDD\u79BB\u51FA\u73B0"
			);
		}
	}]);

	return Sideleftnav;
}(_react2.default.Component);

exports.default = Sideleftnav;