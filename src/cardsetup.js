import { endOfToday } from "date-fns";

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

export { toDoMaker };