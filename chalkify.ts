import chalk from 'chalk';

export function chalkify(highlightJSvalue: string) {
    const splitted = highlightJSvalue.split(/[<>]/);

    let result = '';

    const highlightJSClasses = [
        'span class="hljs-name"',
        'span class="hljs-tag"',
        'span class="hljs-string"',
        'span class="hljs-attr"',
    ];

    const mapping = {
        'span class="hljs-name"': chalk.blue,
        'span class="hljs-tag"': chalk.red,
        'span class="hljs-string"': chalk.green,
        'span class="hljs-attr"': chalk.yellow
    };

    let color;

    for (let i = 0; i < splitted.length; i++) {
        const value = splitted[i];
        if (splitted[i] === '/span') {
            continue;
        }

        if (splitted[i] === '') {
            result += '';
            continue;
        }

        if(splitted[i] === '&lt;') {
            result += '<';
            continue;
        }

        if(splitted[i] === '&lt;/') {
            result += '</';
            continue;
        }

        if(splitted[i] === '&gt;') {
            result += '>';
            continue;
        }

        if (highlightJSClasses.indexOf(splitted[i]) > -1) {
            color = mapping[splitted[i]];
            continue;
        }

        result += color(splitted[i]);
    }
    return result;
}
