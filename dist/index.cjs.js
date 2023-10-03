'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SvgIcon({ iconName, size = "24px", className = "", onClick }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("span", { onClick: onClick, className: `material-symbols-outlined ${className}`, style: { fontSize: size } }, iconName)));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$s = ".styles-module_container__3IVfB {\n  margin-top: 40px;\n  background: white;\n  border-radius: 30px;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__3IVfB .styles-module_head__xFYQb {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 16px 20px;\n  color: grey;\n  background: #F1F1F1;\n  border-radius: 30px;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  transition: 0.2s ease-in-out;\n  gap: 10px;\n}\n.styles-module_container__3IVfB .styles-module_head__xFYQb span {\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__3IVfB .styles-module_head__xFYQb h3 {\n  margin: 0;\n  font-weight: 400;\n  font-size: 16px;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.styles-module_container__3IVfB .styles-module_head__xFYQb:hover {\n  background: #e2e2e2;\n}\n.styles-module_container__3IVfB.styles-module_active__soD8R {\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n}\n.styles-module_container__3IVfB.styles-module_active__soD8R .styles-module_head__xFYQb span {\n  rotate: 180deg;\n}\n.styles-module_container__3IVfB .styles-module_content__XAf02 {\n  transition: all 0.3s ease-in-out;\n  line-height: 1.5;\n}\n.styles-module_container__3IVfB.styles-module_not_active__JcVLz .styles-module_content__XAf02 {\n  height: 0;\n  max-height: 0;\n  overflow: hidden;\n  opacity: 0;\n}\n.styles-module_container__3IVfB.styles-module_active__soD8R .styles-module_content__XAf02 {\n  max-height: auto;\n  overflow: visible;\n  opacity: 1;\n  padding: 10px 0px;\n}";
var styles$s = {"container":"styles-module_container__3IVfB","head":"styles-module_head__xFYQb","active":"styles-module_active__soD8R","content":"styles-module_content__XAf02","not_active":"styles-module_not_active__JcVLz"};
styleInject(css_248z$s);

function Accordeon({ title, children }) {
    const [isActive, setActive] = React.useState(false);
    return (React__default["default"].createElement("div", { className: [styles$s.container, isActive ? styles$s.active : styles$s.not_active].join(" ") },
        React__default["default"].createElement("div", { className: styles$s.head, onClick: () => setActive(!isActive) },
            React__default["default"].createElement(SvgIcon, { iconName: "expand_more" }),
            React__default["default"].createElement("h3", null, title)),
        React__default["default"].createElement("div", { className: styles$s.content }, children)));
}

var css_248z$r = ".styles-module_container__4978M {\n  max-width: 100%;\n  width: 350px;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n}\n.styles-module_container__4978M.styles-module_visible__uvQwq {\n  max-height: 100px;\n  opacity: 1;\n}\n.styles-module_container__4978M.styles-module_hidden__Oruyx {\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n}\n\n.styles-module_container__4978M.styles-module_rotate__mmYPQ .styles-module_button__BWOOi:hover span {\n  rotate: -45deg;\n}\n\n.styles-module_button__BWOOi {\n  padding: 12px 20px;\n  background: linear-gradient(60deg, #0075FF, #0056b8);\n  background-position-x: right;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n  gap: 10px;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n.styles-module_button__BWOOi span {\n  transition: 0.1s ease-in-out;\n}\n.styles-module_button__BWOOi:hover {\n  background-position-x: left;\n}\n.styles-module_button__BWOOi.styles-module_secondary__Eoik3 {\n  background: white;\n  color: #0075FF;\n  border: 1px solid #0075FF;\n}\n.styles-module_button__BWOOi.styles-module_secondary__Eoik3 svg {\n  fill: #0075FF;\n}";
var styles$r = {"container":"styles-module_container__4978M","visible":"styles-module_visible__uvQwq","hidden":"styles-module_hidden__Oruyx","rotate":"styles-module_rotate__mmYPQ","button":"styles-module_button__BWOOi","secondary":"styles-module_secondary__Eoik3"};
styleInject(css_248z$r);

function AuthButton({ text, type = "submit", theme = "primary", iconName = "arrow_forward", isVisible = true, onClick = (event) => { } }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: [styles$r.container, isVisible ? styles$r.visible : styles$r.hidden, ["arrow_forward"].includes(iconName) ? styles$r.rotate : null].join(" ") },
            React__default["default"].createElement("button", { type: type, className: `${styles$r.button} ${styles$r[theme]}`, onClick: onClick },
                text,
                React__default["default"].createElement(SvgIcon, { iconName: iconName })))));
}

var css_248z$q = ".styles-module_card__bOd85 {\n  background: #F4F4F4;\n  border: 1px solid #B1B1B1;\n  border-radius: 18px;\n  transition: 0.2s ease;\n  padding: 18px 14px;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);\n  cursor: pointer;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding-top: 30px;\n}\n.styles-module_card__bOd85 svg {\n  width: 35px;\n  height: 35px;\n  fill: grey;\n}\n.styles-module_card__bOd85:hover {\n  transform: scale(1.01);\n  box-shadow: none;\n  background: none;\n}\n.styles-module_card__bOd85 h2 {\n  margin-top: 0;\n  color: grey;\n  font-weight: 400;\n  font-size: 18px;\n}";
var styles$q = {"card":"styles-module_card__bOd85"};
styleInject(css_248z$q);

function CardButton({ title, iconName, onClick, }) {
    function onClickCard(event) {
        event.preventDefault();
        if (onClick)
            onClick(event);
    }
    return (React__default["default"].createElement("div", { className: styles$q.card, onClick: onClickCard },
        React__default["default"].createElement(SvgIcon, { iconName: iconName }),
        React__default["default"].createElement("h2", null, title)));
}

var css_248z$p = ".styles-module_container__gCCnD {\n  margin-bottom: 20px;\n  width: 343px;\n  color: grey;\n}\n.styles-module_container__gCCnD [type=checkbox] {\n  position: relative;\n  left: 15px;\n  top: -4px;\n  z-index: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  margin-left: -3.5px;\n}\n.styles-module_container__gCCnD [type=checkbox] + label {\n  position: absolute;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.styles-module_container__gCCnD [type=checkbox] + label::before {\n  width: 17px;\n  height: 17px;\n  border-radius: 5px;\n  border: 2px solid #a8a8a8;\n  display: block;\n  content: \"\";\n  float: left;\n  margin-right: 8px;\n  z-index: 5;\n  position: relative;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__gCCnD span {\n  position: absolute;\n  opacity: 1;\n  color: white;\n  z-index: 100;\n  user-select: none;\n  pointer-events: none;\n  -webkit-user-select: none;\n  font-weight: 300;\n}\n.styles-module_container__gCCnD [type=checkbox]:checked + label::before {\n  background-color: #0075FF;\n  border-color: #0075FF;\n}\n.styles-module_container__gCCnD [type=checkbox]:hover:not(:checked) + label::before {\n  background-color: #ecedee;\n  border-color: #ecedee;\n}";
var styles$p = {"container":"styles-module_container__gCCnD"};
styleInject(css_248z$p);

function Checkbox({ text, name, defaultChecked }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$p.container },
            React__default["default"].createElement("input", { type: "checkbox", name: name, id: name, defaultChecked: defaultChecked }),
            React__default["default"].createElement("label", { htmlFor: name }, text),
            React__default["default"].createElement(SvgIcon, { iconName: "done", size: "21px" }))));
}

var css_248z$o = ".styles-module_container__OqDNA {\n  display: flex;\n  flex-direction: row;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI:nth-child(1) {\n  background: #F0F0F0;\n  border-color: #F0F0F0;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI:nth-child(2) {\n  background: #E0E0E0;\n  border-color: #E0E0E0;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI:nth-child(3) {\n  background: #CBCBCB;\n  border-color: #CBCBCB;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI:first-child {\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI:last-child {\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI {\n  border: 1px solid transparent;\n  padding: 11px 18px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.styles-module_container__OqDNA .styles-module_item__1SMCI.styles-module_selected__AXIA- {\n  background: #C6D4F8;\n  border-color: #0075FF;\n  color: #0075FF;\n}";
var styles$o = {"container":"styles-module_container__OqDNA","item":"styles-module_item__1SMCI","selected":"styles-module_selected__AXIA-"};
styleInject(css_248z$o);

class ChooseRoleItem {
    title;
    value;
    constructor(title, value) {
        this.title = title;
        this.value = value;
    }
}
function ChooseRole({ roles, defaultSelected, readOnly = false, onChange }) {
    const [selected, setSelected] = React.useState(defaultSelected);
    function onUpdate(newRole) {
        if (readOnly)
            return;
        setSelected(newRole);
        onChange(newRole);
    }
    return (React__default["default"].createElement("div", { className: styles$o.container }, roles.map((item, index) => React__default["default"].createElement("div", { key: index, className: [styles$o.item, selected == item.value ? styles$o.selected : styles$o.not_selected].join(" "), onClick: () => onUpdate(item.value) }, item.title))));
}

var css_248z$n = ".styles-module_container__yV6C8 {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n  cursor: pointer;\n  padding: 8px 14px;\n  border-radius: 30px;\n  transition: 0.2s ease-in-out;\n  margin-bottom: 20px;\n}\n.styles-module_container__yV6C8:hover {\n  color: #0075FF;\n}";
var styles$n = {"container":"styles-module_container__yV6C8"};
styleInject(css_248z$n);

function CopyCode({ code, style, onCopy = () => { } }) {
    function onClick() {
        navigator.clipboard.writeText(code);
        if (onCopy)
            onCopy();
    }
    return (React__default["default"].createElement("div", { className: styles$n.container, onClick: onClick, style: style },
        React__default["default"].createElement(SvgIcon, { iconName: "content_copy" }),
        React__default["default"].createElement("span", null, code),
        React__default["default"].createElement("input", { type: "hidden", name: "code", value: code })));
}

var css_248z$m = ".styles-module_container__9-1MH {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(255, 255, 255, 0.659);\n  backdrop-filter: blur(10px) brightness(70%);\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.styles-module_container__9-1MH.styles-module_active__AXoyo {\n  opacity: 1;\n}\n.styles-module_container__9-1MH.styles-module_disabled__sELpy {\n  pointer-events: none;\n  opacity: 0;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M {\n  background: white;\n  border-radius: 20px;\n  padding: 35px;\n  width: 450px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-width: 100%;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  cursor: auto;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M h1 {\n  font-size: 26px;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M .styles-module_cancel_button__KhwLS {\n  border-radius: 12px;\n  background: #DADADA;\n  padding: 14px 0px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M .styles-module_cancel_button__KhwLS:hover {\n  background: #cbcbcb;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M .styles-module_submit_button__xLzux {\n  border-radius: 12px;\n  color: white;\n  background: #0075FF;\n  padding: 14px 0px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M .styles-module_submit_button__xLzux:hover {\n  background: #006ce8;\n}";
var styles$m = {"container":"styles-module_container__9-1MH","active":"styles-module_active__AXoyo","disabled":"styles-module_disabled__sELpy","dialog_window":"styles-module_dialog_window__0Bn2M","cancel_button":"styles-module_cancel_button__KhwLS","submit_button":"styles-module_submit_button__xLzux"};
styleInject(css_248z$m);

function Dialog({ data, text, onClose = (event, data) => { }, onSubmit = (event, data) => { }, children = null }) {
    function onClick(event) {
        if (event.target.id == 'dialog-backdrop' || event.target.id == 'cancel-button') {
            if (data)
                onClose(event, data.data);
        }
    }
    return (React__default["default"].createElement("div", { id: "dialog-backdrop", className: `${styles$m.container} ${data?.isActive ? styles$m.active : styles$m.disabled}`, onClick: onClick },
        React__default["default"].createElement("div", { className: styles$m.dialog_window },
            children,
            React__default["default"].createElement("h1", null, text),
            React__default["default"].createElement("button", { className: styles$m.cancel_button, id: "cancel-button", onClick: onClick }, "Abbrechen"),
            React__default["default"].createElement("button", { className: styles$m.submit_button, id: "submit-button", onClick: (event) => onSubmit(event, data?.data) }, "Best\u00E4tigen"))));
}

var css_248z$l = ".styles-module_container__HOoBj {\n  margin-bottom: 30px;\n}\n.styles-module_container__HOoBj button {\n  padding: 12px 18px;\n  border-radius: 40px;\n  border: none;\n  color: white;\n  font-size: 16px;\n  background: #0075FF;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  align-items: center;\n}";
var styles$l = {"container":"styles-module_container__HOoBj"};
styleInject(css_248z$l);

function FormButton({ text, style = {}, iconName = "", onClick = (event) => { } }) {
    return (React__default["default"].createElement("div", { className: styles$l.container, style: style },
        React__default["default"].createElement("button", { type: "submit", onClick: onClick },
            text,
            iconName && React__default["default"].createElement(SvgIcon, { iconName: iconName, fill: "white" }))));
}

var css_248z$k = ".styles-module_container__9wYEm {\n  margin-bottom: 30px;\n  width: 100%;\n}\n.styles-module_container__9wYEm h1,\n.styles-module_container__9wYEm h2,\n.styles-module_container__9wYEm h3,\n.styles-module_container__9wYEm h4,\n.styles-module_container__9wYEm h5 {\n  margin: 0;\n  font-weight: 400;\n  color: black;\n}\n.styles-module_container__9wYEm h3 {\n  margin-top: 5px;\n}";
var styles$k = {"container":"styles-module_container__9wYEm"};
styleInject(css_248z$k);

function FormText({ title, value, style }) {
    return (React__default["default"].createElement("div", { className: styles$k.container, style: style },
        React__default["default"].createElement("h5", null, title),
        React__default["default"].createElement("h3", null, value)));
}

var css_248z$j = ".styles-module_container__C99XV {\n  margin-right: 8px;\n}\n.styles-module_container__C99XV .styles-module_button__pGYkF {\n  background: none;\n  padding: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  transition: 0.2s;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n}\n.styles-module_container__C99XV .styles-module_button__pGYkF:hover {\n  background: rgb(207, 207, 207);\n}";
var styles$j = {"container":"styles-module_container__C99XV","button":"styles-module_button__pGYkF"};
styleInject(css_248z$j);

function ForwardButton({ onClick }) {
    function onClickButton(event) {
        event.preventDefault();
        if (onClick)
            onClick(event);
    }
    return (React__default["default"].createElement("div", { className: styles$j.container },
        React__default["default"].createElement("button", { onClick: onClickButton, className: styles$j.button },
            React__default["default"].createElement(SvgIcon, { iconName: "arrow_back" }))));
}

function Gap({ size }) {
    return (React__default["default"].createElement("div", { style: { height: size } }));
}

var css_248z$i = ".styles-module_input__-GKhx {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n}\n.styles-module_input__-GKhx:focus, .styles-module_input__-GKhx:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n.styles-module_input__-GKhx.styles-module_not_available__XD1kR, .styles-module_input__-GKhx:invalid {\n  border-color: #e50000;\n  box-shadow: 0px 0px 3px 3px rgba(255, 0, 0, 0.2509803922);\n}\n\n/* animated title */\n.styles-module_container__--4rV {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n\n.styles-module_label__mGzwP {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__d0eMb {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__-GKhx.styles-module_with_title__CGOEs::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__-GKhx.styles-module_with_title__CGOEs:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__-GKhx:focus + .styles-module_label__mGzwP .styles-module_label_text__d0eMb,\n.styles-module_input__-GKhx.styles-module_valid__uj8g- + .styles-module_label__mGzwP .styles-module_label_text__d0eMb {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__-GKhx.styles-module_valid__uj8g- + .styles-module_label__mGzwP .styles-module_label_text__d0eMb {\n  color: #a8a8a8;\n}";
var styles$i = {"input":"styles-module_input__-GKhx","not_available":"styles-module_not_available__XD1kR","container":"styles-module_container__--4rV","label":"styles-module_label__mGzwP","label_text":"styles-module_label_text__d0eMb","with_title":"styles-module_with_title__CGOEs","valid":"styles-module_valid__uj8g-"};
styleInject(css_248z$i);

function InputMail({ placeholder = "E-Mail-Adresse", title = "E-Mail-Adresse", name = "email", width = "100%", available = true }) {
    const [value, setValue] = React.useState("");
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$i.container, style: { width: width } },
            React__default["default"].createElement("input", { className: `${styles$i.input} ${title != undefined ? styles$i.with_title : styles$i.without_title} ${value.length > 0 ? styles$i.valid : styles$i.not_valid} ${available ? styles$i.available : styles$i.not_available}`, name: name, placeholder: placeholder, type: "email", onInput: (event) => setValue(event.target.value) }),
            React__default["default"].createElement("label", { htmlFor: "text", className: styles$i.label },
                React__default["default"].createElement("span", { className: styles$i.label_text }, title)))));
}

var css_248z$h = ".styles-module_container__IXTeq {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.styles-module_input__flMT5 {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  flex: 1;\n}\n.styles-module_input__flMT5:focus, .styles-module_input__flMT5:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n/* animated title */\n.styles-module_form__chEvQ {\n  position: relative;\n  flex: 1;\n  display: flex;\n}\n\n.styles-module_label__hflX9 {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__oXgFI {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__flMT5.styles-module_with_title__ubN0L::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__flMT5.styles-module_with_title__ubN0L:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__flMT5:focus + .styles-module_label__hflX9 .styles-module_label_text__oXgFI,\n.styles-module_input__flMT5.styles-module_valid__76xYu + .styles-module_label__hflX9 .styles-module_label_text__oXgFI {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__flMT5.styles-module_valid__76xYu + .styles-module_label__hflX9 .styles-module_label_text__oXgFI {\n  color: #a8a8a8;\n}";
var styles$h = {"container":"styles-module_container__IXTeq","input":"styles-module_input__flMT5","form":"styles-module_form__chEvQ","label":"styles-module_label__hflX9","label_text":"styles-module_label_text__oXgFI","with_title":"styles-module_with_title__ubN0L","valid":"styles-module_valid__76xYu"};
styleInject(css_248z$h);

