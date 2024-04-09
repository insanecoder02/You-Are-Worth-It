const fs = require('fs');
const { MongoClient, GridFSBucket } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Autiembrace';

const client = new MongoClient(url);
async function downloadVideo() {
  try {
    if (!client.isConnected()) {
      await client.connect();
    }
    
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);

    const downloadStream = fs.createWriteStream('downloadedVideo.mp4');

    try {
      const videoStream = bucket.openDownloadStreamByName('video.mp4');

      videoStream.pipe(downloadStream).on('error', (error) => {
        console.error('Error downloading video:', error);
      }).on('finish', () => {
        console.log('Video downloaded successfully');
      });
    } catch (error) {
      console.error('Error opening download stream:', error);
    }

  } catch (error) {
    console.error('Error during download:', error);
  } finally {
    if (client.isConnected()) {
      await client.close();
    }
  }
}

downloadVideo();
