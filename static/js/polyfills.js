import 'core-js/es6/map';
import 'core-js/es6/set';
import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import assign from 'core-js/library/fn/object/assign';
import is from 'core-js/library/fn/object/is';
import 'babel-polyfill';

console.log('Load your polyfills');

String.prototype.includes = includes;
String.prototype.repeat = repeat;
Object.assign = assign;
Object.is = is;
if (!('remove' in Element.prototype)) {
	Element.prototype.remove = function() {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	};
}
