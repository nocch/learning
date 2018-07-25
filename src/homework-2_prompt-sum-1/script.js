   // я подсмотрела потому что у меня не получалось
   function add(a, b) {
        return a + b
    };   

   var x = +prompt("Введите первое число", '');
   var y = +prompt("Введите второе число", '');
	 var result = add(Number(x), Number(y));
   alert(result);