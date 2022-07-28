import { domManip, renderPage } from './pageinit';

//navbar module
const navBarControl = (() => {
    let isActive = false;

    const open = (buttonitem) => {
        buttonitem.classList.add('active');
        // button.classList.add('active');
        // domManip.makeEl(renderPage.getContent, 'div', 'nav-add-menu');
        // const getAddMenuBody = domManip.grabEl('nav-add-menu');
        // domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-i', "+ New Item");
        // domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-p', "+ New Project");
    }

    const close = (buttonitem) => {
        buttonitem.classList.remove('active');
        // const getAddMenuBody = domManip.grabEl('nav-add-menu');
        // getAddMenuBody.parentNode.removeChild(getAddMenuBody);
    }

    return { isActive, open, close, }

})();

//nav bar event module
const navBarEvent = (() => {
    renderPage.navSelectors.map(item => {
        item.addEventListener ('click', () => {
            if(!navBarControl.isActive) {
                navBarControl.open(item);
                navBarControl.isActive = true;
            } else if (navBarControl.isActive) {
                navBarControl.close(item);
                navBarControl.isActive = false;
            }
        })
    })
})();