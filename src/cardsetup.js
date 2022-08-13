import { endOfToday } from "date-fns";
import { cardRender } from "./cardcontroller";
import { renderPage } from "./pageinit";

const toDoMaker = (() => {
    const toDoItem = (itemName, itemDesc, projName) => {
        //extract date and slice
        const date = endOfToday();
        const todaysDate = date.toString().slice(4, 10);

        let completeDate = todaysDate;
        let projList = [];
        let isComplete = false;
    
        return { itemName, itemDesc, projName, completeDate, isComplete, projList }
    };

    return { toDoItem }
})();

const toDoDeleter = (() => {
    const delThis = (id) => {
        // console.log(cardRender.todos[id]);
        cardRender.todos.splice(id, 1);
        renderPage.renderBody([...cardRender.localTodos, ...cardRender.todos]);
    }

    return { delThis };
})();

export { toDoMaker, toDoDeleter };