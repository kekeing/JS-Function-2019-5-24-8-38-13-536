<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p id = "de"></p>
<p id = "demo"></p>
<script>
function countWords(s){
	var flag = 0;
	var count = 0;
	for (var i = 0;i < s.length,i++){
		if (a.charAt(i) == " "){flag = 1;}
	if (flag == 1){
		count++;
		flag = 0;
	}
	return count;
	
	}

}
b = countWords('Good morning, I love JavaScript.');

var flag = 0;
var count = 0;
var s = 'Good morning, I love JavaScript.';
for (var i = 0;i < s.length,i++)
{
	if (a.charAt(i) == " "){flag = 1;}
if (flag == 1)
{
	count++;
	flag = 0;
}
}
document.getElementById("de").innerHTML = b;
document.getElementById("demo").innerHTML = a;
</script>
</body>
</html>
