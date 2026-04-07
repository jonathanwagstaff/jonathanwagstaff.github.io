// Modal functionality for SimpleChat image
document.addEventListener('DOMContentLoaded', function() {
    const simpleChatImg = document.querySelector('.SimpleChat');
    const modal = document.createElement('div');
    const modalImg = document.createElement('img');
    const closeBtn = document.createElement('span');

    // Create modal structure
    modal.className = 'modal';
    modalImg.className = 'modal-content';
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Open modal when image is clicked
    simpleChatImg.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal functions
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }

    // Close when clicking the close button
    closeBtn.addEventListener('click', closeModal);

    // Close when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close when pressing ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
