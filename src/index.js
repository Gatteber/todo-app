//import space
import "./style.scss";
import { renderPage } from "./pageinit";
import  { navBarControl, renderNavItem } from "./navbar";
import "./projectsview";
import { modalRender } from "./modalmenu";


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
    console.log("I'm from index");
    // modalRender.render();
    // modalRender.newItem();
    // modalRender.newProject();

    // renderPage.renderBody();

})();

