export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
    }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton =$('.js-finish');
        
        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultAction);
    }

    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }

    goToStep(step, direction = 'next') {
        let currentStep = +step.replace(/^step-/, '');
        let goToStep = '.step-';
        let nextStep;
        if (direction=== 'next') nextStep = currentStep + 1;
        else nextStep = currentStep - 1;
        goToStep += nextStep;
        this.progressBar(Math.round(nextStep*33.33));
        return goToStep;
    }

    changeAction(evt,direction='next'){
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $step = $(this.goToStep($formStep[0].classList[1], direction));
        $step.removeClass('d-none');
        this.preventDefaultAction();

    }

    previousAction(evt) {this.changeAction(evt,'prev');}

    nextAction(evt) {this.changeAction(evt);}

    preventDefaultAction(evt){
        evt.preventDefault();
    }

    progressBar(percent) {
        let $progressBar = $('.progress-bar');
        $progressBar
            .css('width',percent + '%')
            .html(percent + '%');
    }     
}