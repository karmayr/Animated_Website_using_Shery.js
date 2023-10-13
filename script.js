Shery.imageEffect("#back", {
    style: 5,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.98, range: [-1, 1] },
        aspect: { value: 2.049092749412997 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.26, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.41, range: [0, 10] },
        metaball: { value: 0.17, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.38, range: [0, 2] },
        noise_scale: { value: 10.74, range: [0, 100] },
    },
    gooey: true,
});


const headings = document.querySelectorAll('.headings');

headings.forEach((heading) => {
    const allH1 = heading.querySelectorAll('.headings h1');
    const main = document.querySelector("#main");
    let index = 0;
    main.addEventListener('click', () => {
        gsap.to(allH1[index], {
            top: '-=100%',
            ease: Expo.easeInOut,
            duration: 1,
            onComplete: function () {
                gsap.set(this._targets[0], {
                    top: '100%'
                })
            }
        })
        index === allH1.length - 1 ? index = 0 : index++;

        gsap.to(allH1[index], {
            top: '-=100%',
            ease: Expo.easeInOut,
            duration: 1
        })

    })
})
