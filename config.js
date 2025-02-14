// ============================================
// 💝 CUSTOMIZE YOUR ROMANTIC VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Kari-Ann Valencia Lauretta La Borde", // Keep this special 💖

    // The title that appears in the browser tab
    pageTitle: "You Hold My Heart Forever 💕",

    // Floating emojis in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💞', '💕'],  // Lots of love!
        kisses: ['💋', '😘']  // Cute kisses flying around
    },

    // Romantic questions and answers
    questions: {
        first: {
            text: "From the moment we met, my heart knew... Do you feel the same? 💕",
            yesBtn: "Every second of every day! 💖",
            noBtn: "I need more cuddles to decide! 😘",
            secretAnswer: "Silly! You already stole my heart! 💘"
        },
        second: {
            text: "If my love for you was a song, what would it sound like? 🎶",
            startText: "Like the sweetest melody in my heart 💕",
            nextBtn: "Next, my love ❤️"
        },
        third: {
            text: "Will you be my Valentine?✨",
            yesBtn: "Forever and always! 💕",
            noBtn: "Only if you promise endless hugs and kisses! 💋"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "My heart is exploding with love for you! 💖💥",
        high: "To the stars and beyond, my love! 🌟💝",
        normal: "Every heartbeat whispers your name! 💓"
    },

    // Messages after saying "Yes!"
    celebration: {
        title: "My Heart Is Yours, Always & Forever! 🎉💝",
        message: "Now, come claim your prize—endless kisses and the biggest cuddle ever! 🤗💋",
        emojis: "🎁💖🤗💝💋❤️💕✨",
        videoUrl: "https://www.youtube.com/shorts/CMEjfFE9MPY?feature=share" // Add your romantic video URL here
    },

    // Color scheme for a dreamy romantic theme
    colors: {
        backgroundStart: "#ffdde1",      // Soft pink gradient start
        backgroundEnd: "#ff80a1",        // Warm pink gradient end
        buttonBackground: "#ff4d6d",     // Lovely bright pink buttons
        buttonHover: "#ff758f",          // Lighter pink on hover
        textColor: "#d6336c"              // Deep romantic pink text
    },

    // Animation settings
    animations: {
        floatDuration: "12s",
        floatDistance: "60px",
        bounceSpeed: "0.4s",
        heartExplosionSize: 1.6
    },

    // Background Music for romantic vibes
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://youtu.be/4dnpcLnObw4", // Your love song 🎶
        startText: "🎵 Set the mood",
        stopText: "🔇 Pause our love song",
        volume: 0.6
    }
};

// Let the magic happen! 💘
window.VALENTINE_CONFIG = CONFIG;
