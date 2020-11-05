function zoom(zoomType){
    var imageWidth = document.getElementById("img").clientWidth;//Ici la variable requpere la taille de l'image//
    if (zoomType == 'plus'){
     document.getElementById("img").style.width=(imageWidth + 20) +"px";   
    }
    if (zoomType == 'moins'){
     document.getElementById("img").style.width=(imageWidth - 20) +"px";      
    }
    
    
}
