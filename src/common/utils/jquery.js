// Содержит набор примитивных расширений для jQuery.
!(function($) {

  if ($ == null) {
    throw new Error('jQuery is required.');
  }

  /**
   * Показывает, имеет ли элемент класс "active".
   * @return {Boolean} True или false.
   */
  $.fn.isActive = function() {
    return this.hasClass('active');
  };

  /**
   * Добавляет / удаляет класс "active" у элемента.
   * @param {Boolean} state Если true - класс будет добавлен, иначе удален. По умолчанию равняется true.
   */
  $.fn.active = function(state) {
    
    if (state == null) {
      state = true;
    } 
    
    if (state) {
      this.addClass('active');
    }
    else {
      this.removeClass('active');
    }

    return this;
  };

  /**
   * Псевдоним для toggleClass('active', state).
   */
  $.fn.toggleActive = function(state) {

    if (state == null) {
      state = !this.isActive();
    }

    return this.active(state);
  };

  /**
   * Показывает, имеет ли элемент атрибут name.
   * @param {String} name Имя атрибута.
   * @return {Boolean} True или false.
   */
  $.fn.hasAttr = function(name) {
    return this.attr(name) != null;
  };

  /**
   * Переключает состояние атрибута аналогично методу toggleClass.
   * @param {String} name  Имя атрибута.
   * @param {Boolean} state Состояние атрибута.
   */
  $.fn.toggleAttr = function(name, state) {

    if (state == null) {
      state = !this.hasAttr(name);
    }

    if (state) {
      this.attr(name, '');
    }
    else {
      this.removeAttr(name);
    }

    return this;
  };

  /**
   * Показывает, имеет ли элемент атрибут "disabled".
   * @return {Boolean} True или false.
   */
  $.fn.isDisabled = function() {
    return this.hasAttr('disabled');
  };

  /**
   * Добавляет / удаляет атрибут "disabled" у элемента.
   * @param {Boolean} state Если true - атрибут будет добавлен, иначе удален. По умолчанию равняется true.
   */
  $.fn.disabled = function(state) {

    if (state == null) {
      state = true;
    }

    if (state) {
      this.addClass('disabled');
      this.attr('disabled', '');
    }
    else {
      this.removeClass('disabled');
      this.removeAttr('disabled');
    }

    return this;
  };

  /**
   * Псевдоним для toggleClass('disabled', state).
   * Также аналогичным образом переключает состояние атрибута "disabled".
   */
  $.fn.toggleDisabled = function(state) {

    if (state == null) {
      state = !this.isDisabled();
    }

    return this.disabled(state);
  };

})(jQuery);
