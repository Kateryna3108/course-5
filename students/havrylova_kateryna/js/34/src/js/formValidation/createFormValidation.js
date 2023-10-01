import JustValidate from 'just-validate';
import JustValidatePluginDate from 'just-validate-plugin-date';
import dict from './dict.js';


function createFormValidation(form, createCourseFn) {
    const validator = new JustValidate(form, undefined, dict);
    console.log(validator);

    validator.addField('[name="course-name"]', [
        {
            rule: 'required',
            errorMessage: 'Is required',

        },
        {
            rule: 'minLength',
            value: 2,
        },
        {
            rule: 'maxLength',
            value: 20,
        },
        {
            rule: 'customRegexp',
            value: /[a-z]/gi,
        },
    ]).addField('[name="duration"]', [
        {
            rule: 'required',
            errorMessage: 'Is required'

        },
        {
            rule: 'number',
        },
    ]).addField('[name="start-date"]', [
        {
            rule: 'required',
            errorMessage: 'Is required',
        },
        {
            plugin: JustValidatePluginDate(() => ({
                format: 'yyyy-MM-dd',
                // isBefore: '2023-09-12',
            })),
            errorMessage: 'Date should be in yyyy-MM-dd format',
        }
    ]).addField('[name="speakers"]', [
        {
            rule: 'required',
            errorMessage: 'Is required',
        }
    ]);

    validator.setCurrentLocale('uk');

    validator.onSuccess((event) => {
        if (typeof createCourseFn !== 'function') return;
        createCourseFn(new FormData(event.target))
    });
}


export default createFormValidation;
