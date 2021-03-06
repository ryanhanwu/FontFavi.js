var FontFavi = function(userOptions) {
		var faviconSize = this.faviconSize = 16,
			canvas = this.canvas = document.createElement('canvas'),
			ctx = this.ctx = canvas.getContext('2d'),
			opts = {
				fillColor: '#ea4317',
				roundCorner: true,
				roundCornerSize: 1,
				fontStyle: 'normal',
				fontVariant: 'normal',
				fontWeight: '100',
				fontSize: 1,
				fontFamily: 'Fantasy',
				fontColor: '#FFFFFF',
				textAlign: 'center',
				textBaseline: 'middle',
				textPosition: {
					x: faviconSize / 2,
					y: faviconSize / 2
				},
				text: 'FV'
			};
		canvas.width = faviconSize;
		canvas.height = faviconSize;
		for(var attr in userOptions) {
			opts[attr] = userOptions[attr];
		}
		ctx.fillStyle = opts.fillColor;
		ctx.fillRect(0, 0, faviconSize, faviconSize);

		if(opts.roundCorner) {
			var rgb = this.hexToRgb(opts.fillColor);
			ctx.fillStyle = 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 0.3)';
			ctx.clearRect(0, 0, opts.roundCornerSize, opts.roundCornerSize);
			ctx.clearRect(faviconSize - opts.roundCornerSize, 0, faviconSize, opts.roundCornerSize);
			ctx.clearRect(faviconSize - opts.roundCornerSize, faviconSize - opts.roundCornerSize, faviconSize, faviconSize);
			ctx.clearRect(0, faviconSize - opts.roundCornerSize, opts.roundCornerSize, faviconSize);
			ctx.fillRect(0, 0, opts.roundCornerSize, opts.roundCornerSize);
			ctx.fillRect(faviconSize - opts.roundCornerSize, 0, faviconSize, opts.roundCornerSize);
			ctx.fillRect(faviconSize - opts.roundCornerSize, faviconSize - opts.roundCornerSize, faviconSize, faviconSize);
			ctx.fillRect(0, faviconSize - opts.roundCornerSize, opts.roundCornerSize, faviconSize);
		}
		ctx.fillStyle = opts.fontColor;
		var font;
		for (var i = opts.fontSize; i < 30; i++) {
			font = [opts.fontStyle, opts.fontVariant, opts.fontWeight, i + 'px', opts.fontFamily].join(' ');
			var size = this.textSize(font, opts.text);
			if (size > 12) {
				ctx.font = font;
				break;
			}
		}
		ctx.textAlign = opts.textAlign;
		ctx.textBaseline = opts.textBaseline;
		ctx.fillText(opts.text, opts.textPosition.x, opts.textPosition.y);
	};
FontFavi.prototype.getCanvas = function(first_argument) {
	return this.canvas;
};
FontFavi.prototype.getDataUrl = function(first_argument) {
	return this.canvas.toDataURL('image/x-icon');
};
FontFavi.prototype.textSize = function(font, text) {
	var canvas = document.createElement('canvas'),
		tempCtx = canvas.getContext('2d');
		tempCtx.font = font;
	return tempCtx.measureText(text).width;
};
FontFavi.prototype.hexToRgb = function(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], this.faviconSize),
		g: parseInt(result[2], this.faviconSize),
		b: parseInt(result[3], this.faviconSize)
	} : null;
};
FontFavi.prototype.update = function() {
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = this.canvas.toDataURL('image/x-icon');
	document.getElementsByTagName('head')[0].appendChild(link);
};