
const toDoMaker = (() => {
    const toDoItem = (itemName, itemDesc, projName) => {
        let completeDate = "today";
        let projList = [];
        let isComplete = false;
    
        return { itemName, itemDesc, projName, completeDate, isComplete, projList }
    };

    return { toDoItem }
})();

export { toDoMaker };