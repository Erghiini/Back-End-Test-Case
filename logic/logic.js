
	function reverse(string = "") {
		if (string == "") return 'String tidak boleh kosong.';

		stringLen = string.length - 1;
		res 	  = "";

		for (i = 0; i <= stringLen; i++) {
			if (i < stringLen) {
				res = string[i] + res;
			} else {
				res = res + string[i];
			}
		}

		return res;
	}

	function longest(string = "") {
		if (string == "") return 'String tidak boleh kosong.';

		eString 	= string.split(' ');
		longestWord = "";
		longestLen  = 0;

		eString.forEach ((value, key) => {
			if (value.length > longestLen) {
				longestLen  = value.length;
				longestWord = value;
			}
		});

		return longestWord + ': ' + longestLen + ' character';
	}

	function isWordExist(input = [], query = []) {
		res = [];
		for (var i = 0; i < query.length; i++) {
			sum = 0;
			for (j = 0; j < input.length; j++) {
				if (input[j] == query[i]) {
					sum++;
				}
			}
			res.push(sum);
		}

		return res;
	}

	function minMatrix(matrix = []) {
		var matrixLen 	 = matrix.length;
		var isMatrixSame = true;

		if (matrixLen <= 0) return 'Matrix tidak boleh kosong.';

		for (var i = 0; i < matrixLen; i++) {
			if (matrix[0].length != matrix[i].length) {
				isMatrixSame = false;
			}
		}

		if (!isMatrixSame) return 'Ukuran matrix harus sama';	

		var res1 = 0;
		for (var i = 0; i < matrixLen; i++) {
			res1 = res1 + matrix[i][i];
		}

		var res2 = 0;
		var i 	 = 0;
		for (var j = (matrixLen - 1); j >= 0; j--) {
			res2 = res2 + matrix[i][j];
			i++;
		}

		return res1 - res2;
	}