function my_hamming_dna(param_1, param_2)
{
	var s_1 = param_1;
	var s_2 = param_2;
	var i = 0;
	var n_1 = param_1.length;
	var n_2 = param_2.length;
	var n = param_1.length;
	var j = 0;

	if ( n_1 != n_2 )
	{
		return -1;
	}
	else if ( n_1 == n_2 )
	{
		for ( i = 0; i < n; i++ )
		{
			if ( s_1.charAt( i ) != s_2.charAt( i ) )
			{
				j += 1;
			}
		}
		return j;
	}
}
