<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p id="demo"></p>
<p id="demo1"></p>
<script>
function palindRome(str){
    var len = str.length;
    var str1 = "";
    for(var i=len-1; i>=0;i--){
        str1+=str[i];
    }
    if (str1 == str)
    	return true;
    else return false;
}
c = palindrome('hello'); // should return false
d = palindrome('abcba'); // should return true
document.getElementById("demo").innerHTML = c;
document.getElementById("demo1").innerHTML = d;
</script>
</body>
</html>
