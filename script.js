document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion functionality
    const accordions = document.querySelectorAll('.accordion-header');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            acc.classList.toggle('active');
            const content = acc.nextElementSibling;
            
            // Optional: Close other accordions
            document.querySelectorAll('.accordion-content').forEach(c => {
                if(c !== content) {
                    c.style.maxHeight = null;
                    c.style.paddingBottom = "0";
                    c.previousElementSibling.classList.remove('active');
                }
            });

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.paddingBottom = "0";
            } else {
                content.style.maxHeight = content.scrollHeight + 40 + "px";
                content.style.paddingBottom = "20px";
            }
        });
    });
});
