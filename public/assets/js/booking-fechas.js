//Documentation http://lopezb.com/hoteldatepicker/

var input = document.getElementById('fechas-booking');
var datepicker = new HotelDatepicker(input, {
    format: 'DD/MM/YYYY',
    startOfWeek: 'monday',
    topbarPosition: 'bottom',
    moveBothMonths: true,
    i18n: {
        selected: 'Su estancia:',
        night: 'Noche',
        nights: 'Noches',
        button: 'Cerrar',
        'checkin-disabled': 'Check-in deshabilitado',
        'checkout-disabled': 'Check-out deshabilitado',
        'day-names-short': ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        'day-names': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        'month-names-short': ['En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        'month-names': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        'error-more': 'El intervalo de fechas no debe ser superior a 1 noche',
        'error-more-plural': 'El rango de fechas no debe tener más de %d noches',
        'error-less': 'El intervalo de fechas no debe ser inferior a 1 noche',
        'error-less-plural': 'El intervalo de fechas no debe ser inferior a %d noches',
        'info-more': 'Selecciona un intervalo de fechas superior a 1 noche',
        'info-more-plural': 'Selecciona un intervalo de fechas superior a %d noches',
        'info-range': 'Por favor, selecciona un rango de fechas entre %d y %d noches',
        'info-default': 'Selecciona un intervalo de fechas'
    },
    onSelectRange: function() {
        let rangeDates = this.getValue()
        rangeDates = rangeDates.split(" - ")
        const datePicker = this.getDatePicker()
        $(datePicker).parents('.c-booking').find('.js-datein').val(rangeDates[0])
        $(datePicker).parents('.c-booking').find('.js-dateout').val(rangeDates[1])
        const datein = rangeDates[0].split("-")
        const dateOut = rangeDates[1].split("-")
        const dateinFormat = new Date(datein[2], datein[1]-1, datein[0]);
        const dateOutFormat = new Date(dateOut[2], dateOut[1]-1, dateOut[0]);
        const monthDateIn = dateinFormat.toLocaleString('es', { month: 'short' });
        const monthDateOut = dateOutFormat.toLocaleString('es', { month: 'short' });
        $(datePicker).parents('.c-booking').find('.js-fecha-llegada').find('input').val(rangeDates[0])
        $(datePicker).parents('.c-booking').find('.js-fecha-salida').find('input').val(rangeDates[1])
    }
});
