import { domManip, renderPage } from './pageinit';

//navbar module
const navBarControl = (() => {
    let isActive = false;

    const open = () => {
        renderPage.getNavAdd.classList.add('active');
        domManip.makeEl(renderPage.getContent, 'div', 'nav-add-menu');
        const getAddMenuBody = domManip.grabEl('nav-add-menu');
        domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-i', "+ New Item");
        domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-p', "+ New Project");
    }

    const close = () => {
        renderPage.getNavAdd.classList.remove('active');
        const getAddMenuBody = domManip.grabEl('nav-add-menu');
        getAddMenuBody.parentNode.removeChild(getAddMenuBody);
    }

    return { isActive, open, close, }

})();

//nav bar event module
const navBarEvent = (() => {
        renderPage.getNavAdd.addEventListener('click', () => {
            if (!navBarControl.isActive) {
                navBarControl.open();
                navBarControl.isActive = true;
            }
            else if (navBarControl.isActive) {
                navBarControl.close();
                navBarControl.isActive = false;
            }

        })
})();