import { domManip, renderPage } from "./pageinit";

const renderHelpMenu = (() => {
    //modal
    const renderHelp = () => {
        domManip.makeEl(renderPage.getContent, 'div', 'modal-bg');
        const getModalClose = domManip.grabEl('modal-bg');
        domManip.makeEl(renderPage.getContent, 'div', 'modal-card');
        const getModalCard = domManip.grabEl('modal-card');
        getModalCard.classList.add('modal-card-settings');
        domManip.makeEl(getModalCard, 'div', 'help-title', 'Get it Done.');
        domManip.makeEl(getModalCard, 'div', 'help-info', 'Done allows you to make your own tasks. Start by adding a task (or project) and then making your name and description. You can adjust the date for each task to complete by tapping or clicking the card anywhere on the screen. Projects can be adjusted with the calendar icon. If you need to view your tasks for today, simply click on the T button. When you are ready to complete a task, you can complete it, or if you make a mistake, simply delete it. Above all else, make sure you get it Done. Happy tasking!')
        domManip.makeEl(getModalCard, 'div', 'help-footer', 'Made by Gatteber@Github, 2022');
        
        getModalClose.addEventListener('click', () => {
            const getBg = domManip.grabEl('modal-bg');
            const getCard = domManip.grabEl('modal-card');
            getBg.parentNode.removeChild(getBg);
            getCard.parentNode.removeChild(getCard);
        })
    }

    return { renderHelp }
})();

export { renderHelpMenu };