$(document).ready(function ($) {

    $(".phone").mask("+7(999) 999-9999");
    $(".email").inputmask("email");

    $('.submit-button').click(function() {

        let send = true;
        let id = $(this).attr('rel');
        let empty_field = '';
        $('.field').each(function () {

            if ($(this).val()==='' || $(this).val()===' ') {
                empty_field = $(this).attr('placeholder');
                send  = false;
                return false;
            }
        });
        // if (($('#message'+id).val()==='' || $('#message'+id).val()===' ') && send===true) {
        //     empty_field = 'Сообщение';
        //     send = false;
        // }


        if (send) {
            $('.error-message').hide();

            $.ajax({
                url: "/send_form/" + id,
                dataType: "json",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                type: "Post",
                data: $('#sendform'+id).serialize(),
                success: function (data) {
                    if(data.success) {
                        document.location = '/thank';
                    }
                    $('.form-area' + id).html('<h2>'+data.result+'</h2>');
                },
                error: function (data) {
                    $('.form-area' + id).html('<h2>Сообщение не отправлено</h2>');
                },
                complete: function (data) {
                }
            });
        }
        else {
            $('.error-message').show();
            $('.error-message').text('Заполните поле '+empty_field);
            console.log('Заполните поле ', empty_field, id);
            $('#'+empty_field+id).toggleClass('empty-field');
        }
        console.log('send data form ', $(this).attr('rel'));
        return false;
    });

    $('.field').blur(function () {
        if ($(this).val !== '' && $(this).val !== ' ') {
            $(this).removeClass('empty-field');
        }
    });

}(jQuery));
