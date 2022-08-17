import { cardRender } from "./cardcontroller";
import { toDoDeleter } from "./cardsetup";
import { projectViewControl } from "./projectsview";

//helper module
const domManip = (() => {
    const makeEl = (parent, element, classlist, html=null) => {
        const e = document.createElement(`${element}`);
        e.classList.add(`${classlist}`);
        e.innerHTML = html;
        parent.appendChild(e);
    }
    const grabEl = (e) => { return document.querySelector(`.${e}`)};

    return { makeEl, grabEl }
})();

//pageload initial DOM render module
const renderPage = (() => {
    //header
    const getContent = document.getElementById('content');
    domManip.makeEl(getContent, 'div', 'header');
    domManip.makeEl(getContent, 'div', 'nav');
    domManip.makeEl(getContent, 'div', 'content-body');
    const getHeader = domManip.grabEl('header');
    domManip.makeEl(getHeader, 'div', 'header-icon');
    domManip.makeEl(getHeader, 'div', 'header-text', "Done.");

    //body
    const getCardBody = domManip.grabEl('content-body');

    const renderBody = (spreadArray) => {
        //reset
        getCardBody.innerHTML = null;
        
        //make cards
        for (let i=0; i < spreadArray.length; i++) {
            const newCard = document.createElement('div');
            newCard.setAttribute('id', `card` + [i]);
            getCardBody.appendChild(newCard);
            newCard.classList.add('card-item');
            newCard.addEventListener('click', (e) => {
                //prevent window error on click but still gives modal
                if (e.path[0].classList.value === 'card-item') {
                const targetId = e.target.id
                const findId = targetId.slice(4, 5);
                projectViewControl.renderItemView(cardRender.todos[findId].itemName, cardRender.todos[findId].itemDesc, cardRender.todos[findId].completeDate, findId);
                }
            })
        }

        //render
        spreadArray.map((todo, index) => {
            const getCardIndex = document.getElementById(`card${index}`);
            domManip.makeEl(getCardIndex, 'div', 'card-text', `${todo.itemName}`);
            domManip.makeEl(getCardIndex, 'div', 'card-done');
            domManip.makeEl(getCardIndex, 'div', 'card-date', `${todo.completeDate}`);
            domManip.makeEl(getCardIndex, 'div', 'card-delete');
        })

        //add delete and complete functions
        const getDoneButtons = document.querySelectorAll('.card-done');
        getDoneButtons.forEach(button => {
            button.addEventListener('click', () => {
                const getSliceId = button.parentNode.id;
                const slicedId = getSliceId.slice(4, 5);
                toDoDeleter.delThis(slicedId);
            })
        })

        const getDeleteButtons = document.querySelectorAll('.card-delete');
        getDeleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const getSliceId = button.parentNode.id;
                const slicedId = getSliceId.slice(4, 5);
                toDoDeleter.delThis(slicedId);
            })
        })
    }
    
    //nav
    const getNav = domManip.grabEl('nav');
    const navElements = [
        'nav-add',
        'nav-today',
        'nav-week',
        'nav-projects'
    ];
    navElements.map(item => {
        domManip.makeEl(getNav, 'div',`${item}`, null);
    })
    const getNavAdd = domManip.grabEl('nav-add');
    const getNavProjects = domManip.grabEl('nav-projects');
    const getNavToday = domManip.grabEl('nav-today');
    const getNavWeek = domManip.grabEl('nav-week');
    const navSelectors = [
        getNavAdd,
        getNavProjects,
        getNavToday,
        getNavWeek,
    ];

    return { 
        getContent, 
        getNavAdd, 
        getNavProjects, 
        getNavToday, 
        getNavWeek, 
        navSelectors,
        renderBody, 
    }
})();

export { renderPage, domManip }
