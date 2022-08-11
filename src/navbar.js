import { domManip, renderPage } from './pageinit';
import { modalRender } from "./modalmenu";

//navbar module
const navBarControl = (() => {
    let isActive = false;

    const open = (buttonitem) => {
        buttonitem.classList.add('active');
    }

    const close = (buttonitem) => {
        buttonitem.classList.remove('active');
    }

    return { isActive, open, close, }
})();

const renderNavItem = (() => {
    //check for each item and render it
    const render = (domElement) => {
        if (domElement.classList == "nav-add active") {
            domManip.makeEl(renderPage.getContent, 'div', 'nav-add-menu');
            const getAddMenuBody = domManip.grabEl('nav-add-menu');
            domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-i', "+ New Item");
            const addItem = domManip.grabEl('nav-menu-add-i');
            addItem.addEventListener("click", () => {
                modalRender.render();
                modalRender.newItem();
            });
            domManip.makeEl(getAddMenuBody, 'div', 'nav-menu-add-p', "+ New Project");
            const addProject = domManip.grabEl('nav-menu-add-p');
            addProject.addEventListener("click", () => {
                modalRender.render();
                modalRender.newProject();
            });

        } else if (domElement.classList == "nav-today active") {
            //render today's tasks
            console.log("i'm under construction!");
            navBarControl.close(domElement);

        } else if (domElement.classList == "nav-week active") {
            //render this week's tasks
            console.log("i'm under construction too!");
            navBarControl.close(domElement);

        } else if (domElement.classList == "nav-projects active") {
            //render nav projects
            console.log("i'm being worked on!");
            domManip.makeEl(renderPage.getContent, 'div', 'nav-proj-menu');
            const getProjMenuBody = domManip.grabEl('nav-proj-menu');
            domManip.makeEl(getProjMenuBody, 'div', 'proj-item', "All Projects");
            domManip.makeEl(getProjMenuBody, 'div', 'proj-item', "Test Project");
        }
    };

    const delRender = () => {
        const getAddMenuBody = domManip.grabEl('nav-add-menu');
        const getProjMenuBody = domManip.grabEl('nav-proj-menu');
        if (getAddMenuBody !== null) {
            getAddMenuBody.parentNode.removeChild(getAddMenuBody);
        } else if (getProjMenuBody !== null) {
            getProjMenuBody.parentNode.removeChild(getProjMenuBody);
        }
    }

    return { render, delRender };
})();

export { navBarControl, renderNavItem };