import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './solar.component.html'
})

export class SolarComponent implements OnInit {

    imgs: any = [];

    ngOnInit() {
        this.getImagenes();
    }

    getImagenes() {
        this.imgs = [
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/seguidores/seguidoresC1.jpg?raw=true", title: "img1", subtitle: "img1" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/seguidores/seguidoresC2.jpg?raw=true", title: "img2", subtitle: "img2" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/seguidores/seguidoresC3.jpg?raw=true", title: "img3", subtitle: "img3" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/seguidores/seguidoresC4.jpg?raw=true", title: "img4", subtitle: "img4" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/seguidores/seguidoresC5.jpg?raw=true", title: "img5", subtitle: "img5" }
        ]
    }

}