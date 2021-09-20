import '../sass/style.scss';

import { $, $$ } from './modules/bling';
import autocomplete from './modules/autocomplete';

console.log('holi');

autocomplete( $("#address"), $('#lat'), $('#lng') );