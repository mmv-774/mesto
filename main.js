(()=>{"use strict";var e=".user-name-input",t=".user-profession-input",n=".card",o=".card-template",r="popup_opened",i={inputSelector:".form__input",submitButtonSelector:".form__handler",inactiveButtonClass:"form__handler_disabled",inputErrorClass:"form__input_type_error",activeErrorClass:"form__input-error_active",errorSelectorPostfix:"input-error"},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t.querySelector(e)},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.from(t.querySelectorAll(e))};function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const l=function(){function e(t,n,o){var r=t.name,i=t.link;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r,this._link=i,this._handleCardClick=o,this._templateSelector=n,this._element=this._getTemplate(),this._card=this._getCardComposition()}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return s(n,s(this._templateSelector).content).cloneNode(!0)}},{key:"_getCardComposition",value:function(){return{photo:s(".card__photo",this._element),title:s(".card__title",this._element),likeButton:s(".card__btn_action_like",this._element),deleteButton:s(".card__btn_action_delete",this._element)}}},{key:"_remove",value:function(e){e.target.closest(n).remove()}},{key:"_toggleLike",value:function(e){e.target.classList.toggle("card__btn_active_like")}},{key:"_setEventListeners",value:function(){var e=this;this._card.photo.addEventListener("click",(function(t){return e._handleCardClick(t.target.src,t.target.alt)})),this._card.likeButton.addEventListener("click",(function(t){return e._toggleLike(t)})),this._card.deleteButton.addEventListener("click",(function(t){return e._remove(t)}))}},{key:"create",value:function(){return this._setEventListeners(),this._card.photo.src=this._link,this._card.photo.alt=this._name,this._card.title.textContent=this._name,this._element}}])&&a(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._close=this._close.bind(this),this._closeByEsc=this._closeByEsc.bind(this),this._element=s(t),this._composition=this._getComposition(),this._setEventListeners()}var t,n;return t=e,(n=[{key:"_getComposition",value:function(){return{}}},{key:"_close",value:function(e){e.target.classList.contains(r)&&this.close(),e.target.classList.contains("popup__close")&&this.close()}},{key:"_closeByEsc",value:function(e){"Escape"===e.key&&this.close()}},{key:"_setEventListeners",value:function(){this._element.addEventListener("click",this._close)}},{key:"open",value:function(){this._element.classList.add(r),document.addEventListener("keydown",this._closeByEsc)}},{key:"close",value:function(){this._element.classList.remove(r),document.removeEventListener("keydown",this._closeByEsc)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=_(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&d(e,t)}(l,e);var t,n,o,r,a=(o=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(o);if(r){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function l(e,t,n){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(o=a.call(this,e))._handleFormSubmit=t,o._formValidator=n(i,o._composition.form),o._formValidator.enableValidation(),o}return t=l,n=[{key:"_getComposition",value:function(){return{form:s(".form",this._element)}}},{key:"_setEventListeners",value:function(){var e=this;this._composition.form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())})),h(v(l.prototype),"_setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){var e={};return c(".form__input",this._composition.form).forEach((function(t){e[t.name]=t.value})),e}},{key:"_setInputValues",value:function(e){var t=this;e&&Object.keys(e).forEach((function(n){s(n,t._composition.form).value=e[n]}))}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._setInputValues(e),this._formValidator.resetValidation(),h(v(l.prototype),"open",this).call(this)}},{key:"close",value:function(){this._composition.form.reset(),h(v(l.prototype),"close",this).call(this)}}],n&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(f);const g=b;function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=C(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},w.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}const S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&O(e,t)}(c,e);var t,n,o,r,i=(o=c,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(r){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"_getComposition",value:function(){return{image:s(".photo__img",this._element),caption:s(".photo__caption",this._element)}}},{key:"open",value:function(e,t){this._composition.image.src=e,this._composition.image.alt=t,this._composition.caption.textContent=t,w(P(c.prototype),"open",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(f);function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const B=function(){function e(t,n){var o=t.items,r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=o,this._renderer=r,this._container=s(n)}var t,n;return t=e,(n=[{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"render",value:function(){var e=this;this._clear(),this._items.forEach((function(t){return e._container.append(e._renderer(t))}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=s(t),this._professionElement=s(n)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,profession:this._professionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._nameElement.textContent=t,this._professionElement.textContent=n}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}const T=function(){function e(t,n){var o,r,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e,t){var n=s(".".concat(e.id,"-").concat(i._config.errorSelectorPostfix),i._formElement);e.classList.add(i._config.inputErrorClass),n.textContent=t,n.classList.add(i._config.activeErrorClass)},(o="_showInputError")in this?Object.defineProperty(this,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[o]=r,this._config=t,this._formElement=n,this._formElementComposition=this._getFormComposition()}var t,n;return t=e,(n=[{key:"_getFormComposition",value:function(){return{inputElements:c(this._config.inputSelector,this._formElement),submitButton:s(this._config.submitButtonSelector,this._formElement)}}},{key:"_hasInvalidInput",value:function(){return this._formElementComposition.inputElements.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._formElementComposition.submitButton.disabled=this._hasInvalidInput(),this._formElementComposition.submitButton.disabled?this._formElementComposition.submitButton.classList.add(this._config.inactiveButtonClass):this._formElementComposition.submitButton.classList.remove(this._config.inactiveButtonClass)}},{key:"_hideInputError",value:function(e){var t=s(".".concat(e.id,"-").concat(this._config.errorSelectorPostfix),this._formElement);e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.activeErrorClass),t.textContent=""}},{key:"_checkInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_refreshFormElementState",value:function(){var e=this;this._formElementComposition.inputElements.forEach((function(e){return e.dispatchEvent(new Event("input"))})),this._formElementComposition.inputElements.forEach((function(t){""===t.value&&e._hideInputError(t)}))}},{key:"_setFormElementState",value:function(){var e=this;this._toggleButtonState(),this._formElementComposition.inputElements.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){this._refreshFormElementState()}},{key:"enableValidation",value:function(){this._setFormElementState()}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=new g(".profile-popup",(function(n){var o={name:n[s(e).name],profession:n[s(t).name]};q.setUserInfo(o),F.close()}),H),D=new g(".card-popup",(function(e){var t={name:e[s(".card-name-input").name],link:e[s(".card-link-input").name]};A.addItem(z(t)),D.close()}),H),U=new S(".photo-popup"),q=new x(".profile__title",".profile__subtitle"),A=new B({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:z},".cards");function M(e,t){U.open(e,t)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:M;return new l(e,t,n).create()}function H(e,t){return new T(e,t)}A.render(),s(".profile__btn_action_edit").addEventListener("click",(function(){var n,o=(V(n={},e,q.getUserInfo().name),V(n,t,q.getUserInfo().profession),n);F.open(o)})),s(".profile__btn_action_add").addEventListener("click",(function(){D.open()}))})();