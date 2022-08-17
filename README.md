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
projects view styling done
local storage for projects??? seems impossible with how I implemented saving.
bug testing (make sure it looks good on all devices) done.



###### Reflection
It's finished. To be honest, this project was, I think, extremely overwhelming. I wasn't prepared for how much work it was going to take to make everything, and when I decided to try to make a fully responsive app along with the features I had chosen, I severely underestimated how much time it was going to take. However, on the other hand, for the most part, everything went smoothly. There are definitely still some bugs with how the app functions. In retrospect, while I wanted to make an "auto-close" menu, that ended up becoming kind of buggy, and to be honest it doesn't work the way I think it should. However, I have no idea how to fix it, and I'm proud of myself for at least attempting it, so for now I'll leave it. If this were some kind of real situation, it would definitely be refactored.

I clearly need to spend more time understanding SOLID principles. I tried to divide projects out, but to be honest, I really struggled to understand what should be its own module, how I should change things, where they should be changed, and so on. I think maybe it's a good idea to go look at some more professional projects and study what they have done at some point, as the way I approached it got quite messy, I think.

I wanted to have projects stored locally too, but the way I approached my local projects implementation was, not good. I think I also need to spend more time understanding how you would use localStorage for storing multiple types of data. I think I understand the theory, but implementing it was too complicated, and to be honest, I'm a little burned out on this project. I may come back at some point to fix it.

Overall, I was really happy that everything turned out to work responsively and everything functions pretty well. It feels like things are kind of making sense. Just remember, never give up!