function InputNames({ width = "100%", placeholder = { firstName: "", lastName: "" }, title = { firstName: "Vorname", lastName: "Nachname" }, onInput = (name, event) => { }, onInputFirstName = (event) => { }, onInputLastName = (event) => { }, }) {
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    function onInput1(event) {
        setValue1(event.target.value);
        onInputFirstName(event);
        onInput("firstName", event);
    }
    function onInput2(event) {
        setValue2(event.target.value);
        onInputLastName(event);
        onInput("lastName", event);
    }
    return (React__default["default"].createElement("div", { className: styles$h.container, style: { width: width } },
        React__default["default"].createElement("div", { className: styles$h.form },
            React__default["default"].createElement("input", { className: `${styles$h.input} ${title.firstName != undefined ? styles$h.with_title : styles$h.without_title} ${value1.length > 0 ? styles$h.valid : styles$h.not_valid}`, name: "firstName", type: "name", style: { width: width != "100%" ? "100px" : width }, placeholder: placeholder.firstName, onInput: onInput1 }),
            React__default["default"].createElement("label", { htmlFor: "text", className: styles$h.label },
                React__default["default"].createElement("span", { className: styles$h.label_text }, title.firstName))),
        React__default["default"].createElement("div", { className: styles$h.form },
            React__default["default"].createElement("input", { className: `${styles$h.input} ${title.lastName != undefined ? styles$h.with_title : styles$h.without_title} ${value2.length > 0 ? styles$h.valid : styles$h.not_valid}`, name: "lastName", type: "name", style: { width: width != "100%" ? "100px" : width }, placeholder: placeholder.lastName, onInput: onInput2 }),
            React__default["default"].createElement("label", { htmlFor: "text", className: styles$h.label },
                React__default["default"].createElement("span", { className: styles$h.label_text }, title.lastName)))));
}

var css_248z$g = ".styles-module_container__Xk2HY {\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.styles-module_input__ReFFR {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  flex: 1;\n  width: 100%;\n}\n.styles-module_input__ReFFR:focus, .styles-module_input__ReFFR:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n.styles-module_input__ReFFR.styles-module_not_available__mZ5-1 {\n  border-color: #e50000;\n  box-shadow: 0px 0px 3px 3px rgba(255, 0, 0, 0.2509803922);\n}\n\n/* animated title */\n.styles-module_container__Xk2HY {\n  position: relative;\n}\n\n.styles-module_label__4n2Ai {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__NsKJU {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__ReFFR.styles-module_with_title__vMb1v::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__ReFFR.styles-module_with_title__vMb1v:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__ReFFR:focus + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU,\n.styles-module_input__ReFFR.styles-module_valid__NyP0J + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__ReFFR.styles-module_valid__NyP0J + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU {\n  color: #a8a8a8;\n}";
var styles$g = {"container":"styles-module_container__Xk2HY","input":"styles-module_input__ReFFR","not_available":"styles-module_not_available__mZ5-1","label":"styles-module_label__4n2Ai","label_text":"styles-module_label_text__NsKJU","with_title":"styles-module_with_title__vMb1v","valid":"styles-module_valid__NyP0J"};
styleInject(css_248z$g);

function InputNumber({ title, name, placeholder = "", defaultValue = "", autoFocus = false, type = "number", width = "100%", available = true, onInput = (event) => { } }) {
    const [value, setValue] = React.useState(defaultValue);
    const inputElement = React.useCallback((element) => {
        if (element && autoFocus)
            element.focus();
    }, [autoFocus]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$g.container, style: { width } },
            React__default["default"].createElement("input", { className: `${styles$g.input} ${title != undefined ? styles$g.with_title : styles$g.without_title} ${value.length > 0 || defaultValue.length > 0 ? styles$g.valid : styles$g.not_valid} ${available ? styles$g.available : styles$g.not_available}`, name: name, type: type, placeholder: placeholder, ref: inputElement, defaultValue: defaultValue, onInput: (event) => {
                    setValue(event.target.value);
                    onInput(event);
                } }),
            React__default["default"].createElement("label", { htmlFor: "text", className: styles$g.label },
                React__default["default"].createElement("span", { className: styles$g.label_text }, title)))));
}

var css_248z$f = "@keyframes styles-module_show__OLTZH {\n  from {\n    max-heigth: 0px;\n    height: 0px;\n  }\n}\n@keyframes styles-module_hide__LAgaY {\n  from {\n    max-heigth: 0px;\n    height: 0px;\n  }\n  to {\n    max-height: fit-content;\n  }\n}\n.styles-module_container__UdmOO {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 30px;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n}\n.styles-module_container__UdmOO .styles-module_forgot_label__EeN6a {\n  font-size: 12px;\n  color: grey;\n}\n.styles-module_container__UdmOO.styles-module_visible__QROqh {\n  max-height: 100px;\n  opacity: 1;\n}\n.styles-module_container__UdmOO.styles-module_hidden__hDKDO {\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n}\n\n.styles-module_input__sC2fP {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  border-right: none;\n  outline: none;\n  transition: all 0.2s ease;\n  flex: 1;\n}\n.styles-module_input__sC2fP:focus, .styles-module_input__sC2fP:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n.styles-module_hideButton__83mRI {\n  outline: none;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border: 1.5px solid #a8a8a8;\n  border-left: none;\n  background: none;\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  cursor: pointer;\n}\n.styles-module_hideButton__83mRI span {\n  color: grey;\n}\n\n/* animated title */\n.styles-module_form__m866x {\n  position: relative;\n  display: flex;\n}\n\n.styles-module_label__8PuaL {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__FwJ1F {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__sC2fP.styles-module_with_title__dftgq::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__sC2fP.styles-module_with_title__dftgq:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__sC2fP:focus + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F,\n.styles-module_input__sC2fP.styles-module_valid__SM7w5 + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__sC2fP.styles-module_valid__SM7w5 + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F {\n  color: #a8a8a8;\n}";
var styles$f = {"container":"styles-module_container__UdmOO","forgot_label":"styles-module_forgot_label__EeN6a","visible":"styles-module_visible__QROqh","hidden":"styles-module_hidden__hDKDO","input":"styles-module_input__sC2fP","hideButton":"styles-module_hideButton__83mRI","form":"styles-module_form__m866x","label":"styles-module_label__8PuaL","label_text":"styles-module_label_text__FwJ1F","with_title":"styles-module_with_title__dftgq","valid":"styles-module_valid__SM7w5","show":"styles-module_show__OLTZH","hide":"styles-module_hide__LAgaY"};
styleInject(css_248z$f);

function InputPassword({ placeholder = "", title = "Passwort", name, isVisible = true, width = "100%", autoComplete, forgotLink = false }) {
    const [value, setValue] = React.useState("");
    const [hidePassword, setHidePassword] = React.useState(true);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: `${styles$f.container} ${isVisible ? styles$f.visible : styles$f.hidden}`, style: { width: width } },
            React__default["default"].createElement("div", { className: styles$f.form },
                React__default["default"].createElement("input", { className: `${styles$f.input} ${title != undefined ? styles$f.with_title : styles$f.without_title} ${value.length > 0 ? styles$f.valid : styles$f.not_valid}`, name: name, minLength: 8, autoComplete: autoComplete, placeholder: placeholder, type: hidePassword ? "password" : "text", onInput: (event) => setValue(event.target.value) }),
                React__default["default"].createElement("label", { htmlFor: "text", className: styles$f.label },
                    React__default["default"].createElement("span", { className: styles$f.label_text }, title)),
                React__default["default"].createElement("button", { title: hidePassword ? "Passwort anzeigen" : "Passwort verstecken", className: styles$f.hideButton, onClick: () => setHidePassword(!hidePassword), type: "button" },
                    React__default["default"].createElement(SvgIcon, { iconName: hidePassword ? "visibility" : "visibility_off" }))),
            forgotLink &&
                React__default["default"].createElement("div", { className: styles$f.forgot_container }, forgotLink))));
}

var css_248z$e = ".styles-module_container__--NO0 {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  margin-bottom: 20px;\n}\n.styles-module_container__--NO0 button {\n  background: transparent;\n  color: #0075FF;\n  border: none;\n  font-size: 14px;\n  cursor: pointer;\n}\n\n.styles-module_input_wrapper__LPIk1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n}\n\n.styles-module_input__84v36 {\n  padding: 14px 10px;\n  width: 30px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  text-align: center;\n  font-size: 18px;\n}\n.styles-module_input__84v36:focus, .styles-module_input__84v36:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n.styles-module_input__84v36:nth-child(3) {\n  margin-right: 25px;\n}\n\n.styles-module_input__84v36::placeholder,\n.styles-module_input__84v36:-ms-input-placeholder,\n.styles-module_input__84v36::-ms-input-placeholder {\n  letter-spacing: 0px !important;\n}";
var styles$e = {"container":"styles-module_container__--NO0","input_wrapper":"styles-module_input_wrapper__LPIk1","input":"styles-module_input__84v36"};
styleInject(css_248z$e);

function InputPin({ name, length, onFinished = () => { } }) {
    const [state, setState] = React.useState({});
    const fieldRefs = React.useRef([]);
    fieldRefs.current = [...Array(length)].map((_, i) => fieldRefs.current[i] ?? React.createRef());
    function onChange(event, position) {
        const regex = /[0-9]+/;
        const value = event.target.value ? event.target.value.replace(" ", "") : "";
        if (value == '' || !regex.test(value))
            return;
        const digitCountBefore = state[position] == undefined ? 0 : String(state[position]).length;
        const addedDigitsCount = value.length - digitCountBefore;
        // One digit was added
        if (addedDigitsCount == 1) {
            fieldRefs.current[(position + 1) % length].current.focus();
            setDigit(position, value.slice(-1));
            return;
        }
        const digits = value.split("");
        if (digitCountBefore == 1)
            digits.shift();
        let newState = { ...state };
        digits.forEach((digit, relativePosition) => {
            newState[relativePosition % length + position] = digit;
            fieldRefs.current[relativePosition % length + position].current.value = digit;
        });
        if (digits.length >= 6) {
            fieldRefs.current[length - 1].current.focus();
        }
        setState(newState);
    }
    function onKeyUp(event, position) {
        event.preventDefault();
        // Keys: Backspace, Arrow left
        if ([8, 37].includes(event.keyCode)) {
            fieldRefs.current[(((position) - 1) + length) % length].current.focus();
        }
        // Keys: Tab (automatically), Arrow Right
        if ([39].includes(event.keyCode)) {
            fieldRefs.current[(position + 1) % length].current.focus();
        }
    }
    function setDigit(position, digit) {
        fieldRefs.current[position % length].current.value = digit;
        setState({ ...state, [position % length]: digit });
    }
    function resetValues() {
        setState({});
        fieldRefs.current.forEach((ref) => {
            ref.current.value = "";
        });
    }
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$e.container },
            React__default["default"].createElement("input", { name: name, type: "hidden", defaultValue: Object.values(state).join("") }),
            React__default["default"].createElement("div", { className: styles$e.input_wrapper }, [...Array(length)].map((value, i) => {
                if (i == 0) {
                    return React__default["default"].createElement("input", { key: i, pattern: "[0-9]", value: state[i] ? state[i] : "", ref: fieldRefs.current[i], className: styles$e.input, type: "text", onKeyUp: (event) => onKeyUp(event, i), onInput: (event) => onChange(event, i) });
                }
                return React__default["default"].createElement("input", { key: i, pattern: "[0-9]", value: state[i] ? state[i] : "", ref: fieldRefs.current[i], className: styles$e.input, type: "text", onKeyUp: (event) => onKeyUp(event, i), onInput: (event) => onChange(event, i) });
            })),
            React__default["default"].createElement("button", { type: "button", onClick: resetValues }, "Zur\u00FCcksetzen"))));
}

var css_248z$d = ".styles-module_container__zcXGF {\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.styles-module_input__Tpth8 {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  flex: 1;\n}\n.styles-module_input__Tpth8:focus, .styles-module_input__Tpth8:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n.styles-module_input__Tpth8.styles-module_not_available__CRXjB, .styles-module_input__Tpth8:invalid {\n  border-color: #e50000;\n  box-shadow: 0px 0px 3px 3px rgba(255, 0, 0, 0.2509803922);\n}\n\n/* animated title */\n.styles-module_container__zcXGF {\n  position: relative;\n}\n\n.styles-module_label__appHO {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__-sKjY {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__Tpth8.styles-module_with_title__L3eGj::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__Tpth8.styles-module_with_title__L3eGj:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__Tpth8:focus + .styles-module_label__appHO .styles-module_label_text__-sKjY,\n.styles-module_input__Tpth8.styles-module_valid__zWcOz + .styles-module_label__appHO .styles-module_label_text__-sKjY {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__Tpth8.styles-module_valid__zWcOz + .styles-module_label__appHO .styles-module_label_text__-sKjY {\n  color: #a8a8a8;\n}";
var styles$d = {"container":"styles-module_container__zcXGF","input":"styles-module_input__Tpth8","not_available":"styles-module_not_available__CRXjB","label":"styles-module_label__appHO","label_text":"styles-module_label_text__-sKjY","with_title":"styles-module_with_title__L3eGj","valid":"styles-module_valid__zWcOz"};
styleInject(css_248z$d);

function InputText({ title, name, placeholder = "", defaultValue = "", autoFocus = false, type = "text", width = "100%", available = true, onInput = (event) => { } }) {
    const [value, setValue] = React.useState(defaultValue);
    const inputElement = React.useCallback((element) => {
        if (element && autoFocus)
            element.focus();
    }, [autoFocus]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$d.container, style: { width } },
            React__default["default"].createElement("input", { className: `${styles$d.input} ${title != undefined ? styles$d.with_title : styles$d.without_title} ${value.length > 0 || defaultValue.length > 0 ? styles$d.valid : styles$d.not_valid} ${available ? styles$d.available : styles$d.not_available}`, name: name, type: type, placeholder: placeholder, ref: inputElement, defaultValue: defaultValue, onInput: (event) => {
                    setValue(event.target.value);
                    onInput(event);
                } }),
            React__default["default"].createElement("label", { htmlFor: "text", className: styles$d.label },
                React__default["default"].createElement("span", { className: styles$d.label_text }, title)))));
}

var css_248z$c = ".styles-module_box__Z0iod {\n  background: #F4F4F4;\n  width: 400px;\n  max-width: 100%;\n  border-radius: 22px;\n  border: 1px solid rgb(199, 199, 199);\n  display: flex;\n  flex-direction: row;\n  padding: 18px;\n  gap: 18px;\n  cursor: pointer;\n  margin-bottom: 20px;\n  transition: 0.2s ease;\n  color: black;\n}\n.styles-module_box__Z0iod:hover {\n  /*.right_side {\n      h4, p {\n          color: #0075FF;\n      }\n  }*/\n  background-color: white;\n  transform: scale(1.01);\n  /* border-color: #0075FF; */\n}\n.styles-module_box__Z0iod .styles-module_left_side__8ObGs {\n  width: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 5px;\n}\n.styles-module_box__Z0iod .styles-module_right_side__Ypp0D {\n  flex: 1;\n}\n.styles-module_box__Z0iod .styles-module_right_side__Ypp0D p {\n  color: #6F6F6F;\n  margin: 0;\n  text-align: left;\n  font-size: 1.1rem;\n  line-height: 1.6;\n}\n.styles-module_box__Z0iod .styles-module_right_side__Ypp0D h4 {\n  margin: 0;\n  text-align: left;\n  font-size: 1.3rem;\n  margin-bottom: 16px;\n  margin-top: 5px;\n  color: black;\n}";
var styles$c = {"box":"styles-module_box__Z0iod","left_side":"styles-module_left_side__8ObGs","right_side":"styles-module_right_side__Ypp0D"};
styleInject(css_248z$c);

function OptionField({ headline, description, iconName }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$c.box },
            React__default["default"].createElement("div", { className: styles$c.left_side }, iconName && React__default["default"].createElement(SvgIcon, { iconName: iconName })),
            React__default["default"].createElement("div", { className: styles$c.right_side },
                React__default["default"].createElement("h4", null, headline),
                React__default["default"].createElement("p", null, description)))));
}

var css_248z$b = ".styles-module_container__XCtqW {\n  background: white;\n  border-radius: 12px;\n  padding: 30px;\n  margin-bottom: 30px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  color: black;\n  border: 1px solid #B1B1B1;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);\n}\n.styles-module_container__XCtqW:hover {\n  background: #f0f0f0;\n  border-color: #888888;\n}\n.styles-module_container__XCtqW h3 {\n  font-weight: 500;\n  margin: 0;\n}\n\n.styles-module_container__XCtqW.styles-module_preselected__WoSbB {\n  border: 1px solid black;\n}";
var styles$b = {"container":"styles-module_container__XCtqW","preselected":"styles-module_preselected__WoSbB"};
styleInject(css_248z$b);

function OptionFieldHorizontal({ title, iconName, preselected = false }) {
    return (React__default["default"].createElement("div", { className: [styles$b.container, preselected ? styles$b.preselected : styles$b.not_preselected].join(" ") },
        React__default["default"].createElement(SvgIcon, { iconName: iconName, size: "32px" }),
        React__default["default"].createElement("h3", null, title)));
}

