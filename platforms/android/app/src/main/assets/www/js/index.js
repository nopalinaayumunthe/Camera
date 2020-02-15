var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("cameraTakePicture").addEventListener("click", this.cameraTakePicture);
    },
    cameraTakePicture :function cameraTakePicture() { 
        navigator.camera.getPicture(onSuccess, onFail, {  
           quality: 100, 
           destinationType: Camera.DestinationType.DATA_URL,
                        targetWidth: 200,
                        targetHeight: 200
        });  
        
        function onSuccess(imageData) { 
           var image = document.getElementById('myImage'); 
           image.src = "data:image/jpeg;base64," + imageData; 
        }  
        
        function onFail(message) { 
           alert('Failed because: ' + message); 
        } 
     }
};

app.initialize();