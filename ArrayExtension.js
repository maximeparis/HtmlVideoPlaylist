Array.prototype.remove = function (callback) {
	var i = this.length;
	while (i--) {
		if (callback(this[i], i)) {
			this.splice(i, 1);
		}
	}
};

Array.prototype.exists = function (pred) {
	for (let item of this) {
		if (pred(item))
			return true;
	}

	return false;
};