var css_248z$a = ".styles-module_container__oNbrP .styles-module_button__UBk65 {\n  padding: 10px 18px;\n  background: #0075FF;\n  border-radius: 40px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  font-size: 15px;\n  color: white;\n  align-items: center;\n  border: none;\n}\n.styles-module_container__oNbrP .styles-module_button__UBk65.styles-module_red__CHF3e {\n  background: #e40000;\n}";
var styles$a = {"container":"styles-module_container__oNbrP","button":"styles-module_button__UBk65","red":"styles-module_red__CHF3e"};
styleInject(css_248z$a);

function PrimaryButton({ text, iconName, type = "blue", onClick = () => { } }) {
    function onClickButton(event) {
        event.preventDefault();
        if (onClick)
            onClick(event);
    }
    return (React__default["default"].createElement("div", { className: styles$a.container },
        React__default["default"].createElement("button", { className: `${styles$a.button} ${styles$a[type]}`, onClick: onClickButton },
            text,
            React__default["default"].createElement(SvgIcon, { iconName: iconName, fill: "white" }))));
}

var css_248z$9 = ".styles-module_container__u4q5n {\n  margin-bottom: 50px;\n}\n\n.styles-module_background__jt-ry {\n  background: #D9D9D9;\n  width: 400px;\n  max-width: 100%;\n  height: 3px;\n  position: relative;\n}\n\n.styles-module_progress__Zj-B7 {\n  background: black;\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 3px;\n}";
var styles$9 = {"container":"styles-module_container__u4q5n","background":"styles-module_background__jt-ry","progress":"styles-module_progress__Zj-B7"};
styleInject(css_248z$9);

function ProgressBar({ length, progress }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$9.container },
            React__default["default"].createElement("div", { className: styles$9.background },
                React__default["default"].createElement("div", { className: styles$9.progress, style: { width: `${progress / length * 100}%` } })))));
}

var css_248z$8 = ".styles-module_container__Grkzw {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  color: grey;\n  margin-bottom: 20px;\n}\n.styles-module_container__Grkzw [type=radio] {\n  position: relative;\n  left: 15px;\n  top: -4px;\n  z-index: 0;\n  appearance: none;\n  -webkit-appearance: none;\n  cursor: pointer;\n  margin-left: -3.5px;\n}\n.styles-module_container__Grkzw [type=radio] + label {\n  position: absolute;\n  cursor: pointer;\n}\n.styles-module_container__Grkzw [type=radio] + label::before {\n  width: 15px;\n  height: 15px;\n  border-radius: 20px;\n  border: 2px solid #a8a8a8;\n  display: block;\n  content: \"\";\n  float: left;\n  margin-right: 8px;\n  z-index: 5;\n  position: relative;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__Grkzw [type=radio]:checked + label::before {\n  box-shadow: inset 0px 0px 0px 3px #fff;\n  background-color: #0075FF;\n  border-color: #0075FF;\n}\n.styles-module_container__Grkzw [type=radio]:hover:not(:checked) + label::before {\n  box-shadow: inset 0px 0px 0px 3px #fff;\n  background-color: #bdbdbd;\n  border-color: #bdbdbd;\n}";
var styles$8 = {"container":"styles-module_container__Grkzw"};
styleInject(css_248z$8);

class RadioOption {
    text;
    name;
    constructor(text, name) {
        this.text = text;
        this.name = name;
    }
}
function RadioButtons({ options, group, selected, width = "100%" }) {
    const [selectedOption, setSelected] = React.useState(selected);
    function onUpdateSelected(event) {
        setSelected(event.target.value);
    }
    return (React__default["default"].createElement("div", { className: styles$8.container, style: { width: width } }, options.map((option) => React__default["default"].createElement("div", { className: styles$8.option, key: option.name },
        selected && selected == option.name ?
            React__default["default"].createElement("input", { type: "radio", id: option.name, name: group, value: option.name, onClick: onUpdateSelected, defaultChecked: true })
            :
                React__default["default"].createElement("input", { type: "radio", id: option.name, name: group, value: option.name, onClick: onUpdateSelected }),
        React__default["default"].createElement("label", { htmlFor: option.name }, option.text)))));
}

var css_248z$7 = ".styles-module_container__RhsQe {\n  margin-right: 8px;\n}\n.styles-module_container__RhsQe .styles-module_button__HuX-0 {\n  background: none;\n  padding: none;\n  border: none;\n  width: 40px;\n  height: 40px;\n  transition: 0.2s;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n}\n.styles-module_container__RhsQe .styles-module_button__HuX-0:hover {\n  background: rgb(207, 207, 207);\n}\n.styles-module_container__RhsQe.styles-module_middle__xg7RF .styles-module_button__HuX-0 {\n  flex-direction: row;\n  gap: 5px;\n}\n.styles-module_container__RhsQe.styles-module_middle__xg7RF .styles-module_button__HuX-0:hover {\n  background: none;\n}";
var styles$7 = {"container":"styles-module_container__RhsQe","button":"styles-module_button__HuX-0","middle":"styles-module_middle__xg7RF"};
styleInject(css_248z$7);

function RedirectButton({ type = "forward", onClick }) {
    function onClickButton(event) {
        event.preventDefault();
        if (onClick)
            onClick(event);
    }
    const getIcon = () => {
        switch (type) {
            case "forward": return "arrow_forward";
            case "back": return "arrow_back";
            case "middle": return "arrow_back";
        }
    };
    return (React__default["default"].createElement("div", { className: [styles$7.container, styles$7[type]].join(" ") },
        React__default["default"].createElement("button", { onClick: onClickButton, className: styles$7.button },
            React__default["default"].createElement(SvgIcon, { iconName: getIcon() }),
            ["middle"].includes(type) &&
                React__default["default"].createElement("span", null, "Zur\u00FCck"))));
}

var css_248z$6 = ".styles-module_container__VreeH {\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.styles-module_container__VreeH .styles-module_chip__EvZ4J {\n  padding: 10px 18px;\n  background: #F0F0F0;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  color: #565656;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__VreeH .styles-module_chip__EvZ4J:hover {\n  background: #e5e5e5;\n}\n.styles-module_container__VreeH .styles-module_chip__EvZ4J.styles-module_selected__sArTD {\n  background: #C6D4F8;\n  color: #0075FF;\n}\n.styles-module_container__VreeH .styles-module_chip__EvZ4J.styles-module_selected__sArTD span {\n  color: #0075FF;\n}";
var styles$6 = {"container":"styles-module_container__VreeH","chip":"styles-module_chip__EvZ4J","selected":"styles-module_selected__sArTD"};
styleInject(css_248z$6);

class SearchChip {
    title;
    value;
    selected = false;
    constructor(title, value) {
        this.title = title;
        this.value = value;
    }
}
function SearchChips({ items, onChange }) {
    const [chips, setChips] = React.useState(items);
    function onClick(item, index) {
        const newChips = [...chips];
        newChips[index] = { ...item, selected: !item.selected };
        setChips(newChips);
        if (onChange)
            onChange(newChips);
    }
    return (React__default["default"].createElement("div", { className: styles$6.container }, chips.map((item, index) => React__default["default"].createElement("div", { key: index, onClick: (e) => onClick(item, index), className: [styles$6.chip, item.selected ? styles$6.selected : styles$6.not_selected].join(" ") },
        React__default["default"].createElement(SvgIcon, { iconName: item.selected ? "close" : "filter_list", size: "20px" }),
        item.title))));
}

var css_248z$5 = ".styles-module_container__k4Z26 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  gap: 10px;\n  position: relative;\n}\n.styles-module_container__k4Z26 button {\n  background: #BFD5FF;\n  padding: 0px 18px;\n  border: none;\n  font-size: 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #0075FF;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ-,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om {\n  display: none;\n  position: absolute;\n  top: 60px;\n  background: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);\n  width: 100%;\n  border-radius: 14px;\n  border: 1px solid #C3C3C3;\n  z-index: 1000;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ-:hover,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om:hover {\n  display: block;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul li,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li {\n  padding: 16px 20px;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul li:not(:last-child),\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li:not(:last-child) {\n  border-bottom: 1px solid #C3C3C3;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X {\n  padding: 35px 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X h3,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X h3 {\n  margin: 0;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X p {\n  color: grey;\n  padding: 0px 30px;\n  line-height: 1.5;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 20px;\n  align-items: center;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li span {\n  flex: 1;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om button {\n  padding: 10px 16px;\n}\n\n.styles-module_input__wOJmG {\n  padding: 14px 20px;\n  font-size: 16px;\n  width: 300px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  width: 100%;\n}\n.styles-module_input__wOJmG:focus, .styles-module_input__wOJmG:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n.styles-module_form__mWTCu.styles-module_focus__-6H1f + .styles-module_suggestions_container__pceQ-,\n.styles-module_form__mWTCu.styles-module_focus__-6H1f + .styles-module_results_container__OY4Om {\n  display: block;\n}\n\n/* animated text field */\n.styles-module_form__mWTCu {\n  position: relative;\n  width: 100%;\n}\n\n.styles-module_label__A41g9 {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__NQHTC {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__wOJmG.styles-module_with_title__rnN-t::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__wOJmG.styles-module_with_title__rnN-t:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__wOJmG:focus + .styles-module_label__A41g9 .styles-module_label_text__NQHTC,\n.styles-module_input__wOJmG.styles-module_valid__AAK-6 + .styles-module_label__A41g9 .styles-module_label_text__NQHTC {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__wOJmG.styles-module_valid__AAK-6 + .styles-module_label__A41g9 .styles-module_label_text__NQHTC {\n  color: #a8a8a8;\n}";
var styles$5 = {"container":"styles-module_container__k4Z26","suggestions_container":"styles-module_suggestions_container__pceQ-","results_container":"styles-module_results_container__OY4Om","error":"styles-module_error__2Ov4X","input":"styles-module_input__wOJmG","form":"styles-module_form__mWTCu","focus":"styles-module_focus__-6H1f","label":"styles-module_label__A41g9","label_text":"styles-module_label_text__NQHTC","with_title":"styles-module_with_title__rnN-t","valid":"styles-module_valid__AAK-6"};
styleInject(css_248z$5);

