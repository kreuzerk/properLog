import * as highlight from 'highlight.js';
import {chalkify} from './chalkify';
import * as pretty from 'pretty';

const someHTML = '<html><div class="test">Test</div></html>';
const highlighted = highlight.highlight('html', someHTML);
const chalkified = chalkify(highlighted.value);
console.log('Chalkified', chalkified);

console.log(pretty(chalkified));
