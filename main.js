
    const bookingModal = document.getElementById('bookingModal');
    const roomInput    = bookingModal.querySelector('#roomInput');
    const guestInput   = bookingModal.querySelector('#guestCount');

    bookingModal.addEventListener('show.bs.modal', e => {
      const btn = e.relatedTarget;
      const room = btn.dataset.room || '';
      const max  = parseInt(btn.dataset.maxGuests, 10) || 1;

      roomInput.value = room;
      guestInput.value = '';
      guestInput.max = max;
      guestInput.placeholder = `Up to ${max} guests`;
      guestInput.classList.remove('is-invalid');
    });

    bookingModal.querySelector('form').addEventListener('submit', e => {
      const max = parseInt(guestInput.max, 10);
      const val = parseInt(guestInput.value, 10);
      if (!val || val > max || val < 1) {
        guestInput.classList.add('is-invalid');
        e.preventDefault();
      }
    });

    