function Searchbar({ placeholder, title = "Suchen", showNoResults = false, errorTitle = "Keine Ergebnisse gefunden", errorMessage = "", errorButton = "", helpTitle = "", helpMessage = "", errorAction = (event) => { }, onInput = (event) => { }, onClickResult = (event, result) => { }, withButton = false, buttonText = "Suchen", suggestions = [], autoFocus = false, results = [] }) {
    const [value, setValue] = React.useState("");
    const [inputFocused, setFocused] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState(results);
    function onInputChanged(event) {
        setValue(event.target.value);
        updateSearch(event);
        onInput(event);
    }
    function updateSearch(event) {
        if (event.target.value == '' || event.target.value == undefined || event.target.value == null) {
            setSearchResults(results);
        }
        else {
            setSearchResults(results.filter((result) => {
                return result.title.includes(event.target.value);
            }));
        }
    }
    const inputElement = React.useCallback((element) => {
        if (element && autoFocus)
            element.focus();
    }, [autoFocus]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$5.container },
            React__default["default"].createElement("div", { className: `${styles$5.form} ${inputFocused ? styles$5.focus : styles$5.not_focused}` },
                React__default["default"].createElement("input", { onFocus: () => setFocused(true), onBlur: () => setFocused(false), className: `${styles$5.input} ${title != undefined ? styles$5.with_title : styles$5.without_title} ${value.length > 0 ? styles$5.valid : styles$5.not_valid}`, placeholder: placeholder, type: "search", ref: inputElement, onInput: onInputChanged }),
                React__default["default"].createElement("label", { htmlFor: "text", className: styles$5.label },
                    React__default["default"].createElement("span", { className: styles$5.label_text }, title))),
            withButton && React__default["default"].createElement("button", { type: "button" }, buttonText),
            suggestions.length > 0 && React__default["default"].createElement("div", { className: styles$5.suggestions_container },
                React__default["default"].createElement("ul", null, suggestions.map((suggestion, index) => React__default["default"].createElement("li", { key: index }, suggestion)))),
            searchResults.length > 0 && React__default["default"].createElement("div", { className: styles$5.results_container },
                React__default["default"].createElement("ul", null, searchResults.map((result, index) => React__default["default"].createElement("li", { key: index, onClick: (event) => onClickResult(event, result) },
                    React__default["default"].createElement("span", null, result.title),
                    React__default["default"].createElement("button", { type: "button" }, buttonText))))),
            searchResults.length == 0 && showNoResults && value.length > 0 && React__default["default"].createElement("div", { className: styles$5.results_container },
                React__default["default"].createElement("div", { className: styles$5.error },
                    React__default["default"].createElement(SvgIcon, { iconName: "error" }),
                    React__default["default"].createElement("h3", null, errorTitle),
                    React__default["default"].createElement("p", null, errorMessage),
                    errorButton.length > 0 && React__default["default"].createElement("button", { onClick: errorAction }, errorButton))),
            searchResults.length == 0 && showNoResults && value.length == 0 && React__default["default"].createElement("div", { className: styles$5.results_container },
                React__default["default"].createElement("div", { className: styles$5.error },
                    React__default["default"].createElement(SvgIcon, { iconName: "lightbulb" }),
                    React__default["default"].createElement("h3", null, helpTitle),
                    React__default["default"].createElement("p", null, helpMessage))))));
}

var css_248z$4 = "";
var styles$4 = {};
styleInject(css_248z$4);

class SliderCard {
    title;
    description;
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
function Slider({ cards }) {
    const [selected, setSelected] = React.useState(0);
    return (React__default["default"].createElement("div", { className: styles$4.container }, cards.map((card, index) => React__default["default"].createElement("div", { key: index, className: [styles$4.card, selected == index ? styles$4.selected : styles$4.not_selected].join(" ") },
        React__default["default"].createElement("h1", null, card.title),
        React__default["default"].createElement("p", null, card.description)))));
}

var css_248z$3 = ".styles-module_container__xRQNT {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 7px;\n  color: #6F6F6F;\n}\n.styles-module_container__xRQNT svg {\n  fill: #6F6F6F;\n}";
var styles$3 = {"container":"styles-module_container__xRQNT"};
styleInject(css_248z$3);

function StepBack({ iconName = "arrow_back", text = "Weitere Möglichkeiten" }) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("div", { className: styles$3.container },
            React__default["default"].createElement(SvgIcon, { iconName: iconName }),
            text)));
}

var css_248z$2 = ".styles-module_container__jNs7m {\n  margin-top: 30px;\n}\n.styles-module_container__jNs7m h3 {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.styles-module_item_list__FxHkg.styles-module_has_children__Uu-8D {\n  border-top: 1px solid #D0D0D0;\n  border-bottom: 1px solid #D0D0D0;\n}\n\n.styles-module_item_list__FxHkg {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.styles-module_item_list__FxHkg .styles-module_action__YYTok {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  padding: 8px 14px;\n  border-radius: 25px;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_item_list__FxHkg .styles-module_action__YYTok.styles-module_default__SexGH:hover {\n  background: rgb(223, 223, 223);\n}\n.styles-module_item_list__FxHkg .styles-module_action__YYTok.styles-module_red__KD3qJ:hover {\n  background: rgb(255, 199, 199);\n}\n.styles-module_item_list__FxHkg li.styles-module_item__sgyiV {\n  padding: 10px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n.styles-module_item_list__FxHkg li.styles-module_item__sgyiV .styles-module_moreText__-blXb {\n  flex: 1;\n  margin-bottom: 4px;\n  color: #0075FF;\n}\n.styles-module_item_list__FxHkg li.styles-module_item__sgyiV .styles-module_subtitle__DT5OF {\n  color: rgb(162, 162, 162);\n}\n.styles-module_item_list__FxHkg li.styles-module_item__sgyiV:nth-child(even) {\n  background: #F3F3F3;\n}\n.styles-module_item_list__FxHkg li.styles-module_item__sgyiV:not(:last-child) {\n  border-bottom: 1px solid #D0D0D0;\n}";
var styles$2 = {"container":"styles-module_container__jNs7m","item_list":"styles-module_item_list__FxHkg","has_children":"styles-module_has_children__Uu-8D","action":"styles-module_action__YYTok","default":"styles-module_default__SexGH","red":"styles-module_red__KD3qJ","item":"styles-module_item__sgyiV","moreText":"styles-module_moreText__-blXb","subtitle":"styles-module_subtitle__DT5OF"};
styleInject(css_248z$2);

exports.TableActionType = void 0;
(function (TableActionType) {
    TableActionType[TableActionType["red"] = 0] = "red";
    TableActionType[TableActionType["default"] = 1] = "default";
})(exports.TableActionType || (exports.TableActionType = {}));
class TableItem {
    title;
    subtitle;
    moreText;
    iconName;
    data;
    constructor(title, subtitle, moreText, iconName, data = {}) {
        this.title = title;
        this.subtitle = subtitle;
        this.moreText = moreText;
        this.iconName = iconName;
        this.data = data;
    }
}
class TableItemAction {
    title;
    iconName;
    onClick;
    type = exports.TableActionType.default;
    constructor(title, iconName, type, onClick = () => { }) {
        this.title = title;
        this.iconName = iconName;
        this.onClick = onClick;
    }
}
function Table({ items, title = "Titel", actions = [], moreActions }) {
    return (React__default["default"].createElement("div", { className: styles$2.container },
        React__default["default"].createElement("h3", null, title),
        React__default["default"].createElement("ul", { className: `${styles$2.item_list} ${items.length > 0 ? styles$2.has_children : styles$2.no_children}` }, items.map((item, index) => React__default["default"].createElement("li", { key: index, className: styles$2.item },
            React__default["default"].createElement("div", { className: styles$2.icon },
                React__default["default"].createElement(SvgIcon, { iconName: item.iconName })),
            React__default["default"].createElement("div", { className: styles$2.title }, item.title),
            React__default["default"].createElement("div", { className: styles$2.moreText }, item.moreText),
            React__default["default"].createElement("div", { className: styles$2.subtitle }, item.subtitle),
            moreActions &&
                moreActions.map((moreAction, index) => React__default["default"].createElement("div", { className: styles$2.more_action, key: item.title + index }, moreAction(item.data, index))),
            actions.length > 0 && actions.map((action, idx) => React__default["default"].createElement("div", { key: idx, className: [
                    styles$2.action,
                    action.type == exports.TableActionType.red && styles$2.red,
                    action.type == exports.TableActionType.default && styles$2.default,
                ].join(" "), onClick: (event) => action.onClick(event, item, index) },
                React__default["default"].createElement(SvgIcon, { iconName: action.iconName }),
                action.title)))))));
}

