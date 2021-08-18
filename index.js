exports.__esModule = true;
exports['default'] = function (config) {
  'use strict';

  return {
    visitor: {
      EmptyStatement (node, file) {
        let t = config.types;
          /* construct
           * (function (a) {return a;})();
           */
        let replace = t.expressionStatement(
          t.callExpression(
          t.functionExpression(
            null, 
            [ t.identifier('a')], 
            t.blockStatement( [
              t.returnStatement( t.identifier('a'))
            ])
          ), 
          []
        ));
        node.replaceWith(replace);
      }
    }
  }
}
module.exports = exports["default"];
