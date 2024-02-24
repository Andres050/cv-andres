$(".c-tabs").on('click', function () {
    const MyURL = new URLSearchParams(window.location.search);

    let arial = $(this).attr('aria-controls');
    if (arial) {
        MyURL.set('tab', $(this).attr('aria-controls').replace('tabs-',''));
    } else {
        MyURL.delete('tab');
    }

    window.location.search = MyURL;
});
