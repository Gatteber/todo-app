const cardRender = (() => {
    let todos = [];
    let localTodos = [];
    let projects = [];
    let localProjects = [];


    return { todos, localTodos, projects, localProjects };
})();

export { cardRender };