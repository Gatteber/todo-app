//import space
import "./style.scss";

//app main module
const mainApp = (() => {
    const hellotest = document.createElement('h1');
    const helloBody = document.querySelector('body');
    helloBody.append(hellotest);
    hellotest.innerHTML = "Todo App";

    console.log("Hello, World.");
})();