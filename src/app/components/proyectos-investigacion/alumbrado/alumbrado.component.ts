import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './alumbrado.component.html'
})

export class AlumbradoComponent implements OnInit {

    imgs: any = [];

    ngOnInit() {
        this.getImagenes();
    }

    getImagenes() {
        this.imgs = [
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado1.1.jpg?raw=true", title: "img1", subtitle: "img1" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado2.jpg?raw=true", title: "img2", subtitle: "img2" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado2.2.jpg?raw=true", title: "img3", subtitle: "img3" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado3.jpg?raw=true", title: "img4", subtitle: "img4" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado3.3.jpg?raw=true", title: "img5", subtitle: "img5" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado4.4.jpg?raw=true", title: "img6", subtitle: "img6" },
            { src: "https://github.com/STIVEN24/innovatecWeb/blob/master/client/src/assets/media/imgs/alumbrado/alumbrado5.5.jpg?raw=true", title: "img7", subtitle: "img7" }
        ]
    }

}