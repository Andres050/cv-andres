export default function () {

    document.addEventListener('click',function(event) {
        if (event.target && event.target.getAttribute('data-toggle-class')) {
            event.stopPropagation();
            event.preventDefault();
            const saveToggle = event.target.getAttribute('data-toggle-save');

            if (saveToggle) {
                $(event.target).remove();
                $('#data-toggle-save').removeClass('hidden');
            }

            const classToToggle = event.target.getAttribute('data-toggle-class');
            const container = event.target.getAttribute('data-toggle-class-container');
            const baseClassItem = event.target.getAttribute('data-toggle-class-item');
            const removeClassItem = event.target.getAttribute('data-remove-all-toggle');
            const baseQuery = '[data-toggle-class-item]:not([data-toggle-class-not-this])'
            const itemsQuery = container ? container + ' ' + baseQuery : baseQuery;
            const itemsToToggle = document.querySelectorAll(itemsQuery);
            document.querySelectorAll('[data-click-outside-target]').forEach(function (element) {
                const baseClasselement = element.getAttribute('data-toggle-class-item');
                if (baseClasselement !== baseClassItem) {
                    element.classList.remove('is-active');
                }
            })
            if(removeClassItem) {
                document.querySelectorAll('[data-toggle-class-item]').forEach(function (element) {
                        element.classList.remove(removeClassItem);
                })
            }
            itemsToToggle.forEach(item => {
                const classItem = item.getAttribute('data-toggle-class-item');
                if (classItem === baseClassItem) {
                    item.classList.toggle(classToToggle)
                }
            })
        }
    })

}
