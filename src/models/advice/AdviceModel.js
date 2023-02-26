"use strict";
exports.__esModule = true;
var mobx_state_tree_1 = require("mobx-state-tree");
var RandomNumber = function (min, max) {
  var randNum = Math.round(Math.random() * (max - min) + min);
  return randNum;
};
var AdviceModel = mobx_state_tree_1.types.model({
  id: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.identifier, "1"),
  advice: mobx_state_tree_1.types.optional(mobx_state_tree_1.types.string, ""),
});
var AdviceStore = mobx_state_tree_1.types.model({
  advice: mobx_state_tree_1.types.map(AdviceModel),
});
console.log("Random Number: ", RandomNumber(8, 11));
