//import space
import "./style.scss";
import { renderPage } from "./pageinit";
import  { navBarControl, renderNavItem } from "./navbar";
import "./projectsview";
import { modalRender } from "./modalmenu";
import { cardRender } from "./cardcontroller";


//nav bar event module
const navBarEventControl = (() => {
    renderPage.navSelectors.map(item => {
        item.addEventListener ('click', () => {
            if(!navBarControl.isActive) {
                navBarControl.open(item);
                navBarControl.isActive = true;
                renderNavItem.render(item);
                setTimeout(() => {
                    if (navBarControl.isActive) {
                        navBarControl.close(item);
                        navBarControl.isActive = false;
                        renderNavItem.delRender();
                    }
                }, "5000");

            } else if (navBarControl.isActive) {
                navBarControl.close(item);
                navBarControl.isActive = false;
                renderNavItem.delRender();
            }
        })
    })
})();

//app main module
const mainApp = (() => {
    window.onbeforeunload = () => {
        for (let i = 0; i < cardRender.todos.length; i++) {
            const saveTodoItem = JSON.stringify(cardRender.todos[i]);
            localStorage.setItem(i, saveTodoItem);
        }
    }

    for (let i = 0; i < localStorage.length; i++) {
        const getItem = JSON.parse(localStorage[i]);
        cardRender.todos.push(getItem);
    }
    renderPage.renderBody(cardRender.todos);
    localStorage.clear();
})();

