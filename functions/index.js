const functions = require('firebase-functions');
const admin = require('firebase-admin');
const gcs = require('@google-cloud/storage')();
const vision = require('@google-cloud/vision')();

admin.initializeApp(functions.config().firebase);

exports.isHotdog = functions.storage.object().onChange(event => {
  console.log(event);
  const object = event.data;

  if (object.resourceState === 'not_exists') {
    return console.log('This is a deletion event.');
  } else if (!object.name) {
    return console.log('This is a deploy event.');
  }

  const bucket = gcs.bucket(object.bucket);
  const file = bucket.file(object.name);

  return vision.detectLabels(file).then(data => {
    console.log('Detect label');
    const labels = data[0];
    console.log(labels);
    if (labels.includes('hot dog')) {
      console.log('image is a HOTDOG!');
      return admin.database().ref('/uploads/photo').update({
        isHotdog: true
      });
    }else{
      console.log('image is not a HOTDOG!');
      return admin.database().ref('/uploads/photo').update({
        isHotdog: false
      });
    }

  });
});
