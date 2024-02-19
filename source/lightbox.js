/* global Fancybox */
const wrapper = document.querySelector('main');
Promise.all(wrapper.querySelectorAll('img'))
  .then(images => {
    images.forEach(el => {
      if (!el.hasAttribute('data-caption')) {
        let caption = '';
        caption += el.getAttribute('title') || '';
        if (caption.trim().length > 0) caption += ' - ';
        caption += el.getAttribute('alt') || '';
        el.setAttribute('data-caption', caption);
      }
      if (!el.hasAttribute('data-fancybox')) el.setAttribute('data-fancybox', 'true');
    });
  })
  .then(() => {
    Fancybox.bind(wrapper, '[data-fancybox=true]', {
      // Your custom options
    });
  });
