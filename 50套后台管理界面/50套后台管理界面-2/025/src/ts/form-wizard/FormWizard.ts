class FormWizard {
  elementId: string;
  options: any = {
    currentClass: 'is-current',
    invalidClass: 'is-invalid',
    completedClass: 'is-completed',
    disabledClass: 'disabled'
  };
  currentStep: number = 1;
  totalStepsCount: number = 1;
  prevControl: any;
  nextControl: any;

  constructor(elementId: string, options: any = {}) {
    var self = this;
    this.elementId = elementId;
    this.options = this.extendOptions(this.options, options);
    this.prevControl = this.find('[data-step-control-prev]');
    this.nextControl = this.find('[data-step-control-next]');
    this.totalStepsCount = this.findAll('[data-step]').length;
    this.prevControl.addEventListener('click', () => {
      self.prevStep();
    });
    this.nextControl.addEventListener('click', () => {
      self.nextStep();
    });
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.activateStep(this.currentStep, -1);
    }
  }

  nextStep() {
    if (this.currentStep < this.totalStepsCount) {
      this.activateStep(this.currentStep, +1);
    }
  }

  activateStep(stepNumber: number, increment: number) {
    this.currentStep = stepNumber + increment;

    if (this.currentStep === 1) {
      this.addClass(this.prevControl, this.options.disabledClass);
    } else {
      this.removeClass(this.prevControl, this.options.disabledClass);
    }

    let currentStepElement = this.find('[data-step="' + stepNumber + '"]');
    this.removeClass(currentStepElement, this.options.currentClass);

    if (increment >= 1) {
      this.addClass(currentStepElement, this.options.completedClass);
    } else {
      this.removeClass(currentStepElement, this.options.completedClass);
    }

    let currentStepContentElement = this.find('[data-step-content="' + stepNumber + '"]');
    this.removeClass(currentStepContentElement, this.options.currentClass);

    let stepElement = this.find('[data-step="' + this.currentStep + '"]');
    this.removeClass(stepElement, this.options.completedClass);
    this.addClass(stepElement, this.options.currentClass);
    let stepContentElement = this.find('[data-step-content="' + this.currentStep + '"]');
    this.addClass(stepContentElement, this.options.currentClass);
  }

  find (selector: string) {
    return document.querySelector(this.elementId + ' ' + selector);
  }

  findAll (selector: string) {
    return document.querySelectorAll(this.elementId + ' ' + selector);
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

  extendOptions(destination: any, source: any): any {
    for (let property in source) {
      destination[property] = source[property];
    }

    return destination;
  }
}
