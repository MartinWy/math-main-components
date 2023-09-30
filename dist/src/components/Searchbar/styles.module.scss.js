import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".styles-module_container__k4Z26 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-top: 30px;\n  margin-bottom: 25px;\n  gap: 10px;\n  position: relative;\n}\n.styles-module_container__k4Z26 button {\n  background: #BFD5FF;\n  padding: 0px 18px;\n  border: none;\n  font-size: 14px;\n  border-radius: 10px;\n  cursor: pointer;\n  color: #0075FF;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ-,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om {\n  display: none;\n  position: absolute;\n  top: 60px;\n  background: white;\n  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);\n  width: 100%;\n  border-radius: 14px;\n  border: 1px solid #C3C3C3;\n  z-index: 1000;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ-:hover,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om:hover {\n  display: block;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul li,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li {\n  padding: 16px 20px;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- ul li:not(:last-child),\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li:not(:last-child) {\n  border-bottom: 1px solid #C3C3C3;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X {\n  padding: 35px 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X h3,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X h3 {\n  margin: 0;\n}\n.styles-module_container__k4Z26 .styles-module_suggestions_container__pceQ- .styles-module_error__2Ov4X p,\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om .styles-module_error__2Ov4X p {\n  color: grey;\n  padding: 0px 30px;\n  line-height: 1.5;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 20px;\n  align-items: center;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om ul li span {\n  flex: 1;\n}\n.styles-module_container__k4Z26 .styles-module_results_container__OY4Om button {\n  padding: 10px 16px;\n}\n\n.styles-module_input__wOJmG {\n  padding: 14px 20px;\n  font-size: 16px;\n  width: 300px;\n  border-radius: 12px;\n  border: 1.5px solid #a8a8a8;\n  outline: none;\n  transition: 0.2s ease;\n  width: 100%;\n}\n.styles-module_input__wOJmG:focus, .styles-module_input__wOJmG:active {\n  border-color: #0075FF;\n  box-shadow: 0px 0px 3px 3px rgba(0, 87, 255, 0.2509803922);\n}\n\n.styles-module_form__mWTCu.styles-module_focus__-6H1f + .styles-module_suggestions_container__pceQ-,\n.styles-module_form__mWTCu.styles-module_focus__-6H1f + .styles-module_results_container__OY4Om {\n  display: block;\n}\n\n/* animated text field */\n.styles-module_form__mWTCu {\n  position: relative;\n  width: 100%;\n}\n\n.styles-module_label__A41g9 {\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.styles-module_label_text__NQHTC {\n  position: absolute;\n  bottom: 16px;\n  left: 12px;\n  transition: 0.3s ease;\n  font-size: 16px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  opacity: initial;\n  background: white;\n  color: grey;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.styles-module_input__wOJmG.styles-module_with_title__rnN-t::placeholder {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: grey;\n}\n\n.styles-module_input__wOJmG.styles-module_with_title__rnN-t:focus::placeholder {\n  opacity: 1;\n}\n\n.styles-module_input__wOJmG:focus + .styles-module_label__A41g9 .styles-module_label_text__NQHTC,\n.styles-module_input__wOJmG.styles-module_valid__AAK-6 + .styles-module_label__A41g9 .styles-module_label_text__NQHTC {\n  transform: translateY(-150%);\n  left: 15px;\n  font-size: 14px;\n  background: linear-gradient(to bottom, rgba(250, 250, 250, 0.9411764706), hsla(0, 0%, 100%, 0.951));\n  color: #0063d4;\n}\n\n.styles-module_input__wOJmG.styles-module_valid__AAK-6 + .styles-module_label__A41g9 .styles-module_label_text__NQHTC {\n  color: #a8a8a8;\n}";
styleInject(css_248z);
