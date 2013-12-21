var _ = require("lodash"),
   util = require("util"),
   Metadata = require("./metadata");

/*
 * Metadata for the primitive types like integer, string
 *
 * @base {Metadata}
 */
var FunctionMetadata = module.exports = function FunctionMetadata(node, provider) {
  this.parameters = [];

  Metadata.call(this, node, provider);
};

util.inherits(FunctionMetadata, Metadata);

_.extend(FunctionMetadata.prototype, {
  /*
   * Get the types of the primitive from the node value
   * @params {Node} esprima node
   */
  initialize : function(node) {
    this.type = "function";

    _.each(node.params, _.bind(function(parameter){
      this.parameters.push({ name: parameter.name });
    }, this));
  }
});

