//imports
// import checkMark from "./img/check-outline.svg";

//helper module
const domManip = (() => {
    const makeEl = (parent, element, classlist, html=null) => {
        const e = document.createElement(`${element}`);
        e.classList.add(`${classlist}`);
        e.innerHTML = html;
        parent.appendChild(e);
    }
    
    //grab elem
    const grabEl = (e) => { return document.querySelector(`.${e}`)};

    return { makeEl, grabEl }
})();

//pageload initial DOM render module
const renderPage = (() => {
    const getContent = document.getElementById('content');
    domManip.makeEl(getContent, 'div', 'header');
    domManip.makeEl(getContent, 'div', 'nav');
    domManip.makeEl(getContent, 'div', 'content-body');
    const getHeader = domManip.grabEl('header');
    domManip.makeEl(getHeader, 'div', 'header-icon');
    domManip.makeEl(getHeader, 'div', 'header-text', "Do It.");

})();