var css_248z$1 = ".styles-module_container__ItBx0 {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  align-items: center;\n  color: grey;\n  padding: 5px 12px;\n  border-radius: 20px;\n}\n\n.styles-module_container__ItBx0 a {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  align-items: center;\n  color: grey;\n  padding: 5px 12px;\n  border-radius: 20px;\n  transition: 0.2s ease-in-out;\n}\n.styles-module_container__ItBx0 a:hover {\n  color: #0075FF;\n  background: rgb(239, 239, 239);\n}";
var styles$1 = {"container":"styles-module_container__ItBx0"};
styleInject(css_248z$1);

function TextWithIcon({ iconName, label, }) {
    return (React__default["default"].createElement("div", { className: styles$1.container },
        React__default["default"].createElement(SvgIcon, { iconName: iconName }),
        React__default["default"].createElement("span", null, label)));
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}
function valueBetween(value, min, max) {
  if (value > max) return max;
  if (value < min) return min;
  return value;
}
function extractPercentage(value, percentage) {
  return percentage / 100 * value;
}
function bisectorAngle(startAngle, lengthAngle) {
  return startAngle + lengthAngle / 2;
}
function shiftVectorAlongAngle(angle, distance) {
  var angleRadians = degreesToRadians(angle);
  return {
    dx: distance * Math.cos(angleRadians),
    dy: distance * Math.sin(angleRadians)
  };
}
function isNumber(value) {
  return typeof value === 'number';
}
function functionProp(prop, payload) {
  return typeof prop === 'function' ? prop(payload) : prop;
}
function makePropsWithDefaults(props, defaultProps) {
  var result = Object.assign({}, defaultProps, props);

  // @NOTE Object.assign doesn't default properties with undefined value (like React defaultProps does)
  for (var key in defaultProps) {
    if (props[key] === undefined) {
      result[key] = defaultProps[key];
    }
  }
  return result;
}

function sumValues(data) {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum += data[i].value;
  }
  return sum;
}

