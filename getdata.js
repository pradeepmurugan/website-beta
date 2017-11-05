
   $(document).ready(function(){
      $("#table").hide();
    $("button").click(function(){
       $('#img').show();
   
     var arr = new Array();
     function callback(data)
     {
        arr.push(data);
        $('#table').bootstrapTable({ data: arr });
        $('#table').bootstrapTable('refreshOptions', { data: arr });
     }
     $.get("https://jsonplaceholder.typicode.com/posts/1", callback);
     $.get("https://jsonplaceholder.typicode.com/posts/2", callback);
     $.get("https://jsonplaceholder.typicode.com/posts/3", callback);
     $.get("https://jsonplaceholder.typicode.com/posts/4", callback);
     $.get("https://jsonplaceholder.typicode.com/posts/5", callback);
     console.log("hello");
    });
});
