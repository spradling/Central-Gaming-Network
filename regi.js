$(document).ready(function(){
     $("#regForm input[name ='username']").focusin(function(){
         $("#advisor").html("<ul class=\"alert alert-warning\"><li>Must be 6-10 character in length</li> <li>Must begin with a letter</li> <li>May contain only letters and digits</li></ul>");
     });
    $("#regForm input[name ='username']").focusout(function(){
        $("#advisor").html("");
    });
    $("#regForm input[name ='pass']").focusin(function(){
        $("#advisor").html("<ul class=\"alert alert-warning\"><li>Must be 6-10 characters in length</li><li>May contain only letters, digits, and _</li><li>Must contain uppercase, lowercase, and a number</li></ul>");});
    $("#regForm input[name ='pass']").focusout(function(){
         $("#advisor").html("");
    });
     $("#regForm input[name ='pass_repeat']").focusin(function(){
         $("#advisor").html("<ul class=\"alert alert-warning\"><li>Passwords must match</li><li>Password is case-sensitive</li></ul>");});
    $("#regForm input[name ='pass_repeat']").focusout(function(){
        $("#advisor").html("");});
});
