let input = $("input");
let textarea = $("textarea");

input.on('input', function (event) {
    let name = this.getAttribute('name');

    if (this.getAttribute('prefix')) {
        return validateRuleAttribute(this, name, event);
    }

    let nameSplit = name.split('[');

    if (nameSplit.length == 1) {
        validateRuleAttribute(this, name, event);
        return;
    }

    nameSplit.forEach(function (name, index) {
        nameSplit[index] = name.replace(']', '');
    });

    validateRuleAttribute(this, nameSplit[nameSplit.length -1], event);
});

textarea.on('input', function (event) {
    let name = this.getAttribute('name');

    if (this.getAttribute('prefix')) {
        return validateRuleAttribute(this, name, event);
    }

    let nameSplit = name.split('[');

    if (nameSplit.length == 1) {
        validateRuleAttribute(this, name, event);
        return;
    }

    nameSplit.forEach(function (name, index) {
        nameSplit[index] = name.replace(']', '');
    });

    validateRuleAttribute(this, nameSplit[nameSplit.length -1], event);
});

input.on('change', function (event) {
    let name = this.getAttribute('name');
    validateRuleAttribute(this, name, event);
})

function isValidRuleAttributes() {
    let isValid = true;
    if (typeof rules === 'undefined') {
        return isValid;
    }
    Object.keys(rules).forEach(key => {
        let isNullable = false;

        if (key.split('.').length > 1) {
            key = key.split('.')[1];
        }

        let input = $("select[name = " + key + "], input[name = " + key + "]")[0];
        if (input) {
            if (rules[key].includes("nullable")) {
                if (nullable(input, input, key)) {
                    isNullable = true;
                    isValid = true;
                }
            }

            if (!isNullable) {
                rules[key].forEach(function(rule) {
                    let attributes = rule.split(':');
                    //console.log(rule);
                    //console.log(attributes);

                    if (attributes.length === 1) {
                        isValid = executeFunctionByName(rule, window, [input, input, key]);
                        if (!isValid) {
                            console.log(rule, input);
                        }
                    } else {
                        isValid = executeFunctionByName(attributes[0], window, [input, input, key, attributes]);

                        if (!isValid) {
                            console.log(rule, input);
                        }
                    }

                });
            }
        }
    });
    if (!isValid) {
        console.log("E");
    }
    return isValid;
}

function validateRuleAttribute(input, name, event) {
    name = name.replace('[', '.').replace(']', '');

    if (typeof rules === 'undefined') {
        return;
    }
    //console.log(name);
    //console.log(rules);
    if (rules[name]) {
        rules[name].forEach(function(rule) {
            let attributes;

            if (typeof rule === 'string') {
                attributes = rule.split(':');
            }
            //console.log(rule);
            //console.log(attributes);

            if (attributes && attributes.length === 1) {
                return executeFunctionByName(rule, window, [input, event, name]);
            }
            if (attributes) {
                return executeFunctionByName(attributes[0], window, [input, event, name, attributes]);
            }
        });
    }
}

function executeFunctionByName(functionName, context , args) {
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }

    func = func.replace('-', '_');
    //console.log(func);

    return context[func].apply(context, args);
}

/** VALIDATION RESULT FUNCTION */

function valid(input, name, bool)
{
    if (input.getAttribute('prefix')) {
        let parent = $(input).closest('.c-translatable')[0];
        parent ? parent.style.setProperty("border-color", bool ? "green" : "red", "important") : null;
        return bool;
    }

    if (input.classList.contains('select2')) {
        let labelSelect = $(input.parentNode).find('.select2-container .selection .select2-selection')[0];
        labelSelect.style.setProperty("border-color", bool ? "green" : "red", "important");
    }

    let parent = input.parentElement;
    parent ? parent.style.setProperty("border-color", bool ? "green" : "red", "important") : null;
    input.style.setProperty("border-color", bool ? "green" : "red", "important");

    return bool;
}

/** VALIDATION RULES FUNCTION */

function required(input, event, name)
{
    let val = input.value;
    return valid(input, name, val != null && val !== "");
}

async function unique(input, event, name, attributes)
{
    let val = input.value;

    await $.ajax({
        url : validationUrlController + '/' + attributes[0],
        type : 'POST',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data : {
            name : name,
            attributes: attributes,
            value: val
        },
        success : function(result){
            return valid(input, name, result === "false");
        }
    });
}

function min(input, event, name, attributes)
{
    let val = input.value;
    return valid(input, name,val.length >= parseInt(attributes[1]));
}

function max(input, event, name, attributes)
{
    let val = input.value;
    return valid(input, name,val.length <= parseInt(attributes[1]));
}

function required_with(input, event, name, attributes)
{
    let required = $("input[name=" + attributes[1] + "]")[0];
    //console.log(required);
    return valid(required, name,required.value !== "");
}

function same(input, event, name, attributes)
{
    let required = $("input[name=" + attributes[1] + "]")[0];
    //console.log(required.value);
    //console.log(attributes[1]);
    if (input.value || input.value !== "") {
        valid(input, name,required.value === input.value);
        return valid(required, name,required.value === input.value);
    }
    return valid(required, name, false);
}

function required_unless(input, event, name, attributes)
{
    let requiredUnless = $("input[name=" + attributes[1].split(',')[0] + "]")[0];

    if (requiredUnless.value !== "" || requiredUnless.value !== "null") {
        return required(input, name);
    }

    return valid(input, name, true);
}

function nullable(input, event, name, attributes)
{
    return true;
}

function integer(input, event, name, attributes)
{
    return valid(input, name, Number.isInteger(parseInt(input.value)));
}

function image(input, event, name, attributes)
{
    if (input == event) {
        if (input.files[0]) {
            return valid(input, name, input.files[0] && input.files[0]['type'].split('/')[0] === 'image');
        }
        console.log("File files not found simple");
        return valid(input, name, false);
    }
    if (event.target.files[0]) {
        return valid(input, name, event.target.files[0] && event.target.files[0]['type'].split('/')[0] === 'image');
    }
    console.log("File files not found multiple");
    return valid(input, name, false);
}

async function exists(input, event, name, attributes)
{
    let val = input.value;

    await $.ajax({
        url : validationUrlController + '/' + attributes[0],
        type : 'POST',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data : {
            name : name,
            attributes: attributes,
            value: val
        },
        success : function(result){
            return valid(input, name, result !== "false");
        }
    });
}

function float(input, event, name)
{
    return valid(input, name, Number(input.value) === input.value && input.value % 1 !== 0);
}

function different(input, event, name, attributes)
{
    let val = input.value;
    let required = $("input[name=" + attributes[1] + "]")[0].value;

    if (val.split('\\').length > 1) {
        val = val.split('\\')[val.split('\\').length -1];
    }
    if (required.split('\\').length > 1) {
        required = required.split('\\')[required.split('\\').length -1];
    }

    return valid(input, name, val !== required);
}

function numeric(input, event, name)
{
    return valid(input, name, parseInt(input.value));
}

function after_or_equal(input, event, name, attributes)
{
    let value2 = $(input)[0].value;

    //console.log(attributes);
    let value = $("input[name=" + attributes[1] + "]")[0].value;

    //console.log(input);
    //console.log(value);
    //console.log(value2);
    //console.log(value >= value2);

    return valid(input, name, value2 >= value);
}

function not_in(input, event, name, attributes)
{
    return valid(input, name, input.value !== -1);
}
