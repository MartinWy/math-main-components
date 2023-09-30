import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "@keyframes styles-module_show__OLTZH {\n  from {\n    max-heigth: 0px;\n    height: 0px;\n  }\n}\n@keyframes styles-module_hide__LAgaY {\n  from {\n    max-heigth: 0px;\n    height: 0px;\n  }\n  to {\n    max-height: fit-content;\n  }\n}\n.styles-module_container__UdmOO {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 30px;\n  transition: all 0.2s ease-in-out;\n  box-sizing: border-box;\n}\n.styles-module_container__UdmOO .styles-module_forgot_label__EeN6a {\n  font-size: 12px;\n  color: grey;\n}\n.styles-module_container__UdmOO.styles-module_visible__QROqh {\n  max-height: 100px;\n  opacity: 1;\n}\n.styles-module_container__UdmOO.styles-module_hidden__hDKDO {\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n}\n\n.styles-module_input__sC2fP {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  border-right: none;\n  outline: none;\n  transition: all 0.2s ease;\n  flex: 1;\n}\n.styles-module_input__sC2fP:focus, .styles-module_input__sC2fP:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n.styles-module_hideButton__83mRI {\n  outline: none;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  border: 1.5px solid #a8a8a8;\n  border-left: none;\n  background: none;\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  cursor: pointer;\n}\n.styles-module_hideButton__83mRI span {\n  color: grey;\n}\n\n/* animated title */\n.styles-module_form__m866x {\n  position: relative;\n  display: flex;\n}\n\n.styles-module_label__8PuaL {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__FwJ1F {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__sC2fP.styles-module_with_title__dftgq::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__sC2fP.styles-module_with_title__dftgq:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__sC2fP:focus + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F,\n.styles-module_input__sC2fP.styles-module_valid__SM7w5 + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__sC2fP.styles-module_valid__SM7w5 + .styles-module_label__8PuaL .styles-module_label_text__FwJ1F {\n  color: #a8a8a8;\n}";
styleInject(css_248z);
