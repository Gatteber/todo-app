import { domManip, renderPage } from './pageinit';
import { toDoMaker } from './cardsetup';
import { cardRender } from './cardcontroller';

const modalSettings = (() => {
    const addSettings = (formItem=null, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            formItem.setAttribute(`${key}`, `${value}`);
        };
    }

    const formSettingsItem = {
        action: "#",
        method: "post",
        id: "add-form",
    }

    const formSettingsProject = {
        action: "#",
        method: "post",
        id: "proj-form",
    }

    return { addSettings, formSettingsItem, formSettingsProject };
})();

const formSetter = (() => {
    const formInputSet = (item, type, name, id, placeholder) => {
        item.setAttribute("type", type);
        item.setAttribute("name", name);
        item.setAttribute("id", id);
        item.setAttribute("placeholder", placeholder);
        item.setAttribute("required", "");
    }

    return { formInputSet }
})();


//render module
const modalRender = (() => {
    //boilerplate
    const render = () => {
        domManip.makeEl(renderPage.getContent, 'div', 'modal-bg');
        domManip.makeEl(renderPage.getContent, 'div', 'modal-card');
        const getModalMenu = domManip.grabEl('modal-card');
        domManip.makeEl(getModalMenu, 'div', 'modal-card-header');
        const getModalHeader = domManip.grabEl('modal-card-header');
        domManip.makeEl(getModalHeader, 'div', 'modal-header-text', "Create...");
        domManip.makeEl(getModalHeader, 'button', 'modal-close-button', "x");
        domManip.makeEl(getModalMenu, 'div', 'modal-form-container');
        const getModalForm = domManip.grabEl('modal-form-container');
        domManip.makeEl(getModalForm, 'form', 'modal-form');
        //add delete class
        const getModalBg = domManip.grabEl('modal-bg');
        getModalBg.classList.add('m-close');
        const getModalClose = domManip.grabEl('modal-close-button');
        getModalClose.classList.add('m-close');
        const getItemToDelete = document.querySelectorAll('.m-close');
        getItemToDelete.forEach(item => {
            item.addEventListener("click", () => {
                delModal();
            })
        })
    }

    const delModal = () => {
        const getBg = domManip.grabEl('modal-bg');
        const getCard = domManip.grabEl('modal-card');
        getBg.parentNode.removeChild(getBg);
        getCard.parentNode.removeChild(getCard);
    }

    const newItem = () => {
        const getModalSettings = domManip.grabEl('modal-form');
        modalSettings.addSettings(getModalSettings, modalSettings.formSettingsItem);
        //name
        domManip.makeEl(getModalSettings, 'label', 'item-name-label', "Task Name: ");
        const formNameLabel = domManip.grabEl('item-name-label');
        formNameLabel.htmlFor = 'itemName';
        domManip.makeEl(getModalSettings, 'input', 'item-name');
        const formItemName = domManip.grabEl('item-name');
        formSetter.formInputSet(formItemName, "text", "item_name", "itemName", "e.g. Cook Dinner");
        formItemName.setAttribute('maxlength', '20');
        //description
        domManip.makeEl(getModalSettings, 'label', 'item-desc-label', "Description: ")
        const descNameLabel = domManip.grabEl('item-desc-label');
        descNameLabel.htmlFor = 'itemDesc';
        domManip.makeEl(getModalSettings, "textarea", 'item-desc');
        const formDescName = domManip.grabEl('item-desc');
        formSetter.formInputSet(formDescName, 'textarea', 'item_desc', "itemDesc", "Notes...")
        //dropdown (placeholder)
        domManip.makeEl(getModalSettings, 'label', 'item-dropdown-label', "Project: ");
        const formDropLabel = domManip.grabEl('item-dropdown-label');
        formDropLabel.htmlFor = 'itemDd';
        domManip.makeEl(getModalSettings, 'select', 'item-dd-label');
        const formDropItem = domManip.grabEl('item-dd-label');
        formDropItem.setAttribute("id", "itemDd");
        domManip.makeEl(formDropItem, 'option', 'test', "Default");
        cardRender.projects.map(proj => {
            domManip.makeEl(formDropItem, 'option', 'test', `${proj}`);
        })
        //render other items

        //submit button
        domManip.makeEl(getModalSettings, 'button', 'item-submit', "Submit");
        const getItemButton = domManip.grabEl('item-submit');
        getItemButton.setAttribute("id", "submit");
        getModalSettings.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById('itemName').value;
            const desc = document.getElementById('itemDesc').value;
            const proj = document.getElementById('itemDd').value;
            const newTodo = toDoMaker.toDoItem(name, desc, proj);
            cardRender.todos.push(newTodo);
            getModalSettings.reset();
            delModal();
            renderPage.renderBody(cardRender.todos)
        })
    }

    const newProject = () => {
        const getModalSettings = domManip.grabEl('modal-form');
        modalSettings.addSettings(getModalSettings, modalSettings.formSettingsProject);
        //name
        domManip.makeEl(getModalSettings, 'label', 'proj-name-label', "Project Name: ");
        const formNameLabel = domManip.grabEl('proj-name-label');
        formNameLabel.htmlFor = 'projName';
        domManip.makeEl(getModalSettings, 'input', 'proj-name');
        const formItemName = domManip.grabEl('proj-name');
        formSetter.formInputSet(formItemName, "text", "proj_name", "projName", "e.g. My Cool Project");
        formItemName.setAttribute('maxlength', '10');
        //submit button
        domManip.makeEl(getModalSettings, 'button', 'proj-submit', "Submit");
        const getItemButton = domManip.grabEl('proj-submit');
        getItemButton.setAttribute("id", "submit");
        getModalSettings.addEventListener("submit", (e) => {
            e.preventDefault();
            const newProj = document.getElementById('projName').value;
            cardRender.projects.push(newProj);
            getModalSettings.reset();
            delModal();
        })
    }

    return { render, newItem, newProject }
})();

export { modalRender };