import theme from './theme';
export function setTheme(data) {
    try {
        localStorage.setItem('theme', JSON.stringify(data));
    }
    catch (err) {
        console.log(err);
    }
}
export function getTheme() {
    const themeData = localStorage.getItem('theme');
    if (themeData) {
        return JSON.parse(themeData);
    }
    return theme;
}
