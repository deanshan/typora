class GrowlNotification {
  options = {
    margin: 20,
    type: 'alert',
    title: '',
    description: '',
    image: '',
    closeTimeout: false,
    animation: {
      show: 'slide-in',
      close: 'slide-out'
    },
    animationDuration: .3,
    position: 'top-right'
  };

  template: string =
  `<span class="growl-notification__close">
     <span class="iconfont iconfont-alert-close"></span>
   </span>
   {{ image }}
   <div class="growl-notification__content">
     <div class="growl-notification__title">{{ title }}</div>
     <div class="growl-notification__desc">{{ description }}</div>
   </div>`
  ;

  constructor(options = {}) {
    this.options = this.mergeOptions(this.options, options);
  }

  show() {
    let self = this;
    let options = this.options;
    let top: number = this.options.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + this.options.position));

    [...notifications].forEach((el) => {
      top += (Number(el.clientHeight)) + this.options.margin;
    });

    let body = document.querySelector('body');
    let newNotification = document.createElement('div');
    let template = this.template.replace('{{ title }}', options.title);
    template = template.replace('{{ image }}', options.image ? '<img src="'+options.image+'" alt="" class="growl-notification__image">' : '');
    template = template.replace('{{ description }}', options.description);
    newNotification.className = "growl-notification" + (options.type ? ' growl-notification--' + options.type : '');
    newNotification.className += (options.image ? ' growl-notification--image' : '');
    newNotification.className += ' animation-' + options.animation.show;

    this.addClass(newNotification, 'position-' + this.options.position);

    newNotification.innerHTML = template;

    let position = this.options.position.split('-'); //[0] - top,bottom, [1] - left,right

    newNotification.style[position[0]] = top + 'px';
    newNotification.style[position[1]] = this.options.margin + 'px';
    body.appendChild(newNotification);

    let closeBtn = newNotification.querySelector('.growl-notification__close');

    closeBtn.addEventListener('click', () => {
      self.close(newNotification);
    });

    if (options.closeTimeout && (options.closeTimeout > 0)) {
      setTimeout(() => {
        self.close(newNotification);
      }, options.closeTimeout);
    }
  }

  close(notification: any) {
    let self = this;
    this.removeClass(notification, 'animation-' + this.options.animation.show);
    this.addClass(notification, 'animation-' + this.options.animation.close);

    setTimeout(() => {
      self.remove(notification);
      self.recalculatePositions();
    }, this.options.animationDuration * 1000);
  }

  remove(notification: any) {
    notification.remove();
  }

  recalculatePositions() {
    let top: number = this.options.margin;
    let notifications = [].slice.call(document.querySelectorAll('.growl-notification.position-' + this.options.position));

    [...notifications].forEach((el) => {
      let position = this.options.position.split('-'); //[0] - top,bottom, [1] - left,right

      el.style[position[0]] = top + 'px';
      top += (Number(el.clientHeight)) + this.options.margin;
    });
  }

  mergeOptions(destination: any, source: any): any {
    for (let property in source) {
      destination[property] = source[property];
    }

    return destination;
  }

  addClass(element: any, className: string) {
    let classNames = element.className.split(' ');
    classNames.push(className);
    element.className = classNames.join(' ');
  }

  removeClass(element: any, className: string) {
    let classNames = element.className.split(' ');
    let index = classNames.indexOf(className);

    if (index > -1) {
      classNames.splice(index, 1);
    }

    element.className = classNames.join(' ');
  }
}
