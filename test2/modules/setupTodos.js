import {getTodos} from './getTodos.js';
import {writeParagraph} from './writeParagraph.js';

export function setupTodos() {

    getTodos()
    .then(response => {
        const data = response;
        setTimeout(() => { writeParagraph(data.title) }, 1000);
    });
}