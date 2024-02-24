let extraParent = "#js-extras";
let extraCopy = "copy-extras";
let extraTotal = "#js-total";

let rateTransfers = $(".js-rate-transfers").length;
let activeId = rateTransfers === 1 ? $(".js-rate-transfers").first().attr('id') : null;

let flashMessageId = "#flash-message"

let extraTitleClass = ".c-extra__title";
let extraPriceClass = ".c-extra__subtitle";
let extraQuantityClass = ".c-extra__quantity-rate";

if (activeId) {
    $("input[name=rate_transfers]").val(activeId.split('-')[activeId.split('-').length - 2]);
}

$(document).on('click', '.js-controls-less-rate', function () {
    if (activeId) {
        let valid = updatePax(-1, this);
        if (valid) {
            updateExtra(false, this);
        }
    } else {
        $(flashMessageId).fadeIn();
        $(flashMessageId).find('.alert-danger').text('Selecciona un Taxi!');
        $(flashMessageId).find('.alert-danger').show();

        setTimeout(() => {
            // Code to be executed after the delay
            $("#flash-message").fadeOut();
        }, 4000);
    }
});

$(document).on('click', '.js-controls-more-rate', function () {
    if (activeId) {
        let valid = updatePax(1, this);
        if (valid) {
            updateExtra(true, this);
        }
    } else {
        $(flashMessageId).fadeIn();
        $(flashMessageId).find('.alert-danger').text('Selecciona un Taxi!');
        $(flashMessageId).find('.alert-danger').show();

        setTimeout(() => {
            // Code to be executed after the delay
            $("#flash-message").fadeOut();
        }, 4000);
    }
});

$(document).on('change', '.c-extra__quantity-rate', function() {
    if (activeId) {
        updateExtra(this.value === "1", this, this.value === "1" ? "Si" : false)
    } else {
        $(flashMessageId).fadeIn();
        $(flashMessageId).find('.alert-danger').text('Selecciona un Taxi!');
        $(flashMessageId).find('.alert-danger').show();

        setTimeout(() => {
            // Code to be executed after the delay
            $("#flash-message").fadeOut();
        }, 4000);
    }
});

function updatePax(increment, target) {
    var actualValue = $(target).parents('.js-controls').find('input').val();
    var setValue = parseInt(actualValue) + increment;
    var min = $(target).parents('.js-controls').find('input').attr('min');
    var max = $(target).parents('.js-controls').find('input').attr('max');
    if ((setValue >= parseInt(min) || !min) && (setValue <= parseInt(max) || !max)) {
        $(target).parents('.js-controls').find('input').val(setValue);
        return true;
    }
    return false;
}

function updateExtra(isSum, element, value = null) {
    let extra = element.closest('.c-extra');
    let extraC = document.getElementById(extraCopy+'-'+activeId).cloneNode(true);
    let quantity = getQuantityExtra(extra);
    let extraId = extra.getAttribute('id');
    let extraIdElement = $('[remove-id="'+extraId+'"]');

    // If not exist (need to create) and is not a sum (means delete nothing) do nothing
    if (!extraIdElement.length && !isSum) {
        return;
    }

    setTotalPrice(isSum, extra);

    // If exist and less than 0 remove element
    if (extraIdElement.length && parseInt(quantity) <= 0) {
        removeElementCopy(extraId);
        return;
    }

    // If exist add or remove number
    if (extraIdElement.length) {
        if (value) {
            extraIdElement.find('.js-quantity')[0].innerHTML = value;
        } else {
            extraIdElement.find('.js-quantity')[0].innerHTML = "x"+quantity;
        }
        return;
    }


    // Else add element
    $(extraC).find('.js-title')[0].innerHTML = getTitleExtra(extra);
    $(extraC).find('.js-quantity')[0].innerHTML = "x"+quantity;
    $(extraC).find('.js-price')[0].innerHTML = getPriceExtra(extra);
    extraC.setAttribute('remove-id', extra.getAttribute('id'));
    extraC.setAttribute('id', extra.getAttribute('id'));
    extraC.classList.remove('hidden');
    extraC.classList.add('flex');

    addElementCopy(extraC);
}

function getPriceExtra(element) {
    if ($(element).find(extraPriceClass)[0]) {
        return $(element).find(extraPriceClass)[0].innerHTML;
    }
    return "";
}
function getQuantityExtra(element) {
    if ($(element).find(extraQuantityClass).first()) {
        return $(element).find(extraQuantityClass).first().val();
    }
    return "";
}
function getTitleExtra(element) {
    if ($(element).find(extraTitleClass)[0]) {
        return $(element).find(extraTitleClass)[0].innerHTML;
    }
    return "";
}

function removeElementCopy(elementId) {
    //console.log(elementId);
    $('[remove-id="'+elementId+'"]').remove();
}

function addElementCopy(element) {
    //console.log(element);
    $(extraParent+'-'+activeId).append(element);
}

function setTotalPrice(isSum, element) {
    let elementPrice = $(element).find(extraPriceClass)[0];
    if (elementPrice) {
        let text = $(extraTotal+'-'+activeId)[0].innerHTML;
        let value = parseFloat(elementPrice.getAttribute('data-value') ?? 0);
        let initialValue = parseFloat(text.replace('€', '').replace(',', '.'));

        if (isSum) {
            let totalPrice = initialValue + value;
            $(extraTotal+'-'+activeId)[0].innerHTML = totalPrice.toFixed(2)+"€"
        } else {
            let totalPrice = initialValue - value;
            $(extraTotal+'-'+activeId)[0].innerHTML = totalPrice.toFixed(2)+"€"
        }
    }
}


// TYPE VEHICLE
function selectTaxi(elementId) {
    $(".js-rate-transfers").each(function (index, element) {
        setDisabled(element.getAttribute('id'));

        $("#submit-"+element.getAttribute('id')).hide();
        $("#button-"+element.getAttribute('id')).show();

        let title = $("[extra-title]").first();

        title.html($(title).attr('extra-title'))
    });
    setActive(elementId);
}

function setActive(elementID) {
    $("#extras-"+elementID).removeClass('hidden');
    $("input[name=rate_transfers]").val(elementID.split('-')[elementID.split('-').length - 2]);
    $("input[name=type_vehicle]").val(elementID.split('-')[elementID.split('-').length - 1]);
    $("#"+elementID).css('border', 'rgb(254 198 1 / var(--tw-bg-opacity)) 1.5px solid');
    activeId = elementID;
    $("#submit-"+elementID).show();
    $("#button-"+elementID).hide();

    $(".js-rate-transfers").each(function (index, element) {
        $(extraParent+'-'+element.getAttribute('id')).empty();
        $(extraTotal+'-'+element.getAttribute('id'))[0].innerHTML = parseFloat($(extraTotal+'-'+element.getAttribute('id')).attr('default')).toFixed(2)+"€";
    });

    $(".c-extra__quantity-rate").each(function (index, element) {
        $(element).val(0);
    });

}

function setDisabled(elementID) {
    $("#"+elementID).css('border', 'none');
    $("#extras-"+elementID).addClass('hidden');
}

