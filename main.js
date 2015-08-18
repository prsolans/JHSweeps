$(document).ready( function() {
    contentTabs.init();
});

$(window).on('resize', function() {
   controlModal.centerWindow();
});

var contentTabs =  {
    init: function() {
        contentTabs.setActiveTab();
    },
    setActiveTab: function() {
        $('.tabs ul li').on('click', function() {
            $('.tabs ul li').removeClass('active');
            $(this).addClass('active');
            var activeContent = $(this).data('content');
            contentTabs.showActiveContent(activeContent);
        });
    },
    showActiveContent: function(activeContent) {
        $('.tab-content').removeClass('active');
        $('#'+activeContent).addClass('active');
    }
}

var locateContractor = {
    routeTraffic: function() {
        var zipCode = $('#zipCode').val();
        location.href = 'http://contractors.jameshardie.com/'+zipCode+'?utm_source=JHSweepsWeb&utm_medium=form&utm_content=Tab3_Col2&utm_campaign=RR2015';
    }
}

var requestQuote = {
    routeTraffic: function() {
        location.href = 'http://www.jameshardieoffer.com/?utm_source=JHSweepsWeb&utm_medium=button&utm_content=Tab4_Col1&utm_campaign=RR2015';
    }
}

var controlModal = {
    displayWindow: function() {
        $("#rulesModal").show();
        $('.dim').css({'z-index': 1, 'opacity': '.5'});
        controlModal.centerWindow();

        $('.dim').on('click', function() {
            controlModal.closeWindow();
        });
    },
    centerWindow: function() {
        var marginTop = ($(window).height()-600)/2;
        var marginLeft = ($(window).width()-900)/2;
        $("#rulesModal").css({'left':marginLeft, 'top':marginTop});
    },
    closeWindow: function() {
        $("#rulesModal").hide();
        $('.dim').css({'z-index': -1, 'opacity': '0'});
    }
}


function isValidEmailAddress(emailAddress) {

    /* var emailAddress2 = $.trim(emailAddress); */

    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};


$(function submit_entry() {
    $('.error').hide();
    $(".submit_button").click(function() {
        // validate and process form here
        $('.error').hide();
        var firstname = $("input#firstname").val();
        if (firstname == "") {
            $("#firstname_error").show();
            $("#firstname_error").addClass('tooltip');
            $("input#firstname").focus();
            return false;
        }
        var lastname = $("input#lastname").val();
        if (lastname == "" || lastname  == null) {
            $("#lastname_error").show();
            $("#lastname").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "" || email  == null) {
            $("#email_error").show();
            $("input#email").focus();
            return false;
        }
        else if( !isValidEmailAddress( $.trim(email) ) ) { $("#email_error2").show();
            $("input#email").focus();
            return false;
        }
        var tel = $("input#tel").val();
        if (tel == "" || tel  == null) {
            $("#tel_error").show();
            $("input#tel").focus();
            return false;
        }
        var street = $("input#street").val();
        if (street == "" || street == null) {
            $("#street_error").show();
            $("input#street").focus();
            return false;
        }
        var city = $("input#city").val();
        if (city == "" || city == null) {
            $("#city_error").show();
            $("input#city").focus();
            return false;
        }
        var state = $("select[name='State']").val();
        if (state == "" || state == null) {
            $('#state_error').show();
            $('#state').focus();
            return false;
        }
        var zip = $(".zip").val();
        if (zip == "" || zip == null) {
            $("#zip_error").show();
            $(".zip").focus();
            return false;
        }
        var repair = $('input[name="exterior_prroject_timing"]:checked').val()
        if (repair == "" || repair == null) {
            $('input#yes').focus();
            $('#repair_error').show();
            return false;
        }

        if (! $("#att").is(':checked')) {
            $("#att_error").show();
            $("#att").focus();
            return false;
        }
    });
});
$(function submit_entry2() {
    $('.error').hide();
    $(".submit_button2").click(function () {
        // validate and process form here
        $('.error').hide();
        var firstname = $("input#firstname").val();
        if (firstname == "") {
            $("#firstname_error").show();
            $("input#firstname").focus();
            return false;
        }
        var lastname = $("input#lastname").val();
        if (lastname == "" || lastname == null) {
            $("#lastname_error").show();
            $("#lastname").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "" || email == null) {
            $("#email_error").show();
            $("input#email").focus();
            return false;
        }
        else if (!isValidEmailAddress($.trim(email))) {
            $("#email_error2").show();
            $("input#email").focus();
            return false;
        }
        var tel = $("input#tel").val();
        if (tel == "" || tel == null) {
            $("#tel_error").show();
            $("input#tel").focus();
            return false;
        }
        var street = $("input#street").val();
        if (street == "" || street == null) {
            $("#street_error").show();
            $("input#street").focus();
            return false;
        }
        var city = $("input#city").val();
        if (city == "" || city == null) {
            $("#city_error").show();
            $("input#city").focus();
            return false;
        }
        var state = $("select[name='State']").val();
        if (state == "" || state == null) {
            $('#state_error').show();
            $('#state').focus();
            return false;
        }
        var zip = $(".zip2").val();
        if (zip == "" || zip == null) {
            $("#zip_error").show();
            $(".zip2").focus();
            return false;
        }
        var repair = $('input[name="repair"]:checked').val()
        if (repair == "" || repair == null) {
            $('input#yes').focus();
            $('#repair_error').show();
            return false;
        }
        var atc = $('input[name="atc"]:checked').val()
        if (atc == "" || atc == null) {
            $('input#yes2').focus();
            $('#atc_error').show();
            return false;
        }
    });
});

function send_data2() {
    var url = "process.php"; // the script where you handle the form input.
    var testing = false;
    $.ajax({
        type: "POST",
        url: url,
        data: $("#mktForm_1099").serialize(), // serializes the form's elements.
        async: false,
        success: function(data) {
            if (data == 'true') {
                testing = true;
                $('#mktForm_1099').attr('action');
                $('#mktForm_1099').submit();
            }
            else {
                alert('Something went wrong...' + ": " + err);
            }
        }

    });
    return testing;
};