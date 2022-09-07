// Load the required clients and packages

const { CognitoIdentityClient } = require("@aws-sdk/client-cognito-identity");
const {
  fromCognitoIdentityPool,
} = require("@aws-sdk/credential-provider-cognito-identity");
const { S3Client, PutObjectCommand, ListObjectsCommand, DeleteObjectCommand, DeleteObjectsCommand } = require("@aws-sdk/client-s3");
import config from '@/config';

// Set the AWS Region
const REGION = config.aws.region; //REGION
const BUCKET = config.aws.bucket; //REGION
const IDENTITY_POOL_ID = config.aws.identityPoolId; //REGION

// Initialize the Amazon Cognito credentials provider
const s3 = new S3Client({
  region: REGION,
  credentials: fromCognitoIdentityPool({
    client: new CognitoIdentityClient({ region: REGION }),
    identityPoolId: IDENTITY_POOL_ID
  }),
});

const listAlbums = async () => {
  try {
    const data = await s3.send(
      new ListObjectsCommand({ Delimiter: "/", Bucket: BUCKET })
    );
    if (data.CommonPrefixes) {
      return data.CommonPrefixes.map((commonPrefix) => {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace("/", ""));
        return albumName;
      });
    } else {
      return [];
    }
  } catch (err) {
    return alert("There was an error listing your albums: " + err.message);
  }
};


const viewAlbum = async (albumKey) => {
  // const albumKey = encodeURIComponent(albumName) + '/image/original' + "/";
  try {
    const data = await s3.send(
      new ListObjectsCommand({
        Prefix: albumKey,
        Bucket: BUCKET,
      })
    );
    return data.Contents;
  } catch (err) {
    return alert("There was an error viewing your album: " + err.message);
  }
};

const removeFile = async (key) => {
  try {
    const params = { Key: key, Bucket: BUCKET };
    await s3.send(new DeleteObjectCommand(params));
    return true;
  } catch (err) {
    return false;
  }
};

export default { listAlbums, viewAlbum, removeFile };





/* 
// Add a photo to an album
const addPhoto = async (albumName) => {
  const files = document.getElementById("photoupload").files;
  try {
    const albumPhotosKey = encodeURIComponent(albumName) + "/";
    const data = await s3.send(
      new ListObjectsCommand({
        Prefix: albumPhotosKey,
        Bucket: BUCKET
      })
    );
    const file = files[0];
    const fileName = file.name;
    const photoKey = albumPhotosKey + fileName;
    const uploadParams = {
      Bucket: BUCKET,
      Key: photoKey,
      Body: file
    };
    try {
      const data = await s3.send(new PutObjectCommand(uploadParams));
      alert("Successfully uploaded photo.");
      viewAlbum(albumName);
    } catch (err) {
      return alert("There was an error uploading your photo: ", err.message);
    }
  } catch (err) {
    if (!files.length) {
      return alert("Choose a file to upload first.");
    }
  }
};
// Make addPhoto function available to the browser
window.addPhoto = addPhoto;


// Delete a photo from an album
const deletePhoto = async (albumName, photoKey) => {
  try {
    console.log(photoKey);
    const params = { Key: photoKey, Bucket: BUCKET };
    const data = await s3.send(new DeleteObjectCommand(params));
    console.log("Successfully deleted photo.");
    viewAlbum(albumName);
  } catch (err) {
    return alert("There was an error deleting your photo: ", err.message);
  }
};
// Make deletePhoto function available to the browser
window.deletePhoto = deletePhoto;
 */