describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];
	
	arr = flattenArrayOfArrays(arr,[]).sort();
	
	function flattenArrayOfArrays(a, r){
		if(!r){ r = []}
		for(var i=0; i<a.length; i++){
			if(a[i].constructor == Array){
				flattenArrayOfArrays(a[i], r);
			}else{
				r.push(a[i]);
			}
		}
		return r;
	}
	
    expect(arr).toEqual(expected);
  });
});
