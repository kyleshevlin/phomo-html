function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var phomo = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

var h = function h(tag) {
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      for (var _len = arguments.length, children = Array(_len), _key = 0; _key < _len; _key++) {
        children[_key] = arguments[_key];
      }

      return {
        tag: tag,
        props: props,
        children: children,
        key: props.key
      };
    };
  };
};

var nodeToDOM = function nodeToDOM(_ref) {
  var tag = _ref.tag,
      props = _ref.props,
      children = _ref.children;

  var el = document.createElement(tag);

  for (var key in props) {
    var value = props[key];

    if (typeof value === 'function') {
      el[key] = value;
    } else {
      el.setAttribute(key, value);
    }
  }

  children.forEach(function (child) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(nodeToDOM(child));
    }
  });

  return el;
};

var render = function render(entry) {
  return function (view) {
    entry.innerHTML = '';
    entry.appendChild(nodeToDOM(view));
  };
};

var app = function app(entry, view, actions, state) {
  var appState = state;
  var renderEntry = render(entry);
  var viewWithActions = view(bindActions(actions));
  var firstView = viewWithActions(appState);

  renderEntry(firstView);

  function bindActions(actions) {
    return Object.keys(actions).reduce(function (boundActions, key) {
      var action = actions[key];

      boundActions[key] = function (value) {
        appState = Object.assign({}, action(value)(appState));
        renderEntry(viewWithActions(appState));
      };

      return boundActions;
    }, {});
  }
};

exports.h = h;
exports.app = app;

});

unwrapExports(phomo);
var phomo_1 = phomo.h;
var phomo_2 = phomo.app;

var a = phomo_1('a');
var abbr = phomo_1('abbr');
var address = phomo_1('address');
var area = phomo_1('area');
var article = phomo_1('article');
var aside = phomo_1('aside');
var audio = phomo_1('audio');
var b = phomo_1('b');
var base = phomo_1('base');
var bdi = phomo_1('bdi');
var bdo = phomo_1('bdo');
var blockquote = phomo_1('blockquote');
var body = phomo_1('body');
var br = phomo_1('br');
var button = phomo_1('button');
var canvas = phomo_1('canvas');
var caption = phomo_1('caption');
var cite = phomo_1('cite');
var code = phomo_1('code');
var col = phomo_1('col');
var colgroup = phomo_1('colgroup');
var data = phomo_1('data');
var datalist = phomo_1('datalist');
var dd = phomo_1('dd');
var del = phomo_1('del');
var details = phomo_1('details');
var dfn = phomo_1('dfn');
var dialog = phomo_1('dialog');
var div = phomo_1('div');
var dl = phomo_1('dl');
var dt = phomo_1('dt');
var em = phomo_1('em');
var embed = phomo_1('embed');
var fieldset = phomo_1('fieldset');
var figcaption = phomo_1('figcaption');
var figure = phomo_1('figure');
var footer = phomo_1('footer');
var form = phomo_1('form');
var h1 = phomo_1('h1');
var h2 = phomo_1('h2');
var h3 = phomo_1('h3');
var h4 = phomo_1('h4');
var h5 = phomo_1('h5');
var h6 = phomo_1('h6');
var head = phomo_1('head');
var header = phomo_1('header');
var hgroup = phomo_1('hgroup');
var hr = phomo_1('hr');
var html = phomo_1('html');
var i = phomo_1('i');
var iframe = phomo_1('iframe');
var img = phomo_1('img');
var input = phomo_1('input');
var ins = phomo_1('ins');
var kbd = phomo_1('kbd');
var keygen = phomo_1('keygen');
var label = phomo_1('label');
var legend = phomo_1('legend');
var li = phomo_1('li');
var link = phomo_1('link');
var main = phomo_1('main');
var map = phomo_1('map');
var mark = phomo_1('mark');
var math = phomo_1('math');
var menu = phomo_1('menu');
var menuitem = phomo_1('menuitem');
var meta = phomo_1('meta');
var meter = phomo_1('meter');
var nav = phomo_1('nav');
var noscript = phomo_1('noscript');
var object = phomo_1('object');
var ol = phomo_1('ol');
var optgroup = phomo_1('optgroup');
var option = phomo_1('option');
var output = phomo_1('output');
var p = phomo_1('p');
var param = phomo_1('param');
var picture = phomo_1('picture');
var pre = phomo_1('pre');
var progress = phomo_1('progress');
var q = phomo_1('q');
var rb = phomo_1('rb');
var rp = phomo_1('rp');
var rt = phomo_1('rt');
var rtc = phomo_1('rtc');
var ruby = phomo_1('ruby');
var s = phomo_1('s');
var samp = phomo_1('samp');
var script = phomo_1('script');
var section = phomo_1('section');
var select = phomo_1('select');
var slot = phomo_1('slot');
var small = phomo_1('small');
var source = phomo_1('source');
var span = phomo_1('span');
var strong = phomo_1('strong');
var style = phomo_1('style');
var sub = phomo_1('sub');
var summary = phomo_1('summary');
var sup = phomo_1('sup');
var svg = phomo_1('svg');
var table = phomo_1('table');
var tbody = phomo_1('tbody');
var td = phomo_1('td');
var template = phomo_1('template');
var textarea = phomo_1('textarea');
var tfoot = phomo_1('tfoot');
var th = phomo_1('th');
var thead = phomo_1('thead');
var time = phomo_1('time');
var title = phomo_1('title');
var tr = phomo_1('tr');
var track = phomo_1('track');
var u = phomo_1('u');
var ul = phomo_1('ul');
var video = phomo_1('video');
var wbr = phomo_1('wbr');

export { a, abbr, address, area, article, aside, audio, b, base, bdi, bdo, blockquote, body, br, button, canvas, caption, cite, code, col, colgroup, data, datalist, dd, del, details, dfn, dialog, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, kbd, keygen, label, legend, li, link, main, map, mark, math, menu, menuitem, meta, meter, nav, noscript, object, ol, optgroup, option, output, p, param, picture, pre, progress, q, rb, rp, rt, rtc, ruby, s, samp, script, section, select, slot, small, source, span, strong, style, sub, summary, sup, svg, table, tbody, td, template, textarea, tfoot, th, thead, time, title, tr, track, u, ul, video, wbr };
//# sourceMappingURL=phomo-html.module.js.map