// Append "percentage", "degrees" and "startAngle" to each data entry
function extendData(_ref) {
  var data = _ref.data,
    totalAngle = _ref.lengthAngle,
    totalValue = _ref.totalValue,
    paddingAngle = _ref.paddingAngle,
    chartStartAngle = _ref.startAngle;
  var total = totalValue || sumValues(data);
  var normalizedTotalAngle = valueBetween(totalAngle, -360, 360);
  var numberOfPaddings = Math.abs(normalizedTotalAngle) === 360 ? data.length : data.length - 1;
  var singlePaddingDegrees = Math.abs(paddingAngle) * Math.sign(totalAngle);
  var degreesTakenByPadding = singlePaddingDegrees * numberOfPaddings;
  var degreesTakenByPaths = normalizedTotalAngle - degreesTakenByPadding;
  var lastSegmentEnd = 0;
  var extendedData = [];

  // @NOTE: Shall we evaluate percentage accordingly to dataEntry.value's sign?
  for (var i = 0; i < data.length; i++) {
    var dataEntry = data[i];
    var valueInPercentage = total === 0 ? 0 : dataEntry.value / total * 100;
    var degrees = extractPercentage(degreesTakenByPaths, valueInPercentage);
    var startAngle = lastSegmentEnd + chartStartAngle;
    lastSegmentEnd = lastSegmentEnd + degrees + singlePaddingDegrees;
    extendedData.push(Object.assign({
      percentage: valueInPercentage,
      startAngle: startAngle,
      degrees: degrees
    }, dataEntry));
  }
  return extendedData;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function ReactMinimalPieChartLabel(_ref) {
  var renderLabel = _ref.renderLabel,
    labelProps = _ref.labelProps;
  var label = renderLabel(labelProps);

  // Default label
  if (typeof label === 'string' || typeof label === 'number') {
    labelProps.dataEntry;
      labelProps.dataIndex;
      var props = _objectWithoutPropertiesLoose(labelProps, ["dataEntry", "dataIndex"]);
    return /*#__PURE__*/React__default["default"].createElement("text", Object.assign({
      dominantBaseline: "central"
    }, props), label);
  }
  if (React__default["default"].isValidElement(label)) {
    return label;
  }
  return null;
}

function round(number) {
  var divisor = 1e14; // 14 decimals
  return Math.round((number + Number.EPSILON) * divisor) / divisor;
}
function evaluateTextAnchorPosition(_ref) {
  var labelPosition = _ref.labelPosition,
    lineWidth = _ref.lineWidth,
    labelHorizontalShift = _ref.labelHorizontalShift;
  var dx = round(labelHorizontalShift);
  // Label in the vertical center
  if (dx === 0) {
    return 'middle';
  }
  // Outward label
  if (labelPosition > 100) {
    return dx > 0 ? 'start' : 'end';
  }
  // Inward label
  var innerRadius = 100 - lineWidth;
  if (labelPosition < innerRadius) {
    return dx > 0 ? 'end' : 'start';
  }
  // Overlying label
  return 'middle';
}
function makeLabelRenderProps(data, props) {
  return data.map(function (dataEntry, index) {
    var _functionProp;
    var segmentsShift = (_functionProp = functionProp(props.segmentsShift, index)) != null ? _functionProp : 0;
    var distanceFromCenter = extractPercentage(props.radius, props.labelPosition) + segmentsShift;
    var _shiftVectorAlongAngl = shiftVectorAlongAngle(bisectorAngle(dataEntry.startAngle, dataEntry.degrees), distanceFromCenter),
      dx = _shiftVectorAlongAngl.dx,
      dy = _shiftVectorAlongAngl.dy; // This object is passed as argument to the "label" function prop
    var labelRenderProps = {
      x: props.center[0],
      y: props.center[1],
      dx: dx,
      dy: dy,
      textAnchor: evaluateTextAnchorPosition({
        labelPosition: props.labelPosition,
        lineWidth: props.lineWidth,
        labelHorizontalShift: dx
      }),
      dataEntry: dataEntry,
      dataIndex: index,
      style: functionProp(props.labelStyle, index)
    };
    return labelRenderProps;
  });
}
function renderLabels(data, props) {
  var label = props.label;
  if (label) {
    return makeLabelRenderProps(data, props).map(function (labelRenderProps, index) {
      return /*#__PURE__*/React__default["default"].createElement(ReactMinimalPieChartLabel, {
        key: "label-" + (labelRenderProps.dataEntry.key || index),
        renderLabel: label,
        labelProps: labelRenderProps
      });
    });
  }
}

// from http://stackoverflow.com/a/18473154
var partialCircle = function partialCircle(cx, cy, r, start, end) {
  var length = end - start;
  if (length === 0) return [];
  var fromX = r * Math.cos(start) + cx;
  var fromY = r * Math.sin(start) + cy;
  var toX = r * Math.cos(end) + cx;
  var toY = r * Math.sin(end) + cy;
  var large = Math.abs(length) <= Math.PI ? '0' : '1';
  var sweep = length < 0 ? '0' : '1';
  return [['M', fromX, fromY], ['A', r, r, 0, large, sweep, toX, toY]];
};
var svgPartialCircle = partialCircle;

var partialCircle$1 = svgPartialCircle;

function makePathCommands(cx, cy, startAngle, lengthAngle, radius) {
  var patchedLengthAngle = valueBetween(lengthAngle, -359.999, 359.999);
  return partialCircle$1(cx, cy,
  // center X and Y
  radius, degreesToRadians(startAngle), degreesToRadians(startAngle + patchedLengthAngle)).map(function (command) {
    return command.join(' ');
  }).join(' ');
}
function ReactMinimalPieChartPath(_ref) {
  var cx = _ref.cx,
    cy = _ref.cy,
    lengthAngle = _ref.lengthAngle,
    lineWidth = _ref.lineWidth,
    radius = _ref.radius,
    _ref$shift = _ref.shift,
    shift = _ref$shift === void 0 ? 0 : _ref$shift,
    reveal = _ref.reveal,
    rounded = _ref.rounded,
    startAngle = _ref.startAngle,
    title = _ref.title,
    props = _objectWithoutPropertiesLoose(_ref, ["cx", "cy", "lengthAngle", "lineWidth", "radius", "shift", "reveal", "rounded", "startAngle", "title"]);
  var pathRadius = radius - lineWidth / 2;
  //@NOTE This shift might be rendered as a translation in future
  var _shiftVectorAlongAngl = shiftVectorAlongAngle(bisectorAngle(startAngle, lengthAngle), shift),
    dx = _shiftVectorAlongAngl.dx,
    dy = _shiftVectorAlongAngl.dy;
  var pathCommands = makePathCommands(cx + dx, cy + dy, startAngle, lengthAngle, pathRadius);
  var strokeDasharray;
  var strokeDashoffset;

  // Animate/hide paths with "stroke-dasharray" + "stroke-dashoffset"
  // https://css-tricks.com/svg-line-animation-works/
  if (isNumber(reveal)) {
    var pathLength = degreesToRadians(pathRadius) * lengthAngle;
    strokeDasharray = Math.abs(pathLength);
    strokeDashoffset = strokeDasharray - extractPercentage(strokeDasharray, reveal);
  }
  return /*#__PURE__*/React__default["default"].createElement("path", Object.assign({
    d: pathCommands,
    fill: "none",
    strokeWidth: lineWidth,
    strokeDasharray: strokeDasharray,
    strokeDashoffset: strokeDashoffset,
    strokeLinecap: rounded ? 'round' : undefined
  }, props), title && /*#__PURE__*/React__default["default"].createElement("title", null, title));
}

function combineSegmentTransitionsStyle(duration, easing, customStyle) {
  // Merge chart's animation CSS transition with "transition" found to customStyle
  var transition = "stroke-dashoffset " + duration + "ms " + easing;
  if (customStyle && customStyle.transition) {
    transition = transition + "," + customStyle.transition;
  }
  return {
    transition: transition
  };
}
function getRevealValue(props) {
  //@NOTE When animation is on, chart has to be fully revealed when reveal is not set
  if (props.animate && !isNumber(props.reveal)) {
    return 100;
  }
  return props.reveal;
}
function makeEventHandler(eventHandler, payload) {
  return eventHandler && function (e) {
    eventHandler(e, payload);
  };
}
function renderSegments(data, props, revealOverride) {
  // @NOTE this should go in Path component. Here for performance reasons
  var reveal = revealOverride != null ? revealOverride : getRevealValue(props);
  var radius = props.radius,
    _props$center = props.center,
    cx = _props$center[0],
    cy = _props$center[1];
  var lineWidth = extractPercentage(radius, props.lineWidth);
  var paths = data.map(function (dataEntry, index) {
    var segmentsStyle = functionProp(props.segmentsStyle, index);
    return /*#__PURE__*/React__default["default"].createElement(ReactMinimalPieChartPath, {
      cx: cx,
      cy: cy,
      key: dataEntry.key || index,
      lengthAngle: dataEntry.degrees,
      lineWidth: lineWidth,
      radius: radius,
      rounded: props.rounded,
      reveal: reveal,
      shift: functionProp(props.segmentsShift, index),
      startAngle: dataEntry.startAngle,
      title: dataEntry.title,
      style: Object.assign({}, segmentsStyle, props.animate && combineSegmentTransitionsStyle(props.animationDuration, props.animationEasing, segmentsStyle)),
      stroke: dataEntry.color,
      tabIndex: props.segmentsTabIndex,
      onBlur: makeEventHandler(props.onBlur, index),
      onClick: makeEventHandler(props.onClick, index),
      onFocus: makeEventHandler(props.onFocus, index),
      onKeyDown: makeEventHandler(props.onKeyDown, index),
      onMouseOver: makeEventHandler(props.onMouseOver, index),
      onMouseOut: makeEventHandler(props.onMouseOut, index)
    });
  });
  if (props.background) {
    paths.unshift( /*#__PURE__*/React__default["default"].createElement(ReactMinimalPieChartPath, {
      cx: cx,
      cy: cy,
      key: "bg",
      lengthAngle: props.lengthAngle,
      lineWidth: lineWidth,
      radius: radius,
      rounded: props.rounded,
      startAngle: props.startAngle,
      stroke: props.background
    }));
  }
  return paths;
}

var defaultProps = {
  animationDuration: 500,
  animationEasing: 'ease-out',
  center: [50, 50],
  data: [],
  labelPosition: 50,
  lengthAngle: 360,
  lineWidth: 100,
  paddingAngle: 0,
  radius: 50,
  startAngle: 0,
  viewBoxSize: [100, 100]
};
function ReactMinimalPieChart(originalProps) {
  var props = makePropsWithDefaults(originalProps,
  // @ts-expect-error: defaultProps.data is typed as BaseDataEntry
  defaultProps);
  var _useState = React.useState(props.animate ? 0 : null),
    revealOverride = _useState[0],
    setRevealOverride = _useState[1];
  React.useEffect(function () {
    if (props.animate) {
      // Trigger initial animation
      setRevealOverride(null);
    }
  }, []);
  var extendedData = extendData(props);
  return /*#__PURE__*/React__default["default"].createElement("svg", {
    viewBox: "0 0 " + props.viewBoxSize[0] + " " + props.viewBoxSize[1],
    width: "100%",
    height: "100%",
    className: props.className,
    style: props.style
  }, renderSegments(extendedData, props, revealOverride), renderLabels(extendedData, props), props.children);
}

var css_248z = "@keyframes styles-module_shine__wdsDw {\n  to {\n    background-position-x: -200%;\n  }\n}\n.styles-module_container__otVky {\n  background: white;\n  padding: 18px;\n  border-radius: 20px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  display: flex;\n  flex-direction: row;\n}\n.styles-module_container__otVky.styles-module_loading__e-0U1 {\n  height: 95px;\n  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);\n  background-size: 200% 100%;\n  animation: 1.5s styles-module_shine__wdsDw linear infinite;\n}\n.styles-module_container__otVky .styles-module_text__V17nN {\n  flex: 1;\n}\n.styles-module_container__otVky .styles-module_graph__IjvUA svg {\n  width: 40px;\n}\n.styles-module_container__otVky h3 {\n  margin: 0;\n  line-height: 1.8;\n  font-size: 16px;\n  font-weight: 600;\n}\n.styles-module_container__otVky p {\n  margin: 0;\n  line-height: 1.8;\n  font-size: 16px;\n  color: rgb(158, 158, 158);\n}";
var styles = {"container":"styles-module_container__otVky","loading":"styles-module_loading__e-0U1","shine":"styles-module_shine__wdsDw","text":"styles-module_text__V17nN","graph":"styles-module_graph__IjvUA"};
styleInject(css_248z);

function UsageCard({ title, subtitle, ratio = 0, loading }) {
    if (loading)
        return React__default["default"].createElement("div", { className: [styles.container, styles.loading].join(" ") });
    return (React__default["default"].createElement("div", { className: styles.container },
        React__default["default"].createElement("div", { className: styles.text },
            React__default["default"].createElement("h3", null, title),
            React__default["default"].createElement("p", null, subtitle)),
        React__default["default"].createElement("div", { className: styles.graph },
            React__default["default"].createElement(ReactMinimalPieChart, { data: [
                    { title: 'One', value: 1 - ratio, color: '#DFDFDF' },
                    { title: 'Two', value: ratio + 0.05, color: '#0085FF' },
                ], lineWidth: 15, totalValue: 1 }))));
}

exports.Accordeon = Accordeon;
exports.AuthButton = AuthButton;
exports.CardButton = CardButton;
exports.Checkbox = Checkbox;
exports.ChooseRole = ChooseRole;
exports.ChooseRoleItem = ChooseRoleItem;
exports.CopyCode = CopyCode;
exports.Dialog = Dialog;
exports.FormButton = FormButton;
exports.FormText = FormText;
exports.ForwardButton = ForwardButton;
exports.Gap = Gap;
exports.InputMail = InputMail;
exports.InputNames = InputNames;
exports.InputNumber = InputNumber;
exports.InputPassword = InputPassword;
exports.InputPin = InputPin;
exports.InputText = InputText;
exports.OptionField = OptionField;
exports.OptionFieldHorizontal = OptionFieldHorizontal;
exports.PrimaryButton = PrimaryButton;
exports.ProgressBar = ProgressBar;
exports.RadioButtons = RadioButtons;
exports.RadioOption = RadioOption;
exports.RedirectButton = RedirectButton;
exports.SearchChip = SearchChip;
exports.SearchChips = SearchChips;
exports.Searchbar = Searchbar;
exports.Slider = Slider;
exports.SliderCard = SliderCard;
exports.StepBack = StepBack;
exports.SvgIcon = SvgIcon;
exports.Table = Table;
exports.TableItem = TableItem;
exports.TableItemAction = TableItemAction;
exports.TextWithIcon = TextWithIcon;
exports.UsageCard = UsageCard;
