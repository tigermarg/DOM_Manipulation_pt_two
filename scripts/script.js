// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// console.log(Object.keys(menuLinks[1].subLinks[1]))

// Part 1: Getting Started---------Recalling DOM Manipulation Part 1-------------------------------------

// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl.
    let mainEl = document.querySelector(`main`)
    // console.log(mainEl[0])

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
    // Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
        //Setting background color using CSS properties.
    mainEl.style.backgroundColor = `var(--main-bg)`

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
    mainEl.innerHTML = `<h1>DOM Manipulation</h1>`

// Add a class of flex-ctr to mainEl.
    // Hint: Use the Element.classList API.
    mainEl.classList.add(`flex-ctr`)


// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
    let topMenuEl = document.getElementById(`top-menu`)
    // console.log(topMenuEl)

// Set the height of the topMenuEl element to be 100%.
    topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
    topMenuEl.style.backgroundColor = `var(--top-menu-bg)`

// Add a class of flex-around to topMenuEl.
    topMenuEl.classList.add(`flex-around`)


// Part 3: Adding Menu Buttons
//1. Iterate over the entire menuLinks array and for each "link" object:
    menuLinks.forEach((link) => {
    //2. Create an <a> element - .createElement()
    let newLink = document.createElement(`a`);
    // console.log(newLink)

    //3. On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, link.href);
    // console.log(newLink)

    //4. Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = link.text;
    // console.log(newLink)

    //5. Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink)

})


// Part 2: Adding Additional HTML and CSS-------------------------------------------------------------
    //Added to html & css files


// Part 3: Creating the Submenu------------------------------------------------------------------------
// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
    let subMenuEl = document.getElementById(`sub-menu`);
    console.log(subMenuEl)
// 2. Set the height subMenuEl element to be "100%".
    subMenuEl.style.height = `100%`;

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
    subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`

// 4. Add the class of flex-around to the subMenuEl element.
    subMenuEl.classList.add(`flex-around`)

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:

// 1. Set the CSS position property of subMenuEl to the value of absolute.
    subMenuEl.style.position = `absolute`

// 2. Set the CSS top property of subMenuEl to the value of 0.
    subMenuEl.style.top = `0`


// Part 4: Adding Menu Interaction--------------------------------------------------------------------
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
    let topMenuLinks = document.querySelectorAll(`a`)
    // console.log(topMenuLinks)

// 2. Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    // 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

    // 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
        // Hint: Removing a non-existent class from an element does not cause an error!


   topMenuEl.addEventListener(`click`, (e) => { //Add `click` event to top menu
        e.preventDefault()  //Call the event object's preventDefault() method
        if(e.target.localName !== `a`) return;  //Return if element clicked is not a link
        console.log(topMenuEl) 

    e.target.classList.toggle(`active`) //Add `active` class to element clicked //Single element so keep outside of for loop
    // console.log(e.target)

    topMenuLinks.forEach(i => { //Looping through top menu links
        // console.log(i)
        if(i !== e.target){ //If element is not clicked
                i.classList.remove(`active`)}   //Remove `active` class
        })

    //Clicking top menu links shows submenu bar but not hiding it when clicking again //Submenu bar is also still displaying for ABOUT, which has no sublink property

    topMenuLinks.forEach(i => { //Looping through top menu links        
        if(i !== e.target.classList.toggle(`active`))   //If element is not `active`
            {
                if(i.subLinks == `0`)  //If submenu is empty,
                    {
                        subMenuEl.style.top = `0`   //Set CSS top property to 0 
                } else {
                        subMenuEl.style.top = `100%` //Else, set CSS top property to 100% 
                    }
            }})

     })   
                    
// Part 5: Adding Submenu Interaction--------------------------------------------------------------

// Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
    // 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
        // a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
        // b. Otherwise, set the CSS top property of subMenuEl to 0.
            // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
    
    //See comments above-----


// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
    // 1. Clear the current contents of subMenuEl.
    // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
        // a. Create an <a> element.
        // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        // c. Set the element's content to the value of the text property of the "link" object.
        // d. Append the new element to the subMenuEl.

    function buildSubmenu(){   //Create helper function
        subMenuEl.textContent = ` `;    //Clear subMenuEl

    subLinks.forEach(i => { //Loop through subLinks array
        let subMenuLinks = document.createElement(`a`); //Create <a> element
        subMenuLinks.setAttribute(`href`, link.href); //add href attribute to <a>
        subMenuLinks.textContent == link.text; //Set element's content to value of `link` text
        subMenuEl.appendChild(subMenuLinks) //Append new element to subMenuEl
        })
     }

// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
    // 1. Attach a delegated 'click' event listener to subMenuEl.
        // The first line of code of the event listener function should call the event object's preventDefault() method.
        // The second line of code within the function should immediately return if the element clicked was not an <a> element.
        // Log the content of the <a> to verify the handler is working.
    // 2. Next, the event listener should set the CSS top property of subMenuEl to 0.
    // 3. Remove the active class from each <a> element in topMenuLinks.
    // 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
    // 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

    subMenuEl.addEventListener(`click`, (e) => { //Add `click` event to subMenuEl
        e.preventDefault()  //Call the event object's preventDefault() method
        if(e.target.localName !== `a`) return;  //Return if element clicked is not a link
        console.log(subMenuEl) 
    
    subMenuEl.forEach(i => {    //Loop through subMenuEl
        subMenuEl.style.top = `0`;  //Set CSS top propery to 0
        topMenuLinks[i].classList.remove(`active`); //Remove `active` class from each topMenuLinks element
        mainEl.innerHTML = subMenuEl.e.target.textContent   //Update mainEl contents to contents of <a> element clicked within subMenuEl
        
        if(topMenuLinks[0] == e.target){    //If ABOUT link is clicked 
            topMenuLinks[0].textContent == `<h1>About</h1>` //Display this
        }
        })
        
    })