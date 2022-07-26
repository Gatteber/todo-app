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
    //header
    const getContent = document.getElementById('content');
    domManip.makeEl(getContent, 'div', 'header');
    domManip.makeEl(getContent, 'div', 'nav');
    domManip.makeEl(getContent, 'div', 'content-body');
    const getHeader = domManip.grabEl('header');
    domManip.makeEl(getHeader, 'div', 'header-icon');
    domManip.makeEl(getHeader, 'div', 'header-text', "Done.");

    //body
    const getCardBody = domManip.grabEl('content-body');
    domManip.makeEl(getCardBody, 'div', 'card-item');
    const getcardItem = domManip.grabEl('card-item');
    domManip.makeEl(getcardItem, 'div', 'card-text', "Go to the Doctor tmr");
    domManip.makeEl(getcardItem, 'div', 'card-done');
    domManip.makeEl(getcardItem, 'div', 'card-date', "Jul 31");
    domManip.makeEl(getcardItem, 'div', 'card-delete');

    // domManip.makeEl(getCardBody, 'div', 'card-item', "Pick up Groceries");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "ok up to 20 characters");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");
    // domManip.makeEl(getCardBody, 'div', 'card-item', "test");

    
    //nav
    const getNav = domManip.grabEl('nav');
    const navElements = [
        'nav-add',
        'nav-today',
        'nav-week',
        'nav-projects'
    ]
    navElements.map(item => {
        domManip.makeEl(getNav, 'div',`${item}`, null);
    })

})();

