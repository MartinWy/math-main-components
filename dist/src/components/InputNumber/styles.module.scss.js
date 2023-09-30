import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".styles-module_container__Xk2HY {\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.styles-module_input__ReFFR {\n  padding: 14px 20px;\n  font-size: 16px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  flex: 1;\n  width: 100%;\n}\n.styles-module_input__ReFFR:focus, .styles-module_input__ReFFR:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n.styles-module_input__ReFFR.styles-module_not_available__mZ5-1 {\n  border-color: #e50000;\n  box-shadow: 0px 0px 3px 3px rgba(255, 0, 0, 0.2509803922);\n}\n\n/* animated title */\n.styles-module_container__Xk2HY {\n  position: relative;\n}\n\n.styles-module_label__4n2Ai {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__NsKJU {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__ReFFR.styles-module_with_title__vMb1v::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__ReFFR.styles-module_with_title__vMb1v:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__ReFFR:focus + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU,\n.styles-module_input__ReFFR.styles-module_valid__NyP0J + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__ReFFR.styles-module_valid__NyP0J + .styles-module_label__4n2Ai .styles-module_label_text__NsKJU {\n  color: #a8a8a8;\n}";
styleInject(css_248z);
