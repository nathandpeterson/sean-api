const AWS = require('aws-sdk')
const s3 = new AWS.S3()

class FetchSongs {
    static async test(req, res, next){
        console.log(req.body.key)
        await FetchSongs.getOne(req.body.key)
            .then(result => {
                return res.send(result)
            })
    }

    static async getOne(songName){
        let song = `test-songs/${songName}.mp3`
       console.log('fetching this song', song)
       await s3.getObject({Bucket: 'sean-songs', Key: song}, function(err, data) {
            if (err)
            console.log(err)
            else
            console.log(data.Body)
            return data.Body
        })
    }
    static download(id){

        s3.fileDownload({Bucket: 'sean-songs', Key: 'test-songs/Hands.mp3'}, function(err, data) {
            if (err)
            console.log(err)
            else
            console.log(data.Body)
            // res.send
        })
    }
}

module.exports = FetchSongs