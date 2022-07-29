import { domManip, renderPage } from './pageinit';

//render module
const modalRender = (() => {
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
    getModalSettings.setAttribute("action", "#");
    getModalSettings.setAttribute("method", "post");
    getModalSettings.setAttribute("id", "add-form");
})();

const modalSettings = (() => {
    const addSettings = (formItem=null, obj) => {
        console.log(obj);
    }

    const formSettings = {
        "action": "#",
        "method": "post",
        "id": "add-form",
    }
    console.log(addSettings(null, formSettings));
})();