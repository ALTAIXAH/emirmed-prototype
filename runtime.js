/* EMIRMED prototype runtime: renders each screen's template with React and the EmirMed components. */
(function () {
  var R = window.React, RD = window.ReactDOM, h = R.createElement;
  class DCLogic extends R.Component {}
  window.DCLogic = DCLogic;

  var ONE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  var ANY = /\{\{\s*([^}]+?)\s*\}\}/g;
  var SVG = 'http://www.w3.org/2000/svg';
  var EVENTS = { onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onkeydown: 'onKeyDown', onfocus: 'onFocus', onblur: 'onBlur', onsubmit: 'onSubmit' };
  var RENAME = { 'class': 'className', 'for': 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', srcset: 'srcSet', crossorigin: 'crossOrigin', viewbox: 'viewBox' };

  function look(vals, path) {
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return Number(path);
    if (/^'[^']*'$/.test(path) || /^"[^"]*"$/.test(path)) return path.slice(1, -1);
    return path.split('.').reduce(function (o, k) { return o == null ? undefined : o[k]; }, vals);
  }
  function val(str, vals) {
    var m = str.match(ONE);
    if (m) return look(vals, m[1]);
    if (str.indexOf('{{') < 0) return str;
    return str.replace(ANY, function (_, p) { var v = look(vals, p); return v == null ? '' : String(v); });
  }
  function camel(s) { return s.replace(/-([a-z0-9])/g, function (_, c) { return c.toUpperCase(); }); }
  function styleObj(s) {
    var o = {};
    s.split(';').forEach(function (d) {
      var i = d.indexOf(':');
      if (i < 0) return;
      var k = d.slice(0, i).trim();
      if (k) o[k.indexOf('--') === 0 ? k : camel(k)] = d.slice(i + 1).trim();
    });
    return o;
  }
  function kids(node, vals, key) {
    var out = [];
    node.childNodes.forEach(function (c, i) {
      var r = build(c, vals, key + '.' + i);
      if (r == null) return;
      if (Array.isArray(r)) out.push.apply(out, r); else out.push(r);
    });
    return out;
  }
  function make(type, props, ch) { return ch.length ? h.apply(null, [type, props].concat(ch)) : h(type, props); }
  function build(node, vals, key) {
    if (node.nodeType === 3) {
      var t = node.nodeValue;
      if (!t.trim()) return t.indexOf('\n') >= 0 ? null : t;
      var v = val(t, vals);
      return v == null ? null : String(v);
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'helmet') return null;
    if (tag === 'sc-for') {
      var list = val(node.getAttribute('list') || '', vals) || [];
      var as = node.getAttribute('as') || 'item';
      return list.map(function (item, i) {
        var v2 = Object.create(vals); v2[as] = item; v2.$index = i;
        return make(R.Fragment, { key: key + ':' + i }, kids(node, v2, key + ':' + i));
      });
    }
    if (tag === 'sc-if') {
      return val(node.getAttribute('value') || '', vals) ? make(R.Fragment, { key: key }, kids(node, vals, key)) : null;
    }
    var props = { key: key }, a, n, v, i;
    if (tag === 'x-import') {
      var name = node.getAttribute('component-from-global-scope') || '';
      var Comp = name.split('.').reduce(function (o, k) { return o ? o[k] : undefined; }, window);
      for (i = 0; i < node.attributes.length; i++) {
        a = node.attributes[i];
        if (a.name === 'component-from-global-scope') continue;
        n = a.name.indexOf('aria-') === 0 || a.name.indexOf('data-') === 0 ? a.name : (a.name === 'class' ? 'className' : camel(a.name));
        v = val(a.value, vals);
        if (n === 'style' && typeof v === 'string') v = styleObj(v);
        props[n] = v;
      }
      if (!Comp) return h('span', { key: key, 'data-missing': name });
      return make(Comp, props, kids(node, vals, key));
    }
    var isSvg = node.namespaceURI === SVG;
    for (i = 0; i < node.attributes.length; i++) {
      a = node.attributes[i];
      n = a.name; v = val(a.value, vals);
      if (v === undefined) continue;
      if (n === 'style') { if (typeof v === 'string') v = styleObj(v); }
      else if (EVENTS[n]) n = EVENTS[n];
      else if (RENAME[n]) n = RENAME[n];
      else if (n.indexOf('aria-') === 0 || n.indexOf('data-') === 0 || n === 'ref') { }
      else if (isSvg && n.indexOf('-') > 0) n = camel(n);
      props[n] = v;
    }
    return make(tag, props, kids(node, vals, key));
  }

  function boot() {
    var tpl = document.getElementById('dc');
    if (!tpl) return;
    var root = tpl.content;
    var helmet = root.querySelector('helmet');
    if (helmet) helmet.querySelectorAll('style').forEach(function (s) { document.head.appendChild(s.cloneNode(true)); });
    var src = document.querySelector('script[data-dc-script]');
    var Component = src ? new Function('DCLogic', 'React', src.textContent + '\nreturn Component;')(DCLogic, R) : DCLogic;
    class Page extends Component {
      render() {
        var vals = (typeof this.renderVals === 'function' ? this.renderVals() : null) || {};
        return make(R.Fragment, null, kids(root, vals, 'r'));
      }
    }
    var mount = document.createElement('div');
    mount.id = 'dc-root';
    tpl.parentNode.insertBefore(mount, tpl);
    RD.createRoot(mount).render(h(Page, {}));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
