
const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'Happy Birthday Uni!',
            image: "img/uni.jpg",
            imageFluid: "image-fluid",
            altImage: "Uni birthday photo",
            classImage: "rounded-circle img-fluid pointer-event cursor-pointer",
            meowImage: "img/meow.webp",
            meowAlt: "meow fumetto",
            meowClass: "meow d-none",

        }
    },
    methods: {
        clicked() {
            this.meowClass = "meow";
            const meowSong = new Audio("sounds/meowSong.mp3");
            const confetti = new JSConfetti()
            confetti.addConfetti({
                emojis: ["😽", " 🎉"],
                confettiNumber: 80,
                emojiSize: 50
            })
            meowSong.play();
        }
    }
}).mount('.content')