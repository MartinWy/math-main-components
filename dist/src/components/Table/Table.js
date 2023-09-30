import '../../../node_modules/external-svg-loader/dist/svg-loader.min.js';
import 'react';
import '../../../node_modules/next/router.js';
import './styles.module.scss.js';

var TableActionType;
(function (TableActionType) {
    TableActionType[TableActionType["red"] = 0] = "red";
    TableActionType[TableActionType["default"] = 1] = "default";
})(TableActionType || (TableActionType = {}));

export { TableActionType };
