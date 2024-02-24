import flatpickr from "flatpickr";

export default function () {
// Obtener el elemento de entrada
    const enabled = document.querySelector(".js-dates-availability");
    if(enabled) {
        // Obtener las fechas deshabilitadas del atributo data
        const enabledDates = enabled.dataset.datesAvailability.split(',');

        // Configuración de flatpickr
        let config = {
            inline: true,
            dateFormat: "d - m - Y",
            static: true,
            showMonths: getShowMonths(),
            defaultDate: new Date(),
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
        };

        if (enabledDates) {
            config = Object.assign(config, {
                enable: enabledDates,
            });
        }

        // Inicializar flatpickr con la configuración
        const flatpickrInstance = flatpickr(enabled, config);

        // Listener para el evento resize
        window.addEventListener('resize', handleResize);

        // Función para manejar el evento resize
        function handleResize() {
            // Actualizar el valor de showMonths en la configuración
            config.showMonths = getShowMonths();

            // Destruir la instancia actual de flatpickr
            flatpickrInstance.destroy();

            // Inicializar flatpickr con la configuración actualizada
            flatpickrInstance = flatpickr(enabled, config);
        }

        // Función para obtener el valor de showMonths
        function getShowMonths() {
            // Verificar si es un dispositivo móvil
            const isMobile = window.matchMedia("(max-width: 767px)").matches;

            // Devolver el valor correspondiente
            return isMobile ? 1 : 2;
        }
    }
}
