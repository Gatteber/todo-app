import { format } from "date-fns";
import { cardRender } from "./cardcontroller";
import { renderPage } from "./pageinit";

const toDoMaker = (() => {
    const toDoItem = (itemName, itemDesc, projName) => {
        let completeDate = format(new Date(), "MMM dd");
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
        // renderPage.renderBody([...cardRender.localTodos, ...cardRender.todos]);
        renderPage.renderBody(cardRender.todos)
    }

    return { delThis };
})();

export { toDoMaker, toDoDeleter };