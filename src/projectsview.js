import { domManip, renderPage } from './pageinit';
import { format } from 'date-fns';
import { cardRender } from './cardcontroller';

//project view module
const projectViewControl = (() => {
    const renderItemView =  (name, desc, date, itemId) => {
        //modal
        domManip.makeEl(renderPage.getContent, 'div', 'modal-bg');
        const getModalClose = domManip.grabEl('modal-bg');
        domManip.makeEl(renderPage.getContent, 'div', 'modal-card');
        const getModalCard = domManip.grabEl('modal-card');
        domManip.makeEl(getModalCard, 'div', 'v-item-name-head', "Item Name: ")
        domManip.makeEl(getModalCard, 'div', 'v-item-name', name);
        domManip.makeEl(getModalCard, 'div', 'v-item-desc-head', "Description: ")
        domManip.makeEl(getModalCard, 'div', 'v-item-desc', desc);
        domManip.makeEl(getModalCard, 'div', 'v-item-date-head', "Date to finish by")
        domManip.makeEl(getModalCard, 'input', 'v-item-form', "test");
        const getForm = domManip.grabEl('v-item-form');
        getForm.setAttribute("type", "date");
        const finalValue = (format (new Date(date),'2022-MM-dd'))
        getForm.setAttribute("value", finalValue);
        console.log(cardRender.todos[itemId]);

        getModalClose.addEventListener('click', () => {
                const getBg = domManip.grabEl('modal-bg');
                const getCard = domManip.grabEl('modal-card');
                //get result and update date, re-render body.
                const getForm = domManip.grabEl('v-item-form');
                const result = format(new Date(getForm.value), 'MMM dd');
                cardRender.todos[itemId].completeDate = result;
                renderPage.renderBody(cardRender.todos);
                getBg.parentNode.removeChild(getBg);
                getCard.parentNode.removeChild(getCard);
        })

    }

    return { renderItemView };
})();


export { projectViewControl };