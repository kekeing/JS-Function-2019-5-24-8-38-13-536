<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p id = "demo"></p>
<p id = "de"></p>
<script>
function alphabetSort(s){
	var array = s.split("");
	return array.sort();

}
var str = "hello";
var b = alphabetSort("hello");


document.getElementById("de").innerHTML = b;
</script>
</body>
</html>
