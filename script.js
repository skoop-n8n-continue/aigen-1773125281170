document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World App Initialized');
    
    // Optional: Add some dynamic interaction or info
    // For digital signage, showing the time is a common "filler" feature
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        
        const clockElement = document.getElementById('clock');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    };

    setInterval(updateTime, 1000);
    updateTime();

    // Subtle movement on mouse move (if someone did use a mouse, though signage is usually non-interactive)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const circles = document.querySelectorAll('.circle');
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 20;
            circle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
