/*
 * jQuery plugin: inputFocus
 * Clears input value on focus
 *
 * Copyright (c) 2010 Dariusz Pobożniak (http://pobozniak.pl)
 *
 */

(function($) {
    $.fn.inputFocus = function() {
        return this.each(function() {
            var $this = $(this);
            var value = $this.val();
            $this.focus(function() {
                if ($this.val() == value) {
                    $this.val('');
                }
            });
            $this.blur(function() {
                if ($.trim($this.val()) == '') {
                    $this.val(value);
                }
            })
        })
    }
})(jQuery);