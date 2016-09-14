# cloudinary-upload
A Package to upload your files to cloudinary
# Installation
<pre>
npm install cloudinary-upload
</pre>
In your gulp file add the following configurations
<pre>
uploadToCloudinary = require('cloudinary-upload');

var config = {
    cloud_name: 'test',
    api_key: '12345',
    api_secret: 'Abc-Xyz'
};

var cloudinaryOptions = { resource_type: "auto", use_filename:true,unique_filename :false}

var cldnry = new uploadToCloudinary(config);

gulp.task('upload',['revision'], function () {
    return gulp.src(['dist/build/*.js','dist/build/*.css'])
        .pipe(cldnry.upload(cloudinaryOptions))
});

</pre>
And you are done
