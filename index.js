var cloudinary = require('cloudinary');
var through = require('through2');


function uploadToCloudinary(config)
{
	cloudinary.config(config);
}

uploadToCloudinary.prototype.upload = function(options){
	return through.obj(function (file,enc,cb) {
		cloudinary.uploader.upload(file.path, function(result) {},
     			options);
		cb();
	});
}

module.exports = uploadToCloudinary;	



