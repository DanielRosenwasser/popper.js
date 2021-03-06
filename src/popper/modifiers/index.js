import applyStyle, { applyStyleOnLoad } from './applyStyle';
import arrow from './arrow';
import flip from './flip';
import keepTogether from './keepTogether';
import offset from './offset';
import preventOverflow from './preventOverflow';
import shift from './shift';
import hide from './hide';
import inner from './inner';

/**
 * Modifiers are plugins used to alter the behavior of your poppers.
 * Popper.js uses a set of 7 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Each modifier is an object containing several properties listed below.
 * @namespace Modifiers
 * @param {Object} modifier - Modifier descriptor
 * @param {Integer} modifier.order
 *      The `order` property defines the execution order of the modifiers.
 *      The built-in modifiers have orders with a gap of 100 units in between,
 *      this allows you to inject additional modifiers between the existing ones
 *      without having to redefine the order of all of them.
 *      The modifiers are executed starting from the one with the lowest order.
 * @param {Boolean} modifier.enabled - When `true`, the modifier will be used.
 * @param {Modifiers~modifier} modifier.function - Modifier function.
 * @param {Modifiers~onLoad} modifier.onLoad - Function executed on popper initalization
 * @return {Object} data - Each modifier must return the modified `data` object.
 */
export default {
     shift: {
         order: 100,
         enabled: true,
         function: shift,
     },
     offset: {
         order: 200,
         enabled: true,
         function: offset,
         // nudges popper from its origin by the given amount of pixels (can be negative)
         offset: 0,
     },
     preventOverflow: {
         order: 300,
         enabled: true,
         function: preventOverflow,
         // popper will try to prevent overflow following these priorities
         //  by default, then, it could overflow on the left and on top of the boundariesElement
         priority: ['left', 'right', 'top', 'bottom'],
         // amount of pixel used to define a minimum distance between the boundaries and the popper
         // this makes sure the popper has always a little padding between the edges of its container
         padding: 5,
         boundariesElement: 'scrollParent',
     },
     keepTogether: {
         order: 400,
         enabled: true,
         function: keepTogether
     },
     arrow: {
         order: 500,
         enabled: true,
         function: arrow,
         // selector or node used as arrow
         element: '[x-arrow]'
     },
     flip: {
         order: 600,
         enabled: true,
         function: flip,
         // the behavior used to change the popper's placement
         behavior: 'flip',
         // the popper will flip if it hits the edges of the boundariesElement - padding
         padding: 5,
         boundariesElement: 'viewport'
     },
     inner: {
         order: 700,
         enabled: false,
         function: inner,
     },
     hide: {
         order: 800,
         enabled: true,
         function: hide
     },
     applyStyle: {
         order: 900,
         enabled: true,
         // if true, it uses the CSS 3d transformation to position the popper
         gpuAcceleration: true,
         function: applyStyle,
         onLoad: applyStyleOnLoad,
     }
 }


 /**
  * Modifiers can edit the `data` object to change the beheavior of the popper.
  * This object contains all the informations used by Popper.js to compute the
  * popper position.
  * The modifier can edit the data as needed, and then `return` it as result.
  *
  * @callback Modifiers~modifier
  * @param {dataObject} data
  * @return {dataObject} modified data
  */

 /**
  * The `dataObject` is an object containing all the informations used by Popper.js
  * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
  * @name dataObject
  * @property {Object} data.instance The Popper.js instance
  * @property {String} data.placement Placement applied to popper
  * @property {String} data.originalPlacement Placement originally defined on init
  * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
  * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
  * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
  * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
  * @property {Object} data.boundaries Offsets of the popper boundaries
  * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
  * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
  * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
  * @property {Object} data.offsets.arro] `top` and `left` offsets, only one of them will be different from 0
  */
