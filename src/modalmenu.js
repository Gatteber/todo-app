import { domManip, renderPage } from './pageinit';

const modalSettings = (() => {
    const addSettings = (formItem=null, obj) => {
        for (const [key, value] of Object.entries(obj)) {
            formItem.setAttribute(`${key}`, `${value}`);
        };
    }

    const formSettings = {
        action: "#",
        method: "post",
        id: "add-form",
    }

    return { addSettings, formSettings };
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
    
    const render = () => {
        domManip.makeEl(renderPage.getContent, 'div', 'modal-bg');
        domManip.makeEl(renderPage.getContent, 'div', 'modal-card');
        const getModalMenu = domManip.grabEl('modal-card');
        domManip.makeEl(getModalMenu, 'div', 'modal-card-header');
        const getModalHeader = domManip.grabEl('modal-card-header');
        domManip.makeEl(getModalHeader, 'div', 'modal-header-text', "New Item");
        domManip.makeEl(getModalHeader, 'button', 'modal-close-button', "x");
        domManip.makeEl(getModalMenu, 'div', 'modal-form-container');
        const getModalForm = domManip.grabEl('modal-form-container');
        domManip.makeEl(getModalForm, 'form', 'modal-form');
        const getModalSettings = domManip.grabEl('modal-form');
        modalSettings.addSettings(getModalSettings, modalSettings.formSettings);
    }


    const newItem = () => {
    const getModalSettings = domManip.grabEl('modal-form');
    //name
    domManip.makeEl(getModalSettings, 'label', 'item-name-label', "Task Name: ");
    const formNameLabel = domManip.grabEl('item-name-label');
    formNameLabel.htmlFor = 'itemName';
    domManip.makeEl(getModalSettings, 'input', 'item-name');
    const formItemName = domManip.grabEl('item-name');
    formSetter.formInputSet(formItemName, "text", "item_name", "itemName", "e.g. Cook Dinner");
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
    domManip.makeEl(formDropItem, 'option', 'test', "Default");
    //render other items

    //submit button
    domManip.makeEl(getModalSettings, 'button', 'item-submit', "Submit");
    const getItemButton = domManip.grabEl('item-submit');
    getItemButton.setAttribute("id", "submit");
    }

    return { render, newItem }
})();

export { modalRender };