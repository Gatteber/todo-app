# todo-app

## Items to do
-add icons/other dependencies to webpack as necessary
-layout mobile
 -> Projects menu [x]
 -> Modal for adding item/project (try to export a modal module?) [x]
 -> Card Modal (for onclick expansion) 

-layout tablet
-layout desktop
-js (to be expanded later)


### Features
-views tab
-create task
-complete a task(button?)
-use window.innerWidth to make responsive requests 


#### Needed items
Icons:
Home
Cog
checkbox (for logo)

##### Notes
How to use a module:
RETURN functions/const that you want to use.
EXPORT the top level module
IMPORT the top level module to next doc and all RETURNED functions will be available.
When you use @use, must import to all files (consider using @forward? in next project) 

console.log(buttonitem.classList == "nav-add active");
This returns true - so, check for the classlist and render the correct button from the corresponding module(?)

submit form -> preventdefault -> make class -> add to "todo" array, stringify and store in local storage. done
render todo array (of objects). done
date functionality. done
modal click expansion. kinda done
Projects views. done


final todo:
set max characters on forms done
change week -> guide (just a modal render with instructions) done.
projects view styling
local storage for projects???
bug testing (make sure it looks good on all devices)
