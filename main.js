<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p id="demo"></p>
<script>
function reverseString(str){
	var result = " ";
	for(var i = str.length - 1;i >= 0;i--)
	{
		result += str.charAt(i);
		}
	return result;
}
var a = reverseString('hello');
document.getElementById("demo").innerHTML = a;
</script>
</body>
</html>
