import { Component } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
    selector: 'app-home-slider',
    templateUrl: 'slider.component.html',
    styleUrls: [
        './slider.component.scss',
    ]
})

export class HomeSliderComponent {
    public imageSources: string[] = [
        '../../../../assets/images/carousel/img1.jpeg',
        '../../../../assets/images/carousel/img2.jpg'
    ];

    public config: ICarouselConfig = {
        verifyBeforeLoad: true,
        log: false,
        animation: true,
        animationType: AnimationConfig.SLIDE,
        autoplay: true,
        autoplayDelay: 2000,
        stopAutoplayMinWidth: 768
    };
    constructor() { }

}
