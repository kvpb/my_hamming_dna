function my_hamming_dna(param_1, param_2) {
	var s_1 = param_1;// console.log('s_1:', param_1);
	var s_2 = param_2;// console.log('s_2:', param_2);
	//var m = 0;
	var i = 0; //var i = m;
	var n_1 = param_1.length;
	var n_2 = param_2.length;
	var n = param_1.length;
	var j = 0;

	if ( n_1 != n_2 ) {
		//console.log('n_1:', param_1.length, '\nn_2:', param_2.length);
		return -1;
	} else if ( n_1 == n_2 ) {
		for ( i = 0; i < n; i++ ) {
			if ( s_1.charAt(i) != s_2.charAt(i) ) {
				j += 1;
			}
		}
		//console.log('j:', j);
		return j;
	}
}
