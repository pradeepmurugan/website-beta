<!DOCTYPE html>
<html>
<head>
<title>Company Name</title>
<h1><center> Company Name</center></h1>

</head>

 <meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-table/1.10.1/bootstrap-table.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
</head>
    
<script>
$(document).ready(function(){
$("#table").hide();
    $("button").click(function(){
    $("#table").show()
        $.get("https://jsonplaceholder.typicode.com/posts", function(data){
        console.log(JSON.stringify(data));
        $('#table').bootstrapTable({
                //Assigning data to table
                data: data
            });
            
        });
    });
});
</script>

<body>
<hr style="BORDER-RIGHT: medium none; BORDER-TOP: #cccccc 1px solid; BORDER-LEFT: medium none; BORDER-BOTTOM: medium none; HEIGHT: 1px"> 
<div class="container-fluid">
<div class="row">
<div class="col-sm-2">
<center><button class="btn btn-default">Get Data</button></center>
</div>
<div class="col-sm-10">
        <table id="table" data-height="460">
        <thead>
            <tr>
                <th data-field="id">ID</th>
                <th data-field="title">TITLE</th>
                <th data-field="userId">USER ID</th>
            </tr>
        </thead>
    </table>
    </div>
    </div>
</body>
</html>
