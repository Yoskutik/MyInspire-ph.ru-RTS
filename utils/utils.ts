import RequireContext = __WebpackModuleApi.RequireContext;

export const preprocessRequire = (ctx: RequireContext): string[] => {
    const prefix = ctx.id.split(' ')[0].replace('..', '/static');
    return ctx.keys().map(it => it.replace('.', `${prefix}`));
};

const keywords: string[] = [
    'Фотограф Санкт-Петербург',
    'Мельникова Татьяна',
    'Фотограф СПб',
    'Фотосессия СПб',
    'Портрет',
    'Love story',
    'Съёмка в Санкт-Петербурге',
];

export const createKeywordGenerator = function* (): Generator<string, string> {
    let previousKeyword = '';
    while (true) {
        let keyword;
        while (!keyword || keyword === previousKeyword) {
            keyword = keywords[Math.floor(Math.random() * keywords.length)];
        }
        previousKeyword = keyword;
        yield keyword;
    }
};

export const debounce = function (cb: (...args: any[]) => any, ms = 100): (...args: any[]) => any {
    let isCooldown = false;
    return function (...args) {
        if (isCooldown) return;
        cb.apply(this, ...args);
        isCooldown = true;
        setTimeout(() => {
            isCooldown = false;
        }, ms);
    };
};

// eslint-disable-next-line max-len
export const isMobileOrTablet = (): boolean => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

export const copyToClipboard = (str: string): void => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export const sleep = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));
