import flatpickr from "flatpickr";

function triggerDayDisabledMessage() {
    $(".flatpickr-day").on('click', async function (e) {
        let flashMessage = "#flash-message";

        if ($(this).hasClass('flatpickr-disabled')) {
            await flashMessageTrigger(flashMessage);
        }
    });
}

function flashMessageTrigger(flashMessage) {
    $(flashMessage).hide();

    $(flashMessage).fadeIn();
    $(flashMessage).find('.alert-danger').text('Fecha no disponible!');
    $(flashMessage).find('.alert-danger').show();

    setTimeout(() => {
        // Code to be executed after the delay
        $(flashMessage).fadeOut();
    }, 3000);
}

function triggerHourDisabledMessage(message) {
    let flashMessage = "#flash-message";
    if (message !== null) {
        $(flashMessage).hide();

        $(flashMessage).fadeIn();
        $(flashMessage).find('.alert-danger').text(message);
        $(flashMessage).find('.alert-danger').show();

        setTimeout(() => {
            // Code to be executed after the delay
            $(flashMessage).fadeOut();
        }, 3000);
    }
}

export default function (element) {
    document.querySelectorAll('.js-dates-enabled').forEach(e => {
        const enabledDates = e.dataset.datesAvailability.split(',');

        let options = {
            //defaultDate: new Date(),
            dateFormat: "d-m-Y",
            minDate: e.getAttribute('min') ?? new Date(),
            maxDate: e.getAttribute('max') ?? null,
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                    longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                },
                months: {
                    shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
                    longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                },
            },
            onMonthChange: function(selectedDates, dateStr, instance) {
                console.log(selectedDates, dateStr, instance);
                triggerDayDisabledMessage();
            },
            onYearChange: function(selectedDates, dateStr, instance) {
                console.log(selectedDates, dateStr, instance);
                triggerDayDisabledMessage();
            },
        };

        if (enabledDates) {
            options = Object.assign(options, {
                enable: enabledDates,
            });
        }

        console.log(options, 'calendar');

        flatpickr(e, options);
    });

    document.querySelectorAll('.js-dates-disabled').forEach(e => {
        const disabledDates = e.dataset.datesAvailability.split(',');

        let options = {
            //defaultDate: new Date(),
            dateFormat: "d-m-Y",
            minDate: e.getAttribute('min') ?? new Date(),
            maxDate: e.getAttribute('max') ?? null,
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
                    longhand: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
                },
                months: {
                    shorthand: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Оct', 'Nov', 'Dic'],
                    longhand: ['Enero', 'Febrero', 'Мarzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                },
            },
            onMonthChange: function(selectedDates, dateStr, instance) {
                console.log(selectedDates, dateStr, instance);
                triggerDayDisabledMessage();
            },
            onYearChange: function(selectedDates, dateStr, instance) {
                console.log(selectedDates, dateStr, instance);
                triggerDayDisabledMessage();
            },
        };

        if (disabledDates) {
            options = Object.assign(options, {
                disable: disabledDates
            });
        }

        console.log(options, 'calendar');

        flatpickr(e, options);
    });

    document.querySelectorAll('.js-time').forEach(e => {
        flatpickr(e, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            minTime: e.getAttribute('min') ?? "6:00",
            maxTime: e.getAttribute('max') ?? "23:00",
            time_24hr: true,
            onChange: function(selectedDates, dateStr, instance) {
                let message = null;

                if (selectedDates[0].toString() === instance.config._maxTime.toString()) {
                    message = "Tiempo maximo alcanzado!";
                }

                if (selectedDates[0].toString() === instance.config._minTime.toString()) {
                    message = "Tiempo minimo alcanzado!";
                }
                console.log(selectedDates[0].toString());
                console.log(instance.config._maxTime.toString(), selectedDates[0].toString() === instance.config._maxTime.toString());
                console.log(instance.config._minTime.toString(), selectedDates[0].toString() === instance.config._minTime.toString());
                console.log(message);
                triggerHourDisabledMessage(message);
            },
        });
    });
}
