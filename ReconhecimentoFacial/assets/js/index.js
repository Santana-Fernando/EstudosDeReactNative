const cam = document.getElementById('cam')


const carregarVideo = () =>{

    navigator.mediaDevices.enumerateDevices()
    .then(cameras =>{
        if(Array.isArray(cameras)){
            cameras.forEach(imagens =>{
                if(imagens.kind === 'videoinput'){
                    if(imagens.label.includes("")){
                        navigator.getUserMedia(
                            { video: {
                                deviceId: imagens.deviceId
                            }},
                            stream => cam.srcObject = stream,
                            error => console.log(error)
                        )
                    }
                }
            })
        }
    })
}

console.log(faceapi.nets)

cors.Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/assets/lib/face-api/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/assets/lib/face-api/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/assets/lib/face-api/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/assets/lib/face-api/models'),
    faceapi.nets.ageGenderNet.loadFromUri('/assets/lib/face-api/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/assets/lib/face-api/models'),
]).then(carregarVideo)