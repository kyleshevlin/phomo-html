(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['phomo-html'] = {})));
}(this, (function (exports) { 'use strict';

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

exports.a = a;
exports.abbr = abbr;
exports.address = address;
exports.area = area;
exports.article = article;
exports.aside = aside;
exports.audio = audio;
exports.b = b;
exports.base = base;
exports.bdi = bdi;
exports.bdo = bdo;
exports.blockquote = blockquote;
exports.body = body;
exports.br = br;
exports.button = button;
exports.canvas = canvas;
exports.caption = caption;
exports.cite = cite;
exports.code = code;
exports.col = col;
exports.colgroup = colgroup;
exports.data = data;
exports.datalist = datalist;
exports.dd = dd;
exports.del = del;
exports.details = details;
exports.dfn = dfn;
exports.dialog = dialog;
exports.div = div;
exports.dl = dl;
exports.dt = dt;
exports.em = em;
exports.embed = embed;
exports.fieldset = fieldset;
exports.figcaption = figcaption;
exports.figure = figure;
exports.footer = footer;
exports.form = form;
exports.h1 = h1;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.h5 = h5;
exports.h6 = h6;
exports.head = head;
exports.header = header;
exports.hgroup = hgroup;
exports.hr = hr;
exports.html = html;
exports.i = i;
exports.iframe = iframe;
exports.img = img;
exports.input = input;
exports.ins = ins;
exports.kbd = kbd;
exports.keygen = keygen;
exports.label = label;
exports.legend = legend;
exports.li = li;
exports.link = link;
exports.main = main;
exports.map = map;
exports.mark = mark;
exports.math = math;
exports.menu = menu;
exports.menuitem = menuitem;
exports.meta = meta;
exports.meter = meter;
exports.nav = nav;
exports.noscript = noscript;
exports.object = object;
exports.ol = ol;
exports.optgroup = optgroup;
exports.option = option;
exports.output = output;
exports.p = p;
exports.param = param;
exports.picture = picture;
exports.pre = pre;
exports.progress = progress;
exports.q = q;
exports.rb = rb;
exports.rp = rp;
exports.rt = rt;
exports.rtc = rtc;
exports.ruby = ruby;
exports.s = s;
exports.samp = samp;
exports.script = script;
exports.section = section;
exports.select = select;
exports.slot = slot;
exports.small = small;
exports.source = source;
exports.span = span;
exports.strong = strong;
exports.style = style;
exports.sub = sub;
exports.summary = summary;
exports.sup = sup;
exports.svg = svg;
exports.table = table;
exports.tbody = tbody;
exports.td = td;
exports.template = template;
exports.textarea = textarea;
exports.tfoot = tfoot;
exports.th = th;
exports.thead = thead;
exports.time = time;
exports.title = title;
exports.tr = tr;
exports.track = track;
exports.u = u;
exports.ul = ul;
exports.video = video;
exports.wbr = wbr;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=phomo-html.umd.js.map
