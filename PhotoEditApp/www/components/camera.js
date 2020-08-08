$(document).on('click', '#camera', function() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
    function onSuccess(imageURI) {
        var image = document.getElementById('photo');
        image.src = imageURI;
    }
    function onFail(message) {
        alert('Câmera indisponível: ' + message);
    }
});


// Teste de funcionalidade para o range


var saturation = document.getElementById('saturation').value;
$(document).on('click', '#saturation', function() {
    document.getElementById('photo').filter = "saturate(" + saturation + ")";
});



