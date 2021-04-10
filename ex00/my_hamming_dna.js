/*var argv = process.argv;// console.log(argv, '\nargv[ 0 + 2 ]:', argv[0+2], '\nargv[ 1 + 2 ]:', argv[1+2]); //var argv = process.argv; console.log(argv, '\n', argv[0+2], '\n', argv[1+2]); //var argv = process.argv.slice(2);
var argc = argv.length;// console.log('argc:', argc); //var argc = argv.length - 2; console.log(argc);
var param_1 = argv[2];// console.log('param_1:', argv[0+2]);
var param_2 = argv[3];// console.log('param_2:', argv[1+2]);
var s_1 = param_1;// console.log('s_1:', param_1);
var s_2 = param_2;// console.log('s_2:', param_2);
//var m = 0;
var i = 0; //var i = m;
var n_1 = param_1.length;
var n_2 = param_2.length;
var n = param_1.length;
var j = 0;

*///(
function my_hamming_dna(param_1, param_2) {
/*	var argv = process.argv;// console.log(argv, '\nargv[ 0 + 2 ]:', argv[0+2], '\nargv[ 1 + 2 ]:', argv[1+2]); //var argv = process.argv; console.log(argv, '\n', argv[0+2], '\n', argv[1+2]); //var argv = process.argv.slice(2);
	var argc = argv.length;// console.log('argc:', argc); //var argc = argv.length - 2; console.log(argc);
	var param_1 = argv[2];// console.log('param_1:', argv[0+2]);
	var param_2 = argv[3];// console.log('param_2:', argv[1+2]);*/
	var s_1 = param_1;// console.log('s_1:', param_1);
	var s_2 = param_2;// console.log('s_2:', param_2);
	//var m = 0;
	var i = 0; //var i = m;
	var n_1 = param_1.length;
	var n_2 = param_2.length;
	var n = param_1.length;
	var j = 0;

	if ( param_1.length != param_2.length ) {
		//console.log('n_1:', param_1.length, '\nn_2:', param_2.length);
		//console.log(`Input: "${param_1}" && "${param_2}"\nOutput: \nReturn Value: -1`);
		return -1; // Or declare i if the lengths of both strings are equal, and check if i exists? No, because `var n = param_1.length == param_2.length;` returns true. However, `if ( n_2 == n_1 ) { var n = param_2.length; } else { return -1; };` could be written on line 7 in lieu of `var n = param_1.length;`, but then it should be put at the beginning of the script, so it immediately aborts the program.
	} else if ( param_1.length == param_2.length ) {
		for ( i = 0; i < param_1.length; i++ ) {
			if ( param_1.charAt(i) != param_2.charAt(i) ) {
				j += 1;
			}
		}
		//console.log('j:', j);
		//console.log(`Input: "${param_1}" && "${param_2}"\nOutput: \nReturn Value: ${j}`);
		return j;
	}
}
//).call();
