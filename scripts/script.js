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
    let topMenuLinks = document.createElement(`a`)
    console.log(topMenuLinks)

// 2. Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event object's preventDefault() method.
    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
        // Hint: Removing a non-existent class from an element does not cause an error!


   topMenuEl.addEventListener(`click`, (e) => {
        e.preventDefault()
        if(e.target.localName !== `a`) return;
        // console.log(e.target.innerText)
    
        // console.log(menuLinks[0])

    menuLinks.forEach(i => {
        if(e.target.classList.contains(`active`)){
            if(i == e.target) {
                return;
            }
                else {e.target.classList.remove(`active`)
                }
            else{e.target.classList.add(`active`)}
        }})})
       

