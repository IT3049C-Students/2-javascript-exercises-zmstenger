const { concat } = require("./3.arrays");

/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */


const personObject = {

  first_name: "",
  last_name: "",
  full_name:function(){ return this.first_name+" "+this.last_name},
  introduction:function(){return this.full_name()+this.class_of},
  class_of: 0


  



};

module.exports = {
  personObject
};