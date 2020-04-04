import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;

  const listener = () => counter += 1;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    }
  }
}

window.analytics = createAnalytics();