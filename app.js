let parent = $("#div").parent();
let children = $(parent).children();
let grandchildren = $(children).children();
let navItem = $(children).children("navItem");

$(navItem).css('color', 'white')

//$("navitem").css('color', 'white')
$("nav").css('background-color', '#145')
