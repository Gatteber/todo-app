import { domManip, renderPage } from './pageinit';

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
        domManip.makeEl(getModalCard, 'div', 'v-item-date', date);
        // console.log(itemId);

        getModalClose.addEventListener('click', () => {
                const getBg = domManip.grabEl('modal-bg');
                const getCard = domManip.grabEl('modal-card');
                getBg.parentNode.removeChild(getBg);
                getCard.parentNode.removeChild(getCard);
        })

    }

    return { renderItemView };
})();


export { projectViewControl };