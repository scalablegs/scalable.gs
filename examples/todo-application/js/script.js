/* Author: Kenneth Nordahl

*/
$(document).ready(function() { 

  var i = 0;
  
  // Initial loading of todos
  for( i = 0; i < localStorage.length; i++)
    $("#todos").prepend("<li id='todo-"+ i +"'>" + localStorage.getItem('todo-'+i) + " <a href='#'>x</a></li>");
    
  // Add a todo
  $("#todos-form").submit(function() {
    if (  $("#todo").val() != "" ) {
      localStorage.setItem( "todo-"+i, $("#todo").val() );
      $("#todos").prepend("<li id='todo-"+i+"'>"+localStorage.getItem("todo-"+i)+" <a href='#'>x</a></li>")
      $("#todo-" + i).css('display', 'none');
      $("#todo-" + i).slideDown();
      $("#todo").val("");
      i++;
    }
    return false;
  });
  
  // Remove a todo      
  $("#todos li a").live("click", function() {
    localStorage.removeItem($(this).parent().attr("id"));
    $(this).parent().slideUp('slow', function() { $(this).remove(); } );
    for(i=0; i<localStorage.length; i++) {
      if( !localStorage.getItem("todo-"+i)) {
        localStorage.setItem("todo-"+i, localStorage.getItem('todo-' + (i+1) ) );
        localStorage.removeItem('todo-'+ (i+1) );
      }
    }
  });
}); 
