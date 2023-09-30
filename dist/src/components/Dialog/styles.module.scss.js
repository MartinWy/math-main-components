import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".styles-module_container__9-1MH {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  background: rgba(255, 255, 255, 0.659);\n  backdrop-filter: blur(10px) brightness(70%);\n  left: 0;\n  top: 0;\n  z-index: 10000;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.styles-module_container__9-1MH.styles-module_active__AXoyo {\n  opacity: 1;\n}\n.styles-module_container__9-1MH.styles-module_disabled__sELpy {\n  pointer-events: none;\n  opacity: 0;\n}\n.styles-module_container__9-1MH .styles-module_dialog_window__0Bn2M {\n  background: white;\n  border-radius: 20px;\n  padding: 20px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  cursor: auto;\n}";
var styles = {"container":"styles-module_container__9-1MH","active":"styles-module_active__AXoyo","disabled":"styles-module_disabled__sELpy","dialog_window":"styles-module_dialog_window__0Bn2M"};
styleInject(css_248z);

export { styles as default };
