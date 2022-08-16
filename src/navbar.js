import { domManip, renderPage } from './pageinit';
import { modalRender } from "./modalmenu";
import { cardRender } from './cardcontroller';
import { format } from 'date-fns';

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
            const result = format(new Date(), 'MMM dd');
            cardRender.todos.map (item => {
                if (item.completeDate === result) {
                    cardRender.localTodos.push(item);
                }
                renderPage.renderBody(cardRender.localTodos);
            })
            cardRender.localTodos = [];
            navBarControl.close(domElement);

        } else if (domElement.classList == "nav-week active") {
            //render this week's tasks
            console.log("i'm under construction too!");
            modalRender.render();
            navBarControl.close(domElement);

        } else if (domElement.classList == "nav-projects active") {
            //render nav projects
            domManip.makeEl(renderPage.getContent, 'div', 'nav-proj-menu');
            const getProjMenuBody = domManip.grabEl('nav-proj-menu');
            domManip.makeEl(getProjMenuBody, 'div', 'proj-item', "All Projects");

            //render array
            cardRender.projects.map(proj => {
                domManip.makeEl(getProjMenuBody, 'div', 'proj-item', `${proj}`);
            })

            const getProjects = document.querySelectorAll('.proj-item');
            getProjects.forEach(item => {
                item.addEventListener('click', (e) => {
                    //deprecated but works for now
                    //search projects and find matching item, then render
                    cardRender.todos.map(todo => {
                        if (todo.projName === e.srcElement.innerHTML) {
                            cardRender.localTodos.push(todo);
                            renderPage.renderBody(cardRender.localTodos);
                        }
                    })
                    if (e.srcElement.innerHTML === "All Projects") {
                        renderPage.renderBody(cardRender.todos);
                    }
                    cardRender.localTodos = [];
                })
            })
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