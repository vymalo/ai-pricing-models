import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'highlight.js/scss/dark.scss'

import './style.scss';

import Reveal from 'reveal.js';
import Notes from 'reveal.js/plugin/notes/notes';
import Highlight from 'reveal.js/plugin/highlight/highlight';
import RevealSearch from 'reveal.js/plugin/search/search';
import RevealMermaid from 'reveal.js-mermaid-plugin';

let deck = new Reveal({
    plugins: [Notes, Highlight, RevealSearch, RevealMermaid],
    hash: true,
    slideNumber: true,
    embedded: false,
});
deck.initialize();
