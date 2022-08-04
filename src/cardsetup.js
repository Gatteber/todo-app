

//todo factory constructor
const todoItem = (itemName, itemDesc, projName) => {
    let completeDate = "today";
    let projList = [];
    let isComplete = false;

    return { itemName, itemDesc, projName, completeDate, isComplete, projList }
};