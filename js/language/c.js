/**
 * C patterns
 *
 * @author Daniel Holden
 * @author Craig Campbell
 * @version 1.0.3
 */
Rainbow.extend('c', [
    {
        'name': 'meta.preprocessor',
        'matches': {
            1: [
                {
                    'matches': {
                        1: 'keyword.define',
                        2: 'entity.name'
                    },
                    'pattern': /(\w+)\s(\w+)\b/g
                },
                {
                    'name': 'keyword.define',
                    'pattern': /endif/g
                },
                {
                    'name': 'constant.numeric',
                    'pattern': /\d+/g
                },
                {
                    'matches': {
                        1: 'keyword.include',
                        2: 'string'
                    },
                    'pattern': /(include)\s(.*?)$/g
                }
            ]
        },
        'pattern': /\#([\S\s]*?)$/gm
    },
    {
        'name': 'keyword',
        'pattern': /\b(do|goto|continue|break|switch|case|typedef)\b/g
    },
    {
        'name': 'entity.label',
        'pattern': /\w+:/g
    },
    {
        'matches': {
            1: 'storage.type',
            3: 'storage.type',
            4: 'entity.name.function'
        },
        'pattern': /\b((un)?signed|const)?\s?(void|char|short|int|long|float|double)\*?\s+((\w+)(?=\s?\())?/g
    },
    {
        'matches': {
            2: 'entity.name.function'
        },
        'pattern': /(\w|\*)(\s(\w+)(?=\s?\())?/g
    },
    {
        'name': 'storage.modifier',
        'pattern': /\b(static|extern|auto|register|volatile|inline)\b/g
    },
    {
        'name': 'support.type',
        'pattern': /\b(struct|union|enum)\b/g
    },

    /**
     * reset constants
     */
    {
        'name': 'variable',
        'pattern': /\b[A-Z0-9_]{2,}\b/g
    }
]);
