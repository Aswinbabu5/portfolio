export const getGSAP = () => {
    if (typeof window !== 'undefined' && window.gsap) {
        if (window.ScrollTrigger) {
            window.gsap.registerPlugin(window.ScrollTrigger);
        }
        return window.gsap;
    }
    return null;
};

export const getScrollTrigger = () => {
    if (typeof window !== 'undefined' && window.ScrollTrigger) {
        return window.ScrollTrigger;
    }
    return null;
};

export const runWhenGSAPReady = (callback) => {
    if (typeof window === 'undefined') return;

    if (window.gsap) {
        callback(window.gsap, window.ScrollTrigger);
    } else {
        const interval = setInterval(() => {
            if (window.gsap) {
                clearInterval(interval);
                if (window.ScrollTrigger) {
                    window.gsap.registerPlugin(window.ScrollTrigger);
                }
                callback(window.gsap, window.ScrollTrigger);
            }
        }, 50);

        setTimeout(() => clearInterval(interval), 3000);
    }
};
