$(function() {
    var buttonForm = $('#buttonForm');

    buttonForm.on('click', function(e) {
        var name = $('#name').val(),
            pass = $('#pass').val();

        $.ajax({
            url: 'register.php',
            method: "POST",
            data: { name: name, pass: pass }
        });

        return false;
    });

    $("form").on('keydown', 'input', function() {
        var name = $('#name').val(),
            pass = $('#pass').val();

        $.ajax({
            url: 'register.php',
            method: "POST",
            data: { name: name, pass: pass }
        });
    })
});