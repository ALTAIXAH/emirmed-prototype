/* @ds-bundle: {"format":4,"namespace":"EmirMed","components":[{"name":"Logo"},{"name":"Icon"},{"name":"Rings"},{"name":"Wayfinding"},{"name":"Button"},{"name":"Badge"},{"name":"Rating"},{"name":"Chip"},{"name":"SegmentedControl"},{"name":"SearchBar"},{"name":"TextField"},{"name":"Checkbox"},{"name":"OtpInput"},{"name":"Avatar"},{"name":"DoctorCard"},{"name":"ServiceTile"},{"name":"SlotPicker"},{"name":"PriceList"},{"name":"PaymentMethods"},{"name":"BookingSummary"},{"name":"AppointmentCard"},{"name":"VisitPass"},{"name":"DiscountCard"},{"name":"PromoCard"},{"name":"BranchCard"},{"name":"LabResult"},{"name":"ListRow"},{"name":"TopBar"},{"name":"TabBar"},{"name":"Sheet"},{"name":"Stories"},{"name":"StoryViewer"},{"name":"OfferCard"},{"name":"BonusCard"},{"name":"ChatBubble"},{"name":"AiComposer"},{"name":"AiCard"},{"name":"LabValue"},{"name":"QueueStatus"},{"name":"FeedbackPrompt"},{"name":"TicketStatus"},{"name":"CostEstimate"},{"name":"HelpPrompt"},{"name":"NextStepCard"},{"name":"MedReminder"},{"name":"WellbeingCheck"},{"name":"SupportCard"},{"name":"Device"}]} */
(function () {
  'use strict';
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(' ');
  }
  function omit(obj, keys) {
    var out = {};
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) out[k] = obj[k]; }
    return out;
  }
  /* 7000 -> "7 000 ₸" with non-breaking spaces; strings pass through */
  function money(n) {
    if (n == null || n === '') return '';
    if (typeof n === 'string') return n;
    return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₸';
  }
  function initials(name) {
    if (!name) return '';
    var parts = String(name).trim().split(/\s+/);
    return (parts[0] ? parts[0][0] : '') + (parts[1] ? parts[1][0] : '');
  }
  function useControlled(value, initial, onChange) {
    var st = useState(initial);
    var isCtl = value !== undefined;
    return [isCtl ? value : st[0], function (v) { if (!isCtl) st[1](v); if (onChange) onChange(v); }];
  }

  /* ---------- Logo: exact paths from emirmed.kz/staticfiles/images/icons/emirmed-logo.svg ---------- */
  var LOGO_MARK = [["M2.65325 12.1278C2.35312 8.29552 6.63018 4.46816 7.95582 5.42561C9.28148 6.38304 5.30452 8.93628 5.96734 11.1703C6.05838 11.4772 9.28145 5.10648 10.9385 6.38308C12.2641 7.40436 9.28145 8.93628 8.61862 12.7661C9.94427 10.8512 11.827 8.16221 12.927 9.57458C14.5177 11.6172 8.2872 12.7661 11.2699 19.7874L5.96734 17.0666L5.95898 17.0613C4.89385 16.3793 2.88552 15.0934 2.65325 12.1278Z","l"],["M32.9639 12.1278C33.2641 8.29552 28.987 4.46816 27.6614 5.42561C26.3357 6.38304 30.3127 8.93628 29.6498 11.1703C29.5588 11.4772 26.3357 5.10648 24.6787 6.38308C23.353 7.40436 26.3357 8.93628 26.9986 12.7661C25.6729 10.8512 23.7902 8.16221 22.6902 9.57458C21.0995 11.6172 27.33 12.7661 24.3473 19.7874L29.6498 17.0666L29.6582 17.0613C30.7233 16.3793 32.7317 15.0934 32.9639 12.1278Z","b"],["M16.286 18.4796C19.1375 20.4248 18.3759 27.1744 18.376 31C16.286 27.522 1.65653 19.8707 0.263243 13.6104C-1.13004 7.35017 3.39813 2.13331 4.79142 3.52447C6.1847 4.91564 2.70149 7.35018 2.70149 10.4803C2.70149 13.6104 5.83638 17.7839 8.27463 16.7405C10.7129 15.6972 3.96059 8.39356 5.83638 8.39356C8.27463 8.39356 10.0162 10.8281 10.7129 12.5671C11.4095 14.306 12.3744 15.8111 16.286 18.4796Z","g"],["M19.9903 18.4796C17.1389 20.4248 17.9004 27.1744 17.9004 31C19.9903 27.522 34.6198 19.8707 36.0131 13.6104C37.4064 7.35017 32.8782 2.13331 31.4849 3.52447C30.0917 4.91564 33.5749 7.35018 33.5749 10.4803C33.5749 13.6104 30.44 17.7839 28.0017 16.7405C25.5635 15.6972 32.3158 8.39356 30.44 8.39356C28.0017 8.39356 26.2601 10.8281 25.5635 12.5671C24.8668 14.306 23.902 15.8111 19.9903 18.4796Z","r"],["M11.7664 1.73374C7.13013 2.05083 6.86919 4.28189 5.42002 2.78206C4.62197 1.95611 7.24414 0.211025 11.1964 0.0183036C14.8446 -0.159593 17.1247 1.00309 17.8088 1.60667V3.95745C17.1881 3.12091 15.1106 1.50501 11.7664 1.73374Z","g"],["M24.1689 1.73374C29.0492 2.05083 29.3239 4.28189 30.8493 2.78206C31.6893 1.95611 28.9292 0.211025 24.7689 0.0183036C20.9287 -0.159593 18.5286 1.00309 17.8085 1.60667V3.95745C18.4619 3.12091 20.6487 1.50501 24.1689 1.73374Z","r"],["M16.0187 8.2309V8.57409H14.5523V8.27916L15.2645 7.35504C15.3426 7.25017 15.4042 7.15961 15.4493 7.08334C15.4944 7.00708 15.5259 6.93856 15.5439 6.87778C15.563 6.81582 15.5725 6.75564 15.5725 6.69725C15.5725 6.61503 15.5595 6.54293 15.5334 6.48097C15.5084 6.41781 15.4713 6.36836 15.4222 6.33261C15.3732 6.29567 15.3136 6.2772 15.2434 6.2772C15.1623 6.2772 15.0942 6.29805 15.0391 6.33976C14.984 6.38147 14.9425 6.43926 14.9144 6.51314C14.8864 6.58583 14.8723 6.66925 14.8723 6.76339H14.5103C14.5103 6.61205 14.5393 6.47382 14.5974 6.3487C14.6555 6.22238 14.7396 6.12228 14.8498 6.0484C14.96 5.97333 15.0927 5.93579 15.248 5.93579C15.3942 5.93579 15.5184 5.96499 15.6206 6.02338C15.7227 6.08177 15.8004 6.16459 15.8534 6.27183C15.9075 6.37908 15.9346 6.50599 15.9346 6.65256C15.9346 6.7336 15.9236 6.81403 15.9015 6.89387C15.8795 6.97371 15.8479 7.05355 15.8069 7.13339C15.7668 7.21204 15.7192 7.29129 15.6641 7.37113C15.609 7.44977 15.5484 7.52961 15.4823 7.61065L15.0091 8.2309H16.0187Z","g"],["M17.8081 7.64639V7.98959H16.2306L16.2185 7.73041L17.1621 5.97154H17.452L17.138 6.61145L16.5957 7.64639H17.8081ZM17.5347 5.97154V8.57409H17.1726V5.97154H17.5347Z","g"],["M19.2657 5.93579L18.6676 8.57409H18.4683L19.0674 5.93579H19.2657Z","r"],["M20.447 5.93579V6.15607L19.8331 8.36549H19.5652L20.178 6.25619H19.3827V5.93579H20.447Z","r"],["M16.8853 9.89355H18.6897C18.8709 9.89355 19.0178 10.0404 19.0178 10.2216V12.6822H21.4374C21.6186 12.6822 21.7655 12.8291 21.7655 13.0103V14.8147C21.7655 14.9959 21.6186 15.1428 21.4374 15.1428H19.388C19.2538 14.8743 19.2777 14.6761 19.2988 14.5022C19.3099 14.4105 19.3202 14.3255 19.306 14.2406C19.1419 14.3109 19.085 14.5822 19.0358 14.817C18.9988 14.9931 18.9662 15.1487 18.8959 15.1838C18.8128 15.2253 18.467 15.0146 18.135 14.8123C17.8114 14.615 17.501 14.4259 17.4606 14.4866C17.4177 14.5509 17.6549 14.7273 17.8852 14.8985C18.0956 15.0549 18.3003 15.2071 18.2808 15.2658C18.2614 15.3239 18.041 15.1811 17.7965 15.0227C17.5227 14.8454 17.2185 14.6484 17.1325 14.6917C17.1325 14.8401 17.5054 15.0631 17.7925 15.2347C17.9813 15.3477 18.133 15.4383 18.1167 15.4709C18.0979 15.5085 17.8807 15.3909 17.6471 15.2643C17.3713 15.1149 17.0727 14.9532 17.0505 15.0198C17.0269 15.0903 17.3812 15.3093 17.6876 15.4987C17.9154 15.6395 18.1167 15.764 18.1167 15.799C18.1167 15.8375 17.918 15.7495 17.7113 15.658C17.4776 15.5546 17.2337 15.4466 17.2555 15.5119C17.268 15.5493 17.4127 15.6282 17.6233 15.743C18.0043 15.9508 18.6008 16.276 19.0178 16.6847V17.4804C19.0178 17.6616 18.8709 17.8084 18.6897 17.8084H16.8853C16.7041 17.8084 16.5572 17.6616 16.5572 17.4804V15.1428H14.1787C13.9975 15.1428 13.8506 14.9959 13.8506 14.8147V13.0103C13.8506 12.8291 13.9975 12.6822 14.1787 12.6822H15.492C15.8454 12.8961 16.3633 13.4381 16.4752 14.4456C16.6708 14.4022 16.6591 14.1975 16.6476 13.9963C16.6374 13.8179 16.6273 13.6423 16.7623 13.5844C16.9091 13.5215 17.3241 13.641 17.7055 13.7507L17.7055 13.7507C18.0699 13.8556 18.4036 13.9516 18.4437 13.8715C18.4896 13.7796 18.1881 13.6491 17.914 13.5305L17.914 13.5305C17.6988 13.4373 17.5005 13.3515 17.5005 13.2974C17.5495 13.281 17.7417 13.3493 17.9604 13.427C18.2907 13.5443 18.6814 13.6831 18.7308 13.5844C18.7734 13.4992 18.4946 13.4028 18.217 13.3069L18.217 13.3069C17.9607 13.2183 17.7055 13.1301 17.7055 13.0513C17.7393 13.0344 17.9057 13.0873 18.0925 13.1466C18.3584 13.2311 18.6656 13.3286 18.6897 13.2564C18.7108 13.1931 18.4498 13.0972 18.1913 13.0023C17.9472 12.9127 17.7055 12.824 17.7055 12.7642C17.7268 12.7642 17.7867 12.7753 17.8639 12.7895L17.8639 12.7895C18.0839 12.8301 18.4437 12.8964 18.4437 12.8053C18.4437 12.7699 18.3147 12.7311 18.1192 12.6723C17.6989 12.5459 16.971 12.327 16.5572 11.8505V10.2216C16.5572 10.0404 16.7041 9.89355 16.8853 9.89355Z","g"]];
  var LOGO_WORD = [["M48.2148 20.5557H58.0217C58.4484 20.5557 58.7227 20.3144 58.8446 19.8319H59.1875V23.745H58.8446C58.7837 23.5339 58.6846 23.3605 58.5474 23.2247C58.4255 23.1041 58.2503 23.0438 58.0217 23.0438H44.1914V22.6819C44.42 22.6216 44.5953 22.5311 44.7172 22.4104C44.8391 22.2898 44.9001 22.1164 44.9001 21.8902V9.11039C44.9001 8.91435 44.862 8.75602 44.7858 8.63538C44.7096 8.51475 44.5114 8.40919 44.1914 8.31872V7.95681H57.7702C57.9988 7.95681 58.1741 7.90403 58.296 7.79847C58.4179 7.67784 58.5093 7.49689 58.5703 7.25562H58.9361V11.1461H58.5703C58.5093 10.9199 58.4179 10.7465 58.296 10.6259C58.1741 10.5052 57.9988 10.4449 57.7702 10.4449H48.2148V14.0187H54.4098C54.6079 14.0187 54.7679 13.981 54.8899 13.9056C55.0118 13.8302 55.1185 13.6342 55.2099 13.3175H55.5757V17.1176H55.2099C55.1489 16.8914 55.0575 16.718 54.9356 16.5973C54.8137 16.4767 54.6384 16.4164 54.4098 16.4164H48.2148V20.5557Z","g"],["M64.7957 12.6164V21.8902C64.7957 22.1164 64.849 22.2898 64.9557 22.4104C65.0776 22.5311 65.2605 22.6216 65.5044 22.6819V23.0438H61.0238V22.6819C61.2524 22.6216 61.4277 22.5311 61.5496 22.4104C61.6715 22.2898 61.7325 22.1164 61.7325 21.8902V9.11039C61.7325 8.88419 61.6715 8.71078 61.5496 8.59014C61.4429 8.46951 61.2677 8.37903 61.0238 8.31872V7.95681H66.8988V8.31872C66.7464 8.36395 66.6245 8.42427 66.5331 8.49967C66.4569 8.57507 66.4035 8.68816 66.373 8.83896C66.373 9.06515 66.4264 9.26118 66.5331 9.42705L70.6936 17.0271L74.8769 9.56277C74.8922 9.53261 74.9379 9.44213 75.0141 9.29134C75.1055 9.14054 75.1589 9.01237 75.1741 8.90681C75.1741 8.51475 74.9836 8.31872 74.6026 8.31872V7.95681H80.3633V8.31872C80.1347 8.37903 79.9595 8.46951 79.8375 8.59014C79.7156 8.71078 79.6547 8.88419 79.6547 9.11039V21.8902C79.6547 22.1164 79.708 22.2898 79.8147 22.4104C79.9366 22.5311 80.1195 22.6216 80.3633 22.6819V23.0438H75.6084V22.6819C76.0961 22.5612 76.34 22.2974 76.34 21.8902V12.6164L70.3964 22.8402L64.7957 12.6164Z","g"],["M86.942 23.0438H82.1871V22.6819C82.4157 22.6216 82.591 22.5311 82.7129 22.4104C82.8348 22.2898 82.8958 22.1164 82.8958 21.8902V9.11039C82.8958 8.88419 82.8348 8.71078 82.7129 8.59014C82.6062 8.46951 82.4309 8.37903 82.1871 8.31872V7.95681H86.942V8.31872C86.4543 8.43935 86.2105 8.70324 86.2105 9.11039V21.8902C86.2105 22.2974 86.4543 22.5612 86.942 22.6819V23.0438Z","g"],["M92.7961 21.8902C92.7961 22.2974 93.0399 22.5612 93.5276 22.6819V23.0438H88.7727V22.6819C89.0013 22.6216 89.1766 22.5311 89.2985 22.4104C89.4204 22.2898 89.4814 22.1164 89.4814 21.8902V9.11039C89.4814 8.88419 89.4204 8.71078 89.2985 8.59014C89.1918 8.46951 89.0166 8.37903 88.7727 8.31872V7.95681H98.3053C100.271 7.95681 101.803 8.26594 102.9 8.88419C104.013 9.50245 104.569 10.7239 104.569 12.5485C104.569 13.785 104.196 14.7501 103.449 15.4437C102.717 16.1223 101.711 16.5596 100.431 16.7557L103.403 20.9402C103.845 21.5886 104.188 22.041 104.432 22.2974C104.676 22.5537 105.011 22.6819 105.438 22.6819V23.0438H99.9284V22.6819C100.05 22.6668 100.172 22.6366 100.294 22.5914C100.416 22.5462 100.477 22.4481 100.477 22.2974C100.477 22.1466 100.401 21.9656 100.248 21.7545C100.096 21.5283 99.997 21.385 99.9512 21.3247L96.888 16.8914H92.7961V21.8902ZM97.9624 14.4033C98.9683 14.4033 99.7684 14.2902 100.363 14.064C100.957 13.8227 101.254 13.2799 101.254 12.4354C101.254 11.5759 100.957 11.033 100.363 10.8068C99.7836 10.5656 98.9835 10.4449 97.9624 10.4449H92.7961V14.4033H97.9624Z","g"],["M112.743 12.6162V21.8901C112.743 22.1163 112.797 22.2897 112.903 22.4103C113.025 22.531 113.208 22.6214 113.452 22.6818V23.0437H108.97V22.6818C109.199 22.6214 109.374 22.531 109.496 22.4103C109.618 22.2897 109.679 22.1163 109.679 21.8901V9.11026C109.679 8.88407 109.618 8.71066 109.496 8.59002C109.389 8.46939 109.214 8.37891 108.97 8.31859V7.95669H114.847V8.31859C114.695 8.36383 114.573 8.42415 114.481 8.49955C114.405 8.57494 114.352 8.68804 114.321 8.83883C114.321 9.06503 114.374 9.26106 114.481 9.42693L118.643 17.027L122.827 9.56265C122.843 9.53249 122.888 9.44201 122.965 9.29122C123.056 9.14042 123.109 9.01225 123.125 8.90669C123.125 8.51463 122.934 8.31859 122.553 8.31859V7.95669H128.315V8.31859C128.087 8.37891 127.911 8.46939 127.79 8.59002C127.668 8.71066 127.607 8.88407 127.607 9.11026V21.8901C127.607 22.1163 127.66 22.2897 127.767 22.4103C127.889 22.531 128.072 22.6214 128.315 22.6818V23.0437H123.559V22.6818C124.047 22.5611 124.291 22.2972 124.291 21.8901V12.6162L118.346 22.8401L112.743 12.6162Z","r"],["M134.164 20.5556H143.974C144.401 20.5556 144.675 20.3143 144.797 19.8317H145.14V23.7449H144.797C144.736 23.5337 144.637 23.3603 144.5 23.2246C144.378 23.104 144.203 23.0437 143.974 23.0437H130.14V22.6818C130.368 22.6214 130.544 22.531 130.666 22.4103C130.788 22.2897 130.849 22.1163 130.849 21.8901V9.11026C130.849 8.91423 130.811 8.7559 130.734 8.63526C130.658 8.51463 130.46 8.40907 130.14 8.31859V7.95669H143.723C143.951 7.95669 144.127 7.90391 144.249 7.79835C144.37 7.67772 144.462 7.49676 144.523 7.25549H144.889V11.146H144.523C144.462 10.9198 144.37 10.7464 144.249 10.6257C144.127 10.5051 143.951 10.4448 143.723 10.4448H134.164V14.0186H140.361C140.559 14.0186 140.719 13.9809 140.841 13.9055C140.963 13.8301 141.07 13.6341 141.162 13.3174H141.527V17.1174H141.162C141.101 16.8913 141.009 16.7178 140.887 16.5972C140.765 16.4766 140.59 16.4163 140.361 16.4163H134.164V20.5556Z","r"],["M155.461 7.95669C156.711 7.95669 157.808 8.06224 158.754 8.27335C159.714 8.48447 160.59 8.92931 161.383 9.60788C162.176 10.2865 162.763 11.1384 163.144 12.1638C163.54 13.1893 163.738 14.3051 163.738 15.5115C163.738 16.6877 163.54 17.796 163.144 18.8365C162.763 19.877 162.176 20.729 161.383 21.3925C160.59 22.0409 159.706 22.4782 158.731 22.7044C157.77 22.9306 156.68 23.0437 155.461 23.0437H146.977V22.6818C147.206 22.6214 147.381 22.531 147.503 22.4103C147.625 22.2897 147.686 22.1163 147.686 21.8901V9.11026C147.686 8.88407 147.625 8.71066 147.503 8.59002C147.396 8.46939 147.221 8.37891 146.977 8.31859V7.95669H155.461ZM155.186 20.5556C156.924 20.5556 158.212 20.1484 159.051 19.3341C159.904 18.5048 160.331 17.2305 160.331 15.5115C160.331 13.7773 159.912 12.5031 159.074 11.6888C158.25 10.8595 156.955 10.4448 155.186 10.4448H151.002V20.5556H155.186Z","r"]];
  var LOGO_FILL = { g: 'var(--brand-green)', r: 'var(--heart-red)', l: 'var(--leaf)', b: 'var(--blossom)' };
  function Logo(p) {
    var variant = p.variant || 'full';
    var tone = p.tone || 'color';
    var height = p.height || 32;
    var paths = variant === 'mark' ? LOGO_MARK : LOGO_MARK.concat(LOGO_WORD);
    var w = variant === 'mark' ? 37 : 164;
    return h('svg', {
      className: cx('em-logo', p.className), viewBox: '0 0 ' + w + ' 31', height: height, width: Math.round(height * w / 31 * 10) / 10,
      role: 'img', 'aria-label': p.label || 'EMIRMED', style: p.style
    }, paths.map(function (d, i) { return h('path', { key: i, d: d[0], fill: tone === 'mono' ? 'currentColor' : LOGO_FILL[d[1]] }); }));
  }

  /* ---------- Icon: 24px line set, 1.6 stroke, round caps ---------- */
  var ICONS = {
    home: [['p', 'M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5h-4.25v-5.75h-5.5v5.75H5A1.5 1.5 0 0 1 3.5 19z']],
    calendar: [['r', 3.5, 5, 17, 15.5, 3], ['p', 'M3.5 10h17M8 3v4M16 3v4']],
    card: [['r', 2.5, 5, 19, 14, 3], ['p', 'M2.5 10h19M6.5 15h4']],
    clock: [['c', 12, 12, 8.5], ['p', 'M12 7.5V12l3 2.5']],
    pin: [['p', 'M12 21s-6.75-5.9-6.75-11.25a6.75 6.75 0 0 1 13.5 0C18.75 15.1 12 21 12 21z'], ['c', 12, 9.75, 2.5]],
    phone: [['p', 'M6.6 3.5h2.6l1.6 4.2-2 1.3a11.5 11.5 0 0 0 6.2 6.2l1.3-2 4.2 1.6v2.6a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1z']],
    search: [['c', 11, 11, 7], ['p', 'm20 20-3.9-3.9']],
    user: [['c', 12, 8, 4], ['p', 'M4.5 20.5a7.5 7.5 0 0 1 15 0']],
    users: [['c', 9, 8.5, 3.5], ['p', 'M3 19.5a6 6 0 0 1 12 0M16 5.25a3.25 3.25 0 0 1 0 6.5M18 14.5a5.5 5.5 0 0 1 3 5']],
    stethoscope: [['p', 'M6.5 3.5H5.25a.75.75 0 0 0-.75.75V9a4.5 4.5 0 0 0 9 0V4.25a.75.75 0 0 0-.75-.75H11.5'], ['p', 'M9 13.5v1.25a5.25 5.25 0 0 0 10.5 0V13'], ['c', 19.5, 10.75, 2.25]],
    'chevron-right': [['p', 'm9.5 5.5 6.5 6.5-6.5 6.5']],
    'chevron-left': [['p', 'm14.5 5.5-6.5 6.5 6.5 6.5']],
    'chevron-down': [['p', 'm5.5 9.5 6.5 6.5 6.5-6.5']],
    'arrow-right': [['p', 'M4.5 12h15M13.5 6l6 6-6 6']],
    'arrow-left': [['p', 'M19.5 12h-15M10.5 6l-6 6 6 6']],
    'arrow-up': [['p', 'M12 19.5v-15M6 10.5l6-6 6 6']],
    star: [['p', 'm12 3.6 2.55 5.3 5.8.75-4.25 4 1.05 5.75L12 16.6l-5.15 2.8 1.05-5.75-4.25-4 5.8-.75z']],
    heart: [['p', 'M12 20s-7.6-4.55-9.25-9.35C1.6 7.3 3.85 4 7.25 4c2 0 3.6 1.05 4.75 2.75C13.15 5.05 14.75 4 16.75 4c3.4 0 5.65 3.3 4.5 6.65C19.6 15.45 12 20 12 20z']],
    bell: [['p', 'M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z'], ['p', 'M10 21h4']],
    flask: [['p', 'M9 3.5h6M10 3.5v5.75L4.9 18.1a1.6 1.6 0 0 0 1.4 2.4h11.4a1.6 1.6 0 0 0 1.4-2.4L14 9.25V3.5'], ['p', 'M7.2 14.5h9.6']],
    scan: [['c', 12, 12, 8.5], ['c', 12, 12, 3.5], ['p', 'M3.5 12h5M15.5 12h5']],
    file: [['p', 'M13.5 3.5H7A1.5 1.5 0 0 0 5.5 5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8.5z'], ['p', 'M13.5 3.5v5h5M9 13h6M9 16.5h4']],
    wallet: [['p', 'M4 7.5A2.5 2.5 0 0 1 6.5 5H17v2.5'], ['r', 3.5, 7.5, 17, 12.5, 2.5], ['p', 'M15.5 13.75h2']],
    cash: [['r', 2.5, 6, 19, 12, 2.5], ['c', 12, 12, 2.5], ['p', 'M6 10v4M18 10v4']],
    qr: [['r', 3.5, 3.5, 6.5, 6.5, 1.5], ['r', 14, 3.5, 6.5, 6.5, 1.5], ['r', 3.5, 14, 6.5, 6.5, 1.5], ['p', 'M14 14h2.5v2.5H14zM18 14h2.5M14 20.5h2.5M18 18h2.5v2.5H18']],
    check: [['p', 'm5 12.5 4.5 4.5L19 7.5']],
    close: [['p', 'M6.5 6.5l11 11M17.5 6.5l-11 11']],
    plus: [['p', 'M12 5v14M5 12h14']],
    info: [['c', 12, 12, 8.5], ['p', 'M12 11v5.5M12 7.75v.25']],
    alert: [['p', 'M10.6 4.3 2.9 17.6A1.6 1.6 0 0 0 4.3 20h15.4a1.6 1.6 0 0 0 1.4-2.4L13.4 4.3a1.6 1.6 0 0 0-2.8 0z'], ['p', 'M12 9.5v4.5M12 17v.25']],
    building: [['p', 'M4.5 20.5V5A1.5 1.5 0 0 1 6 3.5h7A1.5 1.5 0 0 1 14.5 5v15.5M14.5 9.5H18a1.5 1.5 0 0 1 1.5 1.5v9.5M3 20.5h18M8 8h3M8 12h3M8 16h3']],
    door: [['p', 'M6 20.5V4.5A1 1 0 0 1 7 3.5h10a1 1 0 0 1 1 1v16M3.5 20.5h17'], ['c', 14.75, 12.5, 0.75]],
    elevator: [['r', 4, 3.5, 16, 17, 2.5], ['p', 'm9.5 9.5 2.5-2.75 2.5 2.75M9.5 14.5l2.5 2.75 2.5-2.75']],
    'house-plus': [['p', 'M3.5 10.2 12 3.5l8.5 6.7V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19z'], ['p', 'M12 10.5v6M9 13.5h6']],
    gift: [['r', 3.5, 8.5, 17, 4, 1.25], ['p', 'M5 12.5v6.5a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19v-6.5M12 8.5v12M12 8.5S11 4 8.25 4.25C6 4.5 6.5 8.5 12 8.5zM12 8.5s1-4.5 3.75-4.25C18 4.5 17.5 8.5 12 8.5z']],
    percent: [['p', 'M18.5 5.5l-13 13'], ['c', 7.5, 7.5, 2.25], ['c', 16.5, 16.5, 2.25]],
    video: [['r', 3, 6, 13, 12, 2.5], ['p', 'm16 10.5 5-3v9l-5-3']],
    route: [['p', 'M20 4 4 11l7 2 2 7z']],
    globe: [['c', 12, 12, 8.5], ['p', 'M3.5 12h17M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5s1.2-6.1 3.5-8.5z']],
    shield: [['p', 'M12 3.5 5 6v5.5c0 4.3 3 7.7 7 9 4-1.3 7-4.7 7-9V6z'], ['p', 'm9 12 2.25 2.25L15.5 10']],
    logout: [['p', 'M14 4.5h3.5A1.5 1.5 0 0 1 19 6v12a1.5 1.5 0 0 1-1.5 1.5H14M10 16l4-4-4-4M14 12H4.5']],
    sparkle: [['p', 'M11 3.5l1.9 5.1 5.1 1.9-5.1 1.9L11 17.5l-1.9-5.1L4 10.5l5.1-1.9z'], ['p', 'M18.5 14.5l.75 1.75 1.75.75-1.75.75-.75 1.75-.75-1.75-1.75-.75 1.75-.75z']],
    mic: [['r', 9, 3, 6, 11, 3], ['p', 'M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7']],
    send: [['p', 'M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4z']],
    message: [['p', 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L5 20.5V17H6a2 2 0 0 1-2-2z']],
    parking: [['r', 3.5, 3.5, 17, 17, 4], ['p', 'M9.5 16.5v-9h3.25a2.75 2.75 0 0 1 0 5.5H9.5']],
    ear: [['p', 'M7 9a5 5 0 0 1 10 0c0 3-2.5 3.5-2.5 6.5a3 3 0 0 1-5.5 1.6'], ['p', 'M10 9.5a2 2 0 0 1 4 0']],
    receipt: [['p', 'M6 3.5h12v17l-2-1.25-2 1.25-2-1.25-2 1.25-2-1.25-2 1.25z'], ['p', 'M9 8h6M9 11.5h6M9 15h3.5']],
    pill: [['p', 'M10.6 19.9a4.9 4.9 0 0 1-6.9-6.9l6.2-6.2a4.9 4.9 0 0 1 6.9 6.9z'], ['p', 'M6.8 9.9l6.9 6.9']],
    minus: [['p', 'M5 12h14']],
    headset: [['p', 'M4.5 14v-2a7.5 7.5 0 0 1 15 0v2'], ['r', 3.5, 13.5, 4, 6, 1.5], ['r', 16.5, 13.5, 4, 6, 1.5], ['p', 'M20.5 19.5c0 1-1.5 1.5-4 1.5h-2']],
    'thermometer': [['p', 'M14 14.5V5a2 2 0 0 0-4 0v9.5a4 4 0 1 0 4 0z'], ['p', 'M12 11v6']]
  };
  var ICON_NAMES = Object.keys(ICONS);
  function Icon(p) {
    var size = p.size || 24;
    var data = ICONS[p.name] || ICONS.info;
    var kids = data.map(function (s, i) {
      if (s[0] === 'p') return h('path', { key: i, d: s[1] });
      if (s[0] === 'c') return h('circle', { key: i, cx: s[1], cy: s[2], r: s[3] });
      return h('rect', { key: i, x: s[1], y: s[2], width: s[3], height: s[4], rx: s[5] });
    });
    return h('svg', {
      className: cx('em-icon', p.className), width: size, height: size, viewBox: '0 0 24 24',
      fill: p.filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: p.strokeWidth || 1.6,
      strokeLinecap: 'round', strokeLinejoin: 'round',
      'aria-hidden': p.label ? undefined : true, role: p.label ? 'img' : undefined, 'aria-label': p.label, style: p.style
    }, kids);
  }

  /* ---------- Rings: the ring chandeliers of the lobbies, as tilted ellipses ---------- */
  var RING_TONE = { glow: 'var(--glow)', emerald: 'var(--emerald)', sage: 'var(--sage)', oak: 'var(--oak)' };
  function Rings(p) {
    var color = RING_TONE[p.tone || 'glow'];
    var count = p.count || 3;
    var kids = [];
    for (var i = 0; i < count; i++) {
      var cxp = 100 + i * 6, cyp = 34 + i * 28;
      kids.push(h('ellipse', { key: i, cx: cxp, cy: cyp, rx: 90 - i * 13, ry: 24 - i * 3, transform: 'rotate(' + (-8 + i * 7) + ' ' + cxp + ' ' + cyp + ')', stroke: color, strokeWidth: p.strokeWidth || 2.5, opacity: 1 - i * 0.18 }));
    }
    return h('svg', { className: cx('em-rings', p.className), viewBox: '0 0 200 ' + (50 + count * 28), width: p.width || 200, 'aria-hidden': true, style: p.style }, kids);
  }

  /* ---------- Wayfinding: the green signs on the clinic walls ---------- */
  function Sign(s, i, size) {
    var dir = s.dir || 'none';
    var isz = size === 'lg' ? 18 : 16;
    return h('span', { key: i, role: 'listitem', className: cx('em-sign', dir === 'left' && 'em-sign--left', dir === 'right' && 'em-sign--right', size === 'lg' && 'em-sign--lg', s.tone === 'light' && 'em-sign--light') },
      dir === 'left' ? h(Icon, { name: 'arrow-left', size: isz, strokeWidth: 2.2 }) : null,
      s.icon ? h(Icon, { name: s.icon, size: isz, strokeWidth: 2 }) : null,
      s.label,
      dir === 'right' ? h(Icon, { name: 'arrow-right', size: isz, strokeWidth: 2.2 }) : dir === 'up' ? h(Icon, { name: 'arrow-up', size: isz, strokeWidth: 2.2 }) : null);
  }
  function Wayfinding(p) {
    if (p.steps) {
      var out = [];
      p.steps.forEach(function (s, i) {
        if (i) out.push(h(Icon, { key: 'sep' + i, name: 'chevron-right', size: 16, className: 'em-route__sep', strokeWidth: 2 }));
        out.push(Sign(s, i, p.size));
      });
      return h('div', { className: cx('em-route', p.className), role: 'list', 'aria-label': p.label || 'Как пройти' }, out);
    }
    return h('span', { role: 'list', className: p.className, style: { display: 'inline-flex' } }, Sign({ label: p.label, dir: p.dir, icon: p.icon, tone: p.tone }, 0, p.size));
  }

  /* ---------- Button ---------- */
  function Button(p) {
    var variant = p.variant || 'primary';
    var size = p.size || 'lg';
    var iconSize = size === 'sm' ? 18 : 20;
    var iconOnly = p.icon && (p.children == null || p.children === '');
    var rest = omit(p, ['variant', 'size', 'icon', 'iconRight', 'block', 'loading', 'className', 'children']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('em-btn', 'em-btn--' + variant, 'em-btn--' + size, p.block && 'em-btn--block', iconOnly && 'em-btn--icon', p.className),
      disabled: p.disabled || p.loading, 'aria-busy': p.loading || undefined
    }),
      p.loading ? h('span', { className: 'em-spinner', 'aria-hidden': true }) : (p.icon ? h(Icon, { name: p.icon, size: iconSize, strokeWidth: 1.9 }) : null),
      iconOnly ? null : h('span', null, p.children),
      p.iconRight && !p.loading ? h(Icon, { name: p.iconRight, size: iconSize, strokeWidth: 1.9 }) : null);
  }

  /* ---------- Badge ---------- */
  function Badge(p) {
    var tone = p.tone || 'neutral';
    var icon = p.icon === undefined ? (tone === 'top' ? 'star' : tone === 'bonus' ? 'gift' : null) : p.icon;
    return h('span', { className: cx('em-badge', 'em-badge--' + tone, p.size === 'lg' && 'em-badge--lg', p.className), style: p.style },
      p.dot ? h('span', { className: 'em-badge__dot', 'aria-hidden': true }) : null,
      icon ? h(Icon, { name: icon, size: p.size === 'lg' ? 16 : 14, filled: icon === 'star', strokeWidth: 2 }) : null,
      p.children);
  }

  /* ---------- Rating ---------- */
  function Rating(p) {
    var v = typeof p.value === 'number' ? p.value.toFixed(1).replace('.', ',') : p.value;
    return h('span', { className: cx('em-rating', p.className), 'aria-label': 'Рейтинг ' + v + (p.count ? ', отзывов: ' + p.count : '') },
      h(Icon, { name: 'star', size: 16, filled: true, strokeWidth: 1.2 }),
      h('span', null, v),
      p.count ? h('span', { className: 'em-rating__count' }, '· ' + p.count + ' отзывов') : null);
  }

  /* ---------- Chip ---------- */
  function Chip(p) {
    var rest = omit(p, ['icon', 'selected', 'className', 'children']);
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('em-chip', p.className), 'aria-pressed': !!p.selected }),
      p.icon ? h(Icon, { name: p.icon, size: 18 }) : null, p.children);
  }

  /* ---------- SegmentedControl ---------- */
  function SegmentedControl(p) {
    var opts = p.options || [];
    var first = opts[0] ? (opts[0].value != null ? opts[0].value : opts[0]) : undefined;
    var s = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : first, p.onChange);
    return h('div', { className: cx('em-seg', p.className), role: 'tablist', 'aria-label': p.label },
      opts.map(function (o) {
        var val = o.value != null ? o.value : o;
        var lab = o.label != null ? o.label : o;
        return h('button', { key: val, type: 'button', role: 'tab', className: 'em-seg__item', 'aria-selected': s[0] === val, onClick: function () { s[1](val); } }, lab);
      }));
  }

  /* ---------- SearchBar ---------- */
  function SearchBar(p) {
    return h('form', { className: cx('em-search', p.className), role: 'search', onSubmit: function (e) { e.preventDefault(); if (p.onSubmit) p.onSubmit(e.target.elements.q.value); } },
      h(Icon, { name: 'search', size: 22 }),
      h('input', { className: 'em-search__input', name: 'q', type: 'search', placeholder: p.placeholder || 'Чем мы можем вам помочь?', value: p.value, defaultValue: p.defaultValue, onChange: p.onChange && function (e) { p.onChange(e.target.value); }, 'aria-label': 'Поиск врача, услуги или анализа' }),
      p.button === false ? null : h('button', { type: 'submit', className: 'em-search__btn', 'aria-label': 'Найти' }, h(Icon, { name: 'arrow-right', size: 20, strokeWidth: 2 })));
  }

  /* ---------- TextField ---------- */
  function formatPhone(raw) {
    var d = String(raw || '').replace(/\D/g, '');
    if (d.length > 10 && (d[0] === '7' || d[0] === '8')) d = d.slice(1);
    d = d.slice(0, 10);
    var out = '';
    if (d.length > 0) out += '(' + d.slice(0, 3);
    if (d.length >= 3) out += ') ' + d.slice(3, 6);
    if (d.length >= 6) out += '-' + d.slice(6, 8);
    if (d.length >= 8) out += '-' + d.slice(8, 10);
    return out;
  }
  function formatIin(raw) { return String(raw || '').replace(/\D/g, '').slice(0, 12); }
  function TextField(p) {
    var mask = p.mask;
    var state = p.error ? 'error' : p.valid ? 'valid' : null;
    var fmt = mask === 'phone' ? formatPhone : mask === 'iin' ? formatIin : function (v) { return v; };
    var s = useControlled(p.value, p.defaultValue != null ? fmt(p.defaultValue) : '', p.onChange);
    var id = p.id || (p.name ? 'em-f-' + p.name : undefined);
    var hint = p.error && typeof p.error === 'string' ? p.error : p.hint;
    return h('div', { className: cx('em-field', state && 'em-field--' + state, p.disabled && 'em-field--disabled', p.className) },
      p.label ? h('label', { className: 'em-field__label', htmlFor: id }, p.label) : null,
      h('div', { className: 'em-field__box' },
        p.icon ? h(Icon, { name: p.icon, size: 20 }) : null,
        mask === 'phone' ? h('span', { className: 'em-field__prefix' }, '+7') : null,
        h('input', {
          id: id, name: p.name, className: 'em-field__input', disabled: p.disabled, placeholder: p.placeholder || (mask === 'phone' ? '(___) ___-__-__' : mask === 'iin' ? '12 цифр ИИН' : undefined),
          type: mask === 'phone' ? 'tel' : (p.type || 'text'), inputMode: mask ? 'numeric' : p.inputMode, autoComplete: mask === 'phone' ? 'tel-national' : p.autoComplete,
          value: s[0], onChange: function (e) { s[1](fmt(e.target.value)); }, 'aria-invalid': p.error ? true : undefined
        }),
        state === 'valid' ? h(Icon, { name: 'check', size: 20, className: 'em-field__state', strokeWidth: 2.2 }) : null,
        state === 'error' ? h(Icon, { name: 'alert', size: 20, className: 'em-field__state' }) : null,
        p.trailing === 'chevron' ? h(Icon, { name: 'chevron-down', size: 20 }) : null),
      hint ? h('div', { className: 'em-field__hint' }, hint) : null);
  }

  /* ---------- Checkbox ---------- */
  function Checkbox(p) {
    return h('label', { className: cx('em-check', p.className) },
      h('input', { type: 'checkbox', className: 'em-check__native', checked: p.checked, defaultChecked: p.defaultChecked, onChange: p.onChange && function (e) { p.onChange(e.target.checked); }, disabled: p.disabled }),
      h('span', { className: 'em-check__box', 'aria-hidden': true }, h(Icon, { name: 'check', size: 16, strokeWidth: 2.5 })),
      h('span', null, p.children));
  }

  /* ---------- OtpInput ---------- */
  function OtpInput(p) {
    var len = p.length || 4;
    var s = useControlled(p.value, p.defaultValue || '', p.onChange);
    var v = String(s[0] || '').replace(/\D/g, '').slice(0, len);
    var cells = [];
    for (var i = 0; i < len; i++) {
      cells.push(h('span', { key: i, className: cx('em-otp__cell', !p.error && i === Math.min(v.length, len - 1) && 'em-otp__cell--active'), 'aria-hidden': true }, v[i] || ''));
    }
    var secs = p.resendIn || 0;
    return h('div', { className: cx('em-otp', p.error && 'em-otp--error', p.className) },
      h('label', { className: 'em-otp__cells' },
        h('input', { className: 'em-otp__input', inputMode: 'numeric', autoComplete: 'one-time-code', maxLength: len, value: v, onChange: function (e) { s[1](e.target.value.replace(/\D/g, '').slice(0, len)); }, 'aria-label': 'Код из SMS' }),
        cells),
      p.error ? h('div', { className: 'em-field__hint', style: { color: 'var(--red-ink)' } }, typeof p.error === 'string' ? p.error : 'Неверный код') : null,
      secs > 0
        ? h('div', { className: 'em-otp__meta' }, 'Отправить код повторно через ' + Math.floor(secs / 60) + ':' + String(secs % 60).padStart(2, '0'))
        : h(Button, { variant: 'ghost', size: 'sm', onClick: p.onResend, style: { paddingLeft: 0 } }, 'Отправить код ещё раз'));
  }

  /* ---------- Avatar: photo cropped to the face, or initials ---------- */
  function Avatar(p) {
    var size = p.size || 56;
    var zoom = p.zoom || 1;
    var style = Object.assign({ width: size, height: size, borderRadius: p.shape === 'rounded' ? Math.round(size * 0.3) : '50%', fontSize: Math.round(size * 0.36) }, p.style);
    return h('span', { className: cx('em-avatar', p.className), style: style },
      p.src ? h('img', { src: p.src, alt: p.name || '', style: zoom !== 1 ? { transform: 'scale(' + zoom + ')', transformOrigin: p.focus || '50% 40%' } : undefined }) : initials(p.name));
  }

  /* ---------- DoctorCard ---------- */
  function DoctorCard(p) {
    var layout = p.layout || 'row';
    var photo = h('div', { className: 'em-doc__photo' },
      h(Avatar, { name: p.name, src: p.photo, zoom: layout === 'card' ? 1.35 : 1.75, focus: '50% 40%', style: { width: '100%', height: '100%', borderRadius: 0, fontSize: 28 } }),
      layout === 'card' ? h('div', { className: 'em-doc__badges' }, p.top ? h(Badge, { tone: 'top' }, 'ТОП') : h('span'), p.rating != null ? h(Badge, { tone: 'glass' }, h(Rating, { value: p.rating })) : null) : null);
    var spec = [p.specialty, p.experience].filter(Boolean).join(' · ');
    return h('article', { className: cx('em-card', 'em-doc', 'em-doc--' + layout, p.top && p.highlight !== false && 'em-doc--top', p.className) },
      photo,
      h('div', { className: 'em-doc__body' },
        layout === 'row' && (p.top || p.rating != null) ? h('div', { className: 'em-doc__top' }, p.top ? h(Badge, { tone: 'top' }, 'ТОП') : null, p.rating != null ? h(Rating, { value: p.rating, count: p.reviews }) : null) : null,
        h('h3', { className: 'em-doc__name' }, p.name),
        spec ? h('p', { className: 'em-doc__spec' }, spec) : null,
        p.nextSlot ? h('div', { className: 'em-doc__slot' }, h(Icon, { name: 'clock', size: 16 }), p.nextSlot) : null,
        p.bonus ? h('div', { className: 'em-doc__bonus' }, h(Icon, { name: 'gift', size: 15 }), p.bonus) : null,
        p.tags ? h('div', { className: 'em-doc__tags' }, p.tags.map(function (t) { return h('span', { key: t, className: 'em-doc__tag' }, t); })) : null,
        p.note ? h('div', { className: 'em-doc__note' }, h(Icon, { name: 'message', size: 15 }), p.note) : null,
        h('div', { className: 'em-doc__foot' },
          p.price != null ? h('div', { className: 'em-doc__prices' },
            h('span', { className: cx('em-price', p.oldPrice != null && 'em-price--sale') }, (p.priceFrom ? 'от ' : '') + money(p.price)),
            p.oldPrice != null ? h('span', { className: 'em-old-price' }, money(p.oldPrice)) : null) : null,
          p.onBook !== null ? h(Button, { variant: layout === 'card' ? 'primary' : 'secondary', size: layout === 'card' ? 'md' : 'sm', block: layout === 'card', onClick: p.onBook }, p.bookLabel || 'Записаться') : null)));
  }

  /* ---------- ServiceTile ---------- */
  function ServiceTile(p) {
    var rest = omit(p, ['icon', 'label', 'sub', 'tone', 'image', 'size', 'className']);
    if (p.image) {
      return h('button', Object.assign({ type: 'button' }, rest, { className: cx('em-tile', 'em-tile--photo', p.className) }),
        h('img', { src: p.image, alt: '' }),
        h('span', { className: 'em-tile__text' }, h('span', { className: 'em-tile__label' }, p.label), p.sub ? h('span', { className: 'em-tile__sub' }, p.sub) : null));
    }
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('em-tile', p.tone && 'em-tile--' + p.tone, p.size === 'sm' && 'em-tile--sm', p.className) }),
      h('span', { className: 'em-tile__ico', 'aria-hidden': true }, h(Icon, { name: p.icon || 'stethoscope', size: 22 })),
      h('span', { className: 'em-tile__text' }, h('span', { className: 'em-tile__label' }, p.label), p.sub ? h('span', { className: 'em-tile__sub' }, p.sub) : null));
  }

  /* ---------- SlotPicker ---------- */
  function SlotPicker(p) {
    var days = p.days || [];
    var firstDay = days.filter(function (d) { return !d.disabled; })[0];
    var day = useControlled(p.day, firstDay ? firstDay.id : undefined, p.onDayChange);
    var slot = useControlled(p.value, p.defaultValue, p.onChange);
    return h('div', { className: cx('em-slots', p.className) },
      days.length ? h('div', { className: 'em-days', role: 'group', 'aria-label': 'Дата приёма' },
        days.map(function (d) {
          return h('button', { key: d.id, type: 'button', className: 'em-day', disabled: d.disabled, 'aria-pressed': day[0] === d.id, onClick: function () { day[1](d.id); }, 'aria-label': d.label },
            h('span', { className: 'em-day__wd' }, d.weekday), h('span', { className: 'em-day__num' }, d.date));
        })) : null,
      (p.groups || []).map(function (g) {
        return h('div', { key: g.label, className: 'em-slots__group' },
          h('div', { className: 'em-slots__label' }, g.label),
          h('div', { className: 'em-slots__grid' }, g.slots.map(function (t) {
            var time = t.time || t;
            return h('button', { key: time, type: 'button', className: 'em-slot', disabled: !!t.busy, 'aria-pressed': slot[0] === time, onClick: function () { slot[1](time); } }, time);
          })));
      }));
  }

  /* ---------- PriceList ---------- */
  function PriceList(p) {
    return h('section', { className: cx('em-card', 'em-prices', p.className) },
      h('div', { className: 'em-prices__head' },
        h('h3', { className: 'em-prices__title' }, p.title),
        p.onMore ? h(Button, { variant: 'ghost', size: 'sm', onClick: p.onMore }, p.moreLabel || 'Все цены') : null),
      (p.items || []).map(function (it, i) {
        return h('div', { key: i, className: 'em-prices__row' },
          h('span', { className: 'em-prices__name' }, it.name),
          h('span', { className: 'em-prices__val' },
            h('span', { className: cx('em-price', it.oldPrice != null && 'em-price--sale') }, money(it.price)),
            it.oldPrice != null ? h('span', { className: 'em-old-price' }, money(it.oldPrice)) : null));
      }));
  }

  /* ---------- PaymentMethods ---------- */
  function PaymentMethods(p) {
    var opts = p.options || [];
    var first = opts.filter(function (o) { return !o.disabled; })[0];
    var s = useControlled(p.value, p.defaultValue !== undefined ? p.defaultValue : (first && first.id), p.onChange);
    var name = p.name || 'em-pay';
    return h('div', { className: cx('em-card', 'em-pay', p.className), role: 'radiogroup', 'aria-label': p.label || 'Способ оплаты' },
      opts.map(function (o) {
        return h('label', { key: o.id, className: cx('em-pay__opt', o.disabled && 'em-pay__opt--disabled') },
          h('input', { type: 'radio', name: name, className: 'em-pay__native', checked: s[0] === o.id, disabled: o.disabled, onChange: function () { s[1](o.id); } }),
          h('span', { className: 'em-pay__tile', 'aria-hidden': true }, h(Icon, { name: o.icon || 'wallet', size: 22 })),
          h('span', { className: 'em-pay__text' }, h('span', { className: 'em-pay__title' }, o.title), o.subtitle ? h('span', { className: 'em-pay__sub' }, o.subtitle) : null),
          h('span', { className: 'em-pay__radio', 'aria-hidden': true }));
      }));
  }

  /* ---------- BookingSummary ---------- */
  function SumRow(icon, label, value) {
    if (!value) return null;
    return h('div', { className: 'em-sum__row', key: label },
      h('span', { className: 'em-sum__ico', 'aria-hidden': true }, h(Icon, { name: icon, size: 20 })),
      h('div', null, h('div', { className: 'em-sum__label' }, label), h('div', { className: 'em-sum__value' }, value)));
  }
  function BookingSummary(p) {
    var d = p.doctor || {};
    return h('section', { className: cx('em-card', 'em-sum', p.className) },
      d.name ? h('div', { className: 'em-sum__doc' },
        h(Avatar, { name: d.name, src: d.photo, size: 56, zoom: 2, focus: '50% 38%' }),
        h('div', { style: { minWidth: 0 } }, h('div', { className: 'em-sum__value' }, d.name), h('div', { className: 'em-sum__label' }, d.specialty))) : null,
      h('hr', { className: 'em-divider' }),
      h('div', { className: 'em-sum__rows' },
        SumRow('calendar', 'Время, дата', p.when),
        SumRow('pin', 'Филиал', p.branch),
        SumRow('stethoscope', 'Услуга', p.service),
        SumRow('wallet', 'Оплата', p.payment),
        SumRow('user', 'Пациент', p.patient)),
      p.total != null ? h('hr', { className: 'em-divider' }) : null,
      p.total != null ? h('div', { className: 'em-sum__total' },
        p.price != null ? h('div', { className: 'em-sum__line' }, h('span', null, 'Стоимость приёма'), h('span', null, money(p.price))) : null,
        p.discount ? h('div', { className: 'em-sum__line em-sum__line--save' }, h('span', null, p.discount.label), h('span', null, '−' + money(p.discount.amount))) : null,
        p.bonus ? h('div', { className: 'em-sum__line em-sum__line--bonus' }, h('span', null, h(Icon, { name: 'gift', size: 15, style: { display: 'inline-block', verticalAlign: '-2px', marginRight: '6px' } }), p.bonus.label), h('span', null, '+' + money(p.bonus.amount))) : null,
        h('div', { className: 'em-sum__grand' }, h('span', { className: 'em-sum__grand-label' }, 'К оплате'), h('span', { className: 'em-sum__grand-val' }, money(p.total)))) : null,
      p.onConfirm || p.onCancel ? h('div', { className: 'em-sum__actions' },
        p.onConfirm ? h(Button, { variant: 'primary', block: true, onClick: p.onConfirm, loading: p.loading }, p.confirmLabel || 'Подтвердить запись') : null,
        p.onCancel ? h(Button, { variant: 'danger', block: true, onClick: p.onCancel }, 'Отменить') : null) : null);
  }

  /* ---------- AppointmentCard ---------- */
  var APPT_STATUS = {
    upcoming: { tone: 'success', label: 'Предстоит', icon: 'check' },
    unpaid: { tone: 'warning', label: 'Ожидает оплаты', icon: 'wallet' },
    done: { tone: 'neutral', label: 'Завершён', icon: 'check' },
    cancelled: { tone: 'danger', label: 'Отменён', icon: 'close' }
  };
  function AppointmentCard(p) {
    var status = p.status || 'upcoming';
    var st = APPT_STATUS[status];
    var actions;
    if (p.actions !== undefined) actions = p.actions;
    else if (status === 'upcoming') actions = [h(Button, { key: 'm', variant: 'secondary', size: 'sm', icon: 'calendar', onClick: p.onReschedule }, 'Перенести'), h(Button, { key: 'c', variant: 'danger', size: 'sm', onClick: p.onCancel }, 'Отменить')];
    else if (status === 'unpaid') actions = [h(Button, { key: 'p', variant: 'primary', size: 'sm', icon: 'wallet', onClick: p.onPay }, 'Оплатить ' + money(p.price)), h(Button, { key: 'c', variant: 'danger', size: 'sm', onClick: p.onCancel }, 'Отменить')];
    else if (status === 'done') actions = [h(Button, { key: 'r', variant: 'secondary', size: 'sm', icon: 'file', onClick: p.onReport }, 'Заключение'), h(Button, { key: 'a', variant: 'ghost', size: 'sm', onClick: p.onRepeat }, 'Записаться снова')];
    else actions = [h(Button, { key: 'a', variant: 'secondary', size: 'sm', onClick: p.onRepeat }, 'Записаться снова')];
    return h('article', { className: cx('em-card', 'em-appt', 'em-appt--' + status, p.className) },
      h('div', { className: 'em-appt__head' },
        h('div', { className: 'em-appt__date', 'aria-hidden': true }, h('span', { className: 'em-appt__day' }, p.day), h('span', { className: 'em-appt__mon' }, p.month)),
        h('div', { className: 'em-appt__who' },
          h('h3', { className: 'em-doc__name' }, p.doctor),
          h('p', { className: 'em-doc__spec' }, p.specialty)),
        h(Badge, { tone: st.tone, icon: st.icon }, st.label)),
      p.time || p.branch || p.online ? h('div', { className: 'em-appt__place' },
        p.photo ? h('img', { className: 'em-appt__thumb', src: p.photo, alt: '' }) : null,
        h('div', { className: 'em-appt__meta' },
          p.time ? h('div', { className: 'em-appt__meta-row' }, h(Icon, { name: 'clock', size: 17 }), p.time) : null,
          p.branch ? h('div', { className: 'em-appt__meta-row' }, h(Icon, { name: 'pin', size: 17 }), p.branch) : null,
          p.online ? h('div', { className: 'em-appt__meta-row' }, h(Icon, { name: 'video', size: 17 }), 'Онлайн-консультация') : null),
        p.room ? h(Wayfinding, { label: p.room }) : null) : null,
      actions && actions.length ? h('div', { className: 'em-appt__actions' }, actions) : null);
  }

  /* ---------- VisitPass: the visit day, with the clinic photo and its signs ---------- */
  function VisitPass(p) {
    var d = p.doctor || {};
    return h('article', { className: cx('em-pass', p.className) },
      h('div', { className: 'em-pass__media' },
        p.photo ? h('img', { src: p.photo, alt: '' }) : null,
        p.label ? h('span', { className: 'em-pass__chip' }, h(Badge, { tone: 'glass', dot: true }, p.label)) : null,
        h('div', { className: 'em-pass__where' },
          h('span', { className: 'em-pass__where-label' }, p.branchLabel || 'Филиал'),
          h('span', { className: 'em-pass__where-addr' }, p.branch))),
      h('div', { className: 'em-pass__body' },
        h('div', { className: 'em-pass__time' },
          h('span', { className: 'em-pass__clock' }, p.time),
          h('span', { className: 'em-pass__date' }, p.date)),
        d.name ? h('div', { className: 'em-pass__doc' },
          h(Avatar, { name: d.name, src: d.photo, size: 48, zoom: 2, focus: '50% 38%' }),
          h('div', { style: { minWidth: 0 } }, h('div', { className: 'em-doc__name', style: { fontSize: '15px', lineHeight: '20px' } }, d.name), h('div', { className: 'em-doc__spec' }, d.specialty))) : null,
        p.route ? h(Wayfinding, { steps: p.route }) : null,
        p.hint ? h('div', { className: 'em-pass__hint' }, p.hint) : null,
        p.onArrive || p.onCode ? h('div', { className: 'em-pass__actions' },
          p.onArrive ? h(Button, { variant: 'primary', icon: 'check', onClick: p.onArrive }, p.arriveLabel || 'Я в клинике') : null,
          p.onCode ? h(Button, { variant: 'secondary', icon: 'qr', onClick: p.onCode, 'aria-label': 'QR для регистратуры' }) : null) : null));
  }

  /* ---------- DiscountCard ---------- */
  function qrCells(seed) {
    var n = 21, cells = [], x = 0;
    for (var i = 0; i < seed.length; i++) x = (x * 31 + seed.charCodeAt(i)) >>> 0;
    function finder(r, c) {
      var fr = [[0, 0], [0, n - 7], [n - 7, 0]];
      for (var k = 0; k < 3; k++) {
        var rr = r - fr[k][0], cc = c - fr[k][1];
        if (rr >= 0 && rr < 7 && cc >= 0 && cc < 7) return (rr === 0 || rr === 6 || cc === 0 || cc === 6 || (rr >= 2 && rr <= 4 && cc >= 2 && cc <= 4)) ? 1 : 0;
      }
      return -1;
    }
    for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) {
      var f = finder(r, c);
      if (f >= 0) { cells.push(f); continue; }
      x = (x * 1103515245 + 12345) >>> 0;
      cells.push((x >>> 16) & 1);
    }
    return cells;
  }
  function DiscountCard(p) {
    var code = useControlled(p.showCode, false, p.onToggleCode);
    var pr = p.progress;
    return h('div', { className: cx('em-dcard', p.className), role: 'group', 'aria-label': 'Дисконтная карта EMIRMED' },
      h('span', { className: 'em-dcard__bg', 'aria-hidden': true }, h(Rings, { tone: 'glow', count: 3, strokeWidth: 2 })),
      h('div', { className: 'em-dcard__top' },
        h('div', { className: 'em-dcard__seal' },
          h('span', { className: 'em-dcard__mark' }, h(Logo, { variant: 'mark', height: 22 })),
          h('div', null, h('div', { className: 'em-dcard__brand' }, 'EMIRMED'), h('div', { className: 'em-dcard__tier' }, p.tier || 'Карта пациента'))),
        h(Button, { variant: 'inverse', size: 'sm', icon: 'qr', onClick: function () { code[1](true); } }, 'QR')),
      h('div', { className: 'em-dcard__mid' },
        h('div', null,
          h('div', { className: 'em-dcard__pct' }, (p.discount != null ? p.discount : 10) + '%'),
          h('div', { className: 'em-dcard__pct-label' }, p.discountLabel || 'скидка на приёмы и анализы')),
        p.bonus != null ? h('div', { className: 'em-dcard__bonus' },
          h('div', { className: 'em-dcard__bonus-val' }, money(p.bonus)),
          h('div', { className: 'em-dcard__bonus-label' }, 'бонусами')) : null),
      pr ? h('div', { className: 'em-dcard__progress' },
        h('div', { className: 'em-dcard__track', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round((pr.value || 0) * 100), 'aria-label': pr.label },
          h('div', { className: 'em-dcard__fill', style: { width: Math.round((pr.value || 0) * 100) + '%' } })),
        h('div', { className: 'em-dcard__bonus-label' }, pr.label)) : null,
      h('div', { className: 'em-dcard__bottom' },
        h('div', { className: 'em-dcard__holder' }, p.holder),
        h('div', { className: 'em-dcard__num' }, p.number)),
      code[0] ? h('div', { className: 'em-dcard__code' },
        h('div', { className: 'em-dcard__qr', 'aria-label': 'QR-код карты', role: 'img' }, qrCells(String(p.number || 'emirmed')).map(function (on, i) { return h('i', { key: i, className: on ? 'on' : undefined }); })),
        h('div', { className: 'em-dcard__code-text' },
          h(Wayfinding, { label: 'Регистратура' }),
          h('div', { className: 'em-prices__title', style: { marginTop: '6px' } }, p.holder),
          h('div', { className: 'em-num', style: { font: '500 15px/22px var(--font-sans)', color: 'var(--ink-2)', letterSpacing: '.06em' } }, p.number),
          h(Button, { variant: 'ghost', size: 'sm', icon: 'close', onClick: function () { code[1](false); }, style: { alignSelf: 'flex-start', paddingLeft: 0 } }, 'Скрыть'))) : null);
  }

  /* ---------- PromoCard ---------- */
  function PromoCard(p) {
    var variant = p.variant || 'banner';
    if (variant === 'news') {
      return h('article', { className: cx('em-promo', 'em-promo--news', p.className) },
        h('div', { className: 'em-promo__media' },
          p.image ? h('img', { src: p.image, alt: '' }) : null,
          p.badge ? h('span', { className: 'em-promo__corner' }, h(Badge, { tone: p.badgeTone || 'glass', size: 'lg' }, p.badge)) : null),
        h('div', { className: 'em-promo__body' },
          p.date ? h('span', { className: 'em-promo__date' }, p.date) : null,
          h('h3', { className: 'em-doc__name' }, p.title),
          p.text ? h('p', { className: 'em-promo__text em-promo__clamp' }, p.text) : null));
    }
    var deep = p.tone === 'deep';
    return h('article', { className: cx('em-promo', 'em-promo--banner', deep && 'em-promo--deep', p.className) },
      deep && !p.image ? h(Rings, { tone: 'glow', className: 'em-promo__rings', strokeWidth: 2 }) : null,
      h('div', { className: 'em-promo__content' },
        p.badge ? h(Badge, { tone: deep ? 'glass' : 'promo', icon: 'percent' }, p.badge) : null,
        p.discount ? h('div', { className: 'em-promo__pct' }, p.discount) : null,
        h('h3', { className: 'em-promo__title' }, p.title),
        p.text ? h('p', { className: 'em-promo__text' }, p.text) : null,
        p.cta ? h('div', { className: 'em-promo__cta' }, h(Button, { variant: deep ? 'inverse' : 'primary', size: 'sm', iconRight: 'arrow-right', onClick: p.onClick }, p.cta)) : null),
      p.image ? h('img', { className: 'em-promo__img', src: p.image, alt: '' }) : null);
  }

  /* ---------- BranchCard ---------- */
  function BranchCard(p) {
    var row = p.layout === 'row';
    return h('article', { className: cx('em-card', 'em-branch', row && 'em-branch--row', p.className) },
      h('div', { className: 'em-branch__media' },
        p.photo ? h('img', { src: p.photo, alt: '' }) : null,
        !row && p.open24 ? h('span', { className: 'em-branch__badge' }, h(Badge, { tone: 'glass', dot: true }, 'Открыто 24/7')) : null),
      h('div', { className: 'em-branch__body' },
        p.city ? h('span', { className: 'em-branch__city' }, p.city) : null,
        h('h3', { className: 'em-branch__addr' }, p.address),
        h('div', { className: 'em-branch__meta' },
          row && p.open24 ? h('span', { style: { color: 'var(--emerald)', fontWeight: 600 } }, '24/7') : null,
          p.distance ? h('span', null, p.distance) : null,
          p.hours ? h('span', null, p.hours) : null),
        !row && (p.onRoute || p.onCall) ? h('div', { className: 'em-branch__actions' },
          p.onRoute ? h(Button, { variant: 'secondary', size: 'md', icon: 'route', onClick: p.onRoute }, 'Маршрут') : null,
          p.onCall ? h(Button, { variant: 'quiet', size: 'md', icon: 'phone', onClick: p.onCall, 'aria-label': 'Позвонить' }) : null) : null),
      row ? h(Icon, { name: 'chevron-right', size: 20, style: { color: 'var(--ink-3)' } }) : null);
  }

  /* ---------- LabResult ---------- */
  var LAB_STATUS = { ready: ['success', 'Готов', 'check'], progress: ['info', 'В работе', 'clock'], attention: ['warning', 'Есть отклонения', 'alert'] };
  function LabResult(p) {
    var status = p.status || 'ready';
    var st = LAB_STATUS[status];
    return h('div', { className: cx('em-lab', 'em-lab--' + status, p.className) },
      h('span', { className: 'em-lab__tile', 'aria-hidden': true }, h(Icon, { name: status === 'progress' ? 'flask' : 'file', size: 22 })),
      h('div', { className: 'em-lab__text' },
        h('span', { className: 'em-lab__name' }, p.name),
        h('span', { className: 'em-lab__meta' }, h(Badge, { tone: st[0], icon: st[2] }, st[1]), p.date ? h('span', null, p.date) : null, p.note ? h('span', null, p.note) : null)),
      status !== 'progress' && p.onOpen ? h(Button, { variant: 'ghost', size: 'sm', iconRight: 'chevron-right', onClick: p.onOpen }, 'PDF') : null);
  }

  /* ---------- ListRow ---------- */
  function ListRow(p) {
    var rest = omit(p, ['icon', 'title', 'subtitle', 'value', 'chevron', 'danger', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('em-lrow', p.danger && 'em-lrow--danger', p.className) }),
      p.icon ? h('span', { className: 'em-lrow__tile', 'aria-hidden': true }, h(Icon, { name: p.icon, size: 20 })) : null,
      h('span', { className: 'em-lrow__text' }, h('span', { className: 'em-lrow__title' }, p.title), p.subtitle ? h('span', { className: 'em-lrow__sub' }, p.subtitle) : null),
      p.value ? h('span', { className: 'em-lrow__value' }, p.value) : null,
      p.chevron === false ? null : h(Icon, { name: 'chevron-right', size: 20, className: 'em-lrow__chev' }));
  }

  /* ---------- TopBar ---------- */
  function TopBar(p) {
    if ((p.variant || 'home') === 'nav') {
      return h('header', { className: cx('em-top', p.className) },
        h('button', { type: 'button', className: 'em-top__btn', onClick: p.onBack, 'aria-label': 'Назад' }, h(Icon, { name: 'chevron-left', size: 22 })),
        h('div', { className: 'em-top__title' }, p.title),
        p.action ? h('button', { type: 'button', className: 'em-top__btn', onClick: p.onAction, 'aria-label': p.actionLabel || p.action }, h(Icon, { name: p.action, size: 22 })) : h('span', { className: 'em-top__spacer' }));
    }
    return h('header', { className: cx('em-top', p.className) },
      h('div', { className: 'em-top__greet' },
        h('span', { className: 'em-top__hello' }, p.greeting || 'Добрый день,'),
        h('span', { className: 'em-top__name' }, p.name)),
      p.city ? h('button', { type: 'button', className: 'em-top__city', onClick: p.onCity }, h(Icon, { name: 'pin', size: 16 }), p.city, h(Icon, { name: 'chevron-down', size: 14, strokeWidth: 2 })) : null,
      h('button', { type: 'button', className: 'em-top__btn', onClick: p.onBell, 'aria-label': 'Уведомления' + (p.unread ? ', есть новые' : '') }, h(Icon, { name: 'bell', size: 22 }), p.unread ? h('span', { className: 'em-top__dot' }) : null));
  }

  /* ---------- TabBar ---------- */
  var TABS = [
    { id: 'home', icon: 'home', label: 'Главная' },
    { id: 'visits', icon: 'calendar', label: 'Визиты' },
    { id: 'book', icon: 'plus', label: 'Запись', fab: true },
    { id: 'health', icon: 'heart', label: 'Здоровье' },
    { id: 'profile', icon: 'user', label: 'Профиль' }
  ];
  function TabBar(p) {
    var s = useControlled(p.value, p.defaultValue || 'home', p.onChange);
    return h('nav', { className: cx('em-tabbar', p.className), 'aria-label': 'Основная навигация' },
      (p.items || TABS).map(function (t) {
        if (t.fab) {
          return h('button', { key: t.id, type: 'button', className: 'em-tab', onClick: function () { if (p.onBook) p.onBook(); }, 'aria-label': t.label },
            h('span', { className: 'em-tab__fab' }, h(Icon, { name: t.icon, size: 26, strokeWidth: 2.2 })));
        }
        var on = s[0] === t.id;
        return h('button', { key: t.id, type: 'button', className: 'em-tab', 'aria-current': on ? 'page' : undefined, onClick: function () { s[1](t.id); } },
          h('span', { className: 'em-tab__ico' }, h(Icon, { name: t.icon, size: 22, strokeWidth: on ? 2 : 1.6 })), t.label);
      }));
  }

  /* ---------- Sheet ---------- */
  function Sheet(p) {
    var panel = h('div', { className: cx('em-sheet', p.className), role: 'dialog', 'aria-modal': p.overlay ? true : undefined, 'aria-label': p.title },
      h('span', { className: 'em-sheet__grab', 'aria-hidden': true }),
      p.steps ? h('div', { className: 'em-sheet__steps', 'aria-label': 'Шаг ' + p.step + ' из ' + p.steps }, Array.apply(null, Array(p.steps)).map(function (_, i) { return h('span', { key: i, className: cx('em-sheet__step', i < (p.step || 0) && 'em-sheet__step--done') }); })) : null,
      h('div', { className: 'em-sheet__head' },
        h('h2', { className: 'em-sheet__title' }, p.title),
        p.onClose ? h('button', { type: 'button', className: 'em-sheet__close', onClick: p.onClose, 'aria-label': 'Закрыть' }, h(Icon, { name: 'close', size: 20 })) : null),
      p.children,
      p.footer ? h('div', { className: 'em-sheet__foot' }, p.footer) : null);
    return p.overlay ? h('div', { className: 'em-sheet-wrap' }, panel) : panel;
  }

  /* ---------- Stories: round stories, as in Instagram ---------- */
  function Stories(p) {
    return h('div', { className: cx('em-stories', p.className), role: 'list', 'aria-label': p.label || 'Сторис' },
      (p.items || []).map(function (s) {
        return h('button', { key: s.id || s.label, type: 'button', role: 'listitem', className: cx('em-story', s.seen && 'em-story--seen'), onClick: s.onClick },
          h('span', { className: 'em-story__ring' },
            h('span', { className: cx('em-story__pic', s.tone && 'em-story__pic--' + s.tone) },
              s.image ? h('img', { src: s.image, alt: '', style: s.zoom ? { transform: 'scale(' + s.zoom + ')', transformOrigin: s.focus || '50% 38%' } : (s.focus ? { objectPosition: s.focus } : undefined) }) : h(Icon, { name: s.icon || 'heart', size: 28, strokeWidth: 1.8 }))),
          s.badge ? h('span', { className: 'em-story__badge' }, s.badge) : null,
          h('span', { className: 'em-story__label' }, s.label));
      }));
  }

  /* ---------- StoryViewer: a full-screen story ---------- */
  function StoryViewer(p) {
    var segs = [];
    for (var i = 0; i < (p.segments || 4); i++) {
      var w = i < (p.active || 0) ? 100 : i === (p.active || 0) ? Math.round((p.progress != null ? p.progress : 0.5) * 100) : 0;
      segs.push(h('span', { key: i, className: 'em-sv__seg' }, h('i', { style: { width: w + '%' } })));
    }
    return h('div', { className: cx('em-sv', p.className) },
      p.image ? h('img', { className: 'em-sv__img', src: p.image, alt: '' }) : null,
      h('div', { className: 'em-sv__shade' }),
      h('div', { className: 'em-sv__top' },
        h('div', { className: 'em-sv__segs' }, segs),
        h('div', { className: 'em-sv__head' },
          h('span', { className: 'em-sv__avatar' }, h(Logo, { variant: 'mark', height: 18 })),
          h('span', { className: 'em-sv__who' }, h('b', null, p.author || 'EMIRMED'), h('span', null, p.meta)),
          h('button', { type: 'button', className: 'em-sv__close', onClick: p.onClose, 'aria-label': 'Закрыть' }, h(Icon, { name: 'close', size: 24, strokeWidth: 2 })))),
      h('div', { className: 'em-sv__body' },
        p.badge ? h(Badge, { tone: p.badgeTone || 'glass', size: 'lg', icon: p.badgeIcon || 'info' }, p.badge) : null,
        h('h2', { className: 'em-sv__title' }, p.title),
        p.steps ? h('ol', { className: 'em-sv__steps' }, p.steps.map(function (s, i) { return h('li', { key: i }, h('span', null, i + 1), s); })) : null,
        p.text ? h('p', { className: 'em-sv__text' }, p.text) : null,
        p.bonus ? h('div', { className: 'em-sv__bonus' }, h(Icon, { name: 'gift', size: 18 }), p.bonus) : null,
        p.cta ? h(Button, { variant: 'inverse', block: true, onClick: p.onCta, iconRight: 'arrow-right' }, p.cta) : null));
  }

  /* ---------- OfferCard: an analysis or a procedure with price and bonus ---------- */
  function OfferCard(p) {
    var layout = p.layout || 'row';
    var media = p.image
      ? h('span', { className: 'em-offer__media' }, h('img', { src: p.image, alt: '' }))
      : h('span', { className: cx('em-offer__media', 'em-offer__media--' + (p.tone || 'olive')) }, h(Icon, { name: p.icon || 'flask', size: layout === 'card' ? 34 : 24 }));
    var add = h('button', { type: 'button', className: 'em-offer__add', onClick: p.onAdd, 'aria-label': (p.addLabel || 'Записаться') + ': ' + p.name }, h(Icon, { name: p.added ? 'check' : 'plus', size: 20, strokeWidth: 2.2 }));
    return h('article', { className: cx('em-card', 'em-offer', 'em-offer--' + layout, p.className) },
      media,
      p.sale && layout === 'card' ? h('span', { className: 'em-offer__flag' }, h(Badge, { tone: 'promo' }, p.sale)) : null,
      h('div', { className: 'em-offer__body' },
        h('h3', { className: 'em-offer__name' }, p.name),
        p.meta ? h('div', { className: 'em-offer__meta' }, p.meta) : null,
        h('div', { className: 'em-offer__foot' },
          h('div', { className: 'em-offer__prices' },
            h('span', { className: cx('em-price', p.oldPrice != null && 'em-price--sale') }, (p.priceFrom ? 'от ' : '') + money(p.price)),
            p.oldPrice != null ? h('span', { className: 'em-old-price' }, money(p.oldPrice)) : null,
            p.sale && layout === 'row' ? h(Badge, { tone: 'promo' }, p.sale) : null,
            p.bonus ? h(Badge, { tone: 'bonus' }, p.bonus) : null),
          layout === 'card' ? add : null)),
      layout === 'row' ? add : null);
  }

  /* ---------- BonusCard: bonus balance strip ---------- */
  function BonusCard(p) {
    return h('button', { type: 'button', className: cx('em-bonus', p.className), onClick: p.onClick },
      h(Rings, { tone: 'glow', count: 3, strokeWidth: 1.6, className: 'em-bonus__rings' }),
      h('span', { className: 'em-bonus__ico', 'aria-hidden': true }, h(Icon, { name: 'gift', size: 22, strokeWidth: 1.8 })),
      h('span', { className: 'em-bonus__text' },
        h('span', { className: 'em-bonus__amount' }, money(p.amount), h('span', { className: 'em-bonus__unit' }, p.label || ' бонусов')),
        p.text ? h('span', { className: 'em-bonus__sub' }, p.text) : null),
      h(Icon, { name: 'chevron-right', size: 22, className: 'em-bonus__chev' }));
  }

  /* ---------- AI assistant: chat bubble, composer, answer card ---------- */
  function ChatBubble(p) {
    var me = p.from === 'me';
    return h('div', { className: cx('em-msg', me ? 'em-msg--me' : 'em-msg--ai', p.className) },
      me ? null : p.person
        ? h('span', { className: 'em-msg__ava em-msg__ava--person', 'aria-hidden': true }, p.person)
        : h('span', { className: 'em-msg__ava', 'aria-hidden': true }, h(Icon, { name: 'sparkle', size: 16, strokeWidth: 1.8 })),
      h('div', { className: 'em-msg__col' },
        h('div', { className: 'em-msg__bubble' }, p.children),
        p.actions ? h('div', { className: 'em-msg__actions' }, p.actions) : null,
        p.meta ? h('div', { className: 'em-msg__meta' }, p.meta) : null));
  }
  function AiComposer(p) {
    return h('form', { className: cx('em-compose', p.className), onSubmit: function (e) { e.preventDefault(); if (p.onSend) p.onSend(e.target.elements.m.value); } },
      h('input', { className: 'em-compose__input', name: 'm', placeholder: p.placeholder || 'Спросите на русском или қазақша', 'aria-label': 'Сообщение помощнику', defaultValue: p.defaultValue }),
      h('button', { type: 'button', className: 'em-compose__mic', onClick: p.onVoice, 'aria-label': 'Голосом' }, h(Icon, { name: 'mic', size: 20 })),
      h('button', { type: 'submit', className: 'em-compose__send', 'aria-label': 'Отправить' }, h(Icon, { name: 'send', size: 20, strokeWidth: 1.9 })));
  }
  function AiCard(p) {
    return h('section', { className: cx('em-card', 'em-ai', p.className) },
      h('div', { className: 'em-ai__head' }, h('span', { className: 'em-ai__badge' }, h(Icon, { name: 'sparkle', size: 15, strokeWidth: 1.8 }), p.label || 'ИИ-помощник'), p.aside ? h('span', { className: 'em-ai__aside' }, p.aside) : null),
      p.title ? h('h3', { className: 'em-ai__title' }, p.title) : null,
      p.children,
      p.note !== false ? h('div', { className: 'em-ai__note' }, h(Icon, { name: 'shield', size: 15 }), p.note || 'Это подсказка, а не диагноз. Решение принимает врач.') : null);
  }

  /* ---------- LabValue: one lab result with its reference range ---------- */
  function LabValue(p) {
    var lo = p.min - (p.max - p.min) * 0.6, hi = p.max + (p.max - p.min) * 0.6;
    var pos = Math.max(3, Math.min(97, (p.value - lo) / (hi - lo) * 100));
    var st = p.value < p.min ? 'low' : p.value > p.max ? 'high' : 'ok';
    var zoneL = (p.min - lo) / (hi - lo) * 100, zoneW = (p.max - p.min) / (hi - lo) * 100;
    var label = { ok: 'В норме', low: 'Ниже нормы', high: 'Выше нормы' }[st];
    return h('div', { className: cx('em-lv', 'em-lv--' + st, p.className) },
      h('div', { className: 'em-lv__top' },
        h('span', { className: 'em-lv__name' }, p.name),
        h('span', { className: 'em-lv__val' }, String(p.value).replace('.', ','), h('small', null, ' ' + (p.unit || '')))),
      h('div', { className: 'em-lv__bar', role: 'img', 'aria-label': p.name + ': ' + p.value + ' ' + (p.unit || '') + ', норма ' + p.min + '–' + p.max + ', ' + label },
        h('span', { className: 'em-lv__zone', style: { left: zoneL + '%', width: zoneW + '%' } }),
        h('span', { className: 'em-lv__dot', style: { left: pos + '%' } })),
      h('div', { className: 'em-lv__foot' },
        h('span', null, 'Норма ' + String(p.min).replace('.', ',') + '–' + String(p.max).replace('.', ',')),
        h(Badge, { tone: st === 'ok' ? 'success' : 'warning', icon: st === 'ok' ? 'check' : 'alert' }, label)),
      p.hint ? h('div', { className: 'em-lv__hint' }, p.hint) : null);
  }

  /* ---------- QueueStatus: live queue in the clinic ---------- */
  function QueueStatus(p) {
    var ahead = p.ahead || 0, dots = [];
    for (var i = 0; i < Math.min(ahead, 5); i++) dots.push(h('span', { key: i, className: 'em-q__dot' }, h(Icon, { name: 'user', size: 16, strokeWidth: 1.8 })));
    dots.push(h('span', { key: 'you', className: 'em-q__dot em-q__dot--you' }, 'Вы'));
    return h('section', { className: cx('em-card', 'em-q', p.className) },
      h('div', { className: 'em-q__head' }, h('span', { className: 'em-q__live' }, h('i'), 'Живая очередь'), p.room ? h(Wayfinding, { label: p.room }) : null),
      h('div', { className: 'em-q__main' },
        h('div', null, h('div', { className: 'em-q__big' }, ahead === 0 ? 'Вы следующий' : 'Перед вами ' + ahead), h('div', { className: 'em-q__sub' }, p.doctor)),
        h('div', { className: 'em-q__eta' }, h('b', null, '≈ ' + p.minutes), h('span', null, 'минут'))),
      h('div', { className: 'em-q__dots', 'aria-hidden': true }, dots),
      p.delay ? h('div', { className: 'em-q__delay' }, h(Icon, { name: 'clock', size: 18 }), h('span', null, p.delay)) : null,
      p.actions ? h('div', { className: 'em-q__actions' }, p.actions) : null);
  }

  /* ---------- FeedbackPrompt: rate the visit, say what went wrong ---------- */
  var FB_REASONS = ['Долго ждал', 'Отношение персонала', 'Цена и счёт', 'Врач и лечение', 'Документы и результаты', 'Регистратура и касса', 'Чистота', 'Другое'];
  function FeedbackPrompt(p) {
    var r = useControlled(p.rating, p.defaultRating || 0, p.onRate);
    var sel = useControlled(p.reasons, p.defaultReasons || [], p.onReasons);
    var stars = [];
    for (var i = 1; i <= 5; i++) {
      (function (n) {
        stars.push(h('button', { key: n, type: 'button', className: cx('em-fb__star', n <= r[0] && 'em-fb__star--on'), onClick: function () { r[1](n); }, 'aria-label': n + ' из 5' }, h(Icon, { name: 'star', size: 34, filled: n <= r[0], strokeWidth: 1.4 })));
      })(i);
    }
    var low = r[0] > 0 && r[0] <= 3;
    return h('section', { className: cx('em-card', 'em-fb', p.className) },
      p.who ? h('div', { className: 'em-fb__who' }, h(Avatar, { name: p.who.name, src: p.who.photo, size: 44, zoom: 2, focus: '50% 38%' }), h('div', null, h('div', { className: 'em-doc__name', style: { fontSize: '15px', lineHeight: '20px' } }, p.who.name), h('div', { className: 'em-doc__spec' }, p.who.meta))) : null,
      h('h3', { className: 'em-fb__title' }, p.title || 'Как прошёл визит?'),
      h('div', { className: 'em-fb__stars', role: 'radiogroup', 'aria-label': 'Оценка' }, stars),
      low ? h('div', { className: 'em-fb__why' },
        h('div', { className: 'em-slots__label' }, 'Что пошло не так?'),
        h('div', { className: 'em-row' }, (p.options || FB_REASONS).map(function (o) {
          var on = sel[0].indexOf(o) >= 0;
          return h(Chip, { key: o, selected: on, onClick: function () { sel[1](on ? sel[0].filter(function (x) { return x !== o; }) : sel[0].concat([o])); } }, o);
        }))) : null,
      low && p.comment ? h('div', { className: 'em-fb__comment' }, p.comment) : null,
      low ? h(Checkbox, { defaultChecked: true }, p.contactLabel || 'Свяжитесь со мной сегодня') : null);
  }

  /* ---------- TicketStatus: «Вас услышали» — complaint tracker ---------- */
  function TicketStatus(p) {
    var o = p.owner || {};
    return h('section', { className: cx('em-card', 'em-tk', p.className) },
      h('div', { className: 'em-tk__head' }, h('span', { className: 'em-tk__num' }, p.number), h(Badge, { tone: p.done ? 'success' : 'info', icon: p.done ? 'check' : 'clock' }, p.status || (p.done ? 'Решено' : 'В работе'))),
      h('h3', { className: 'em-tk__title' }, p.title),
      o.name ? h('div', { className: 'em-tk__owner' },
        h(Avatar, { name: o.name, src: o.photo, size: 44 }),
        h('div', { style: { flex: 1, minWidth: 0 } }, h('div', { className: 'em-sum__value' }, o.name), h('div', { className: 'em-sum__label' }, o.role)),
        p.sla ? h('span', { className: 'em-tk__sla' }, p.sla) : null) : null,
      h('ol', { className: 'em-tk__steps' }, (p.steps || []).map(function (s, i) {
        return h('li', { key: i, className: cx('em-tk__step', s.done && 'em-tk__step--done', s.current && 'em-tk__step--now') },
          h('span', { className: 'em-tk__mark', 'aria-hidden': true }, s.done ? h(Icon, { name: 'check', size: 14, strokeWidth: 2.6 }) : null),
          h('div', null, h('div', { className: 'em-tk__label' }, s.label), s.text ? h('div', { className: 'em-tk__text' }, s.text) : null, s.time ? h('div', { className: 'em-tk__time' }, s.time) : null));
      })),
      p.compensation ? h('div', { className: 'em-tk__comp' }, h(Icon, { name: 'gift', size: 20 }), h('span', null, p.compensation)) : null);
  }

  /* ---------- CostEstimate: price before the visit, consent to extras ---------- */
  function CostEstimate(p) {
    var pr = p.proposal;
    return h('section', { className: cx('em-card', 'em-est', p.className) },
      h('div', { className: 'em-est__head' }, h(Icon, { name: 'receipt', size: 20 }), h('span', null, p.title || 'Смета визита')),
      (p.items || []).map(function (it, i) {
        return h('div', { key: i, className: 'em-est__row' }, h('span', null, it.name), h('span', { className: 'em-num' }, money(it.price)));
      }),
      pr ? h('div', { className: 'em-est__prop' },
        h('div', { className: 'em-est__prop-top' }, h(Badge, { tone: 'info', icon: 'stethoscope' }, 'Врач предлагает добавить'), h('span', { className: 'em-price' }, '+' + money(pr.price))),
        h('div', { className: 'em-doc__name', style: { fontSize: '16px' } }, pr.name),
        pr.why ? h('div', { className: 'em-est__why' }, h(Icon, { name: 'sparkle', size: 16, strokeWidth: 1.8 }), h('span', null, pr.why)) : null,
        h('div', { className: 'em-est__btns' },
          h(Button, { variant: 'primary', size: 'md', onClick: pr.onAccept }, 'Согласиться'),
          h(Button, { variant: 'secondary', size: 'md', onClick: pr.onDiscuss }, 'Обсудить с врачом'))) : null,
      h('div', { className: 'em-est__total' }, h('span', null, p.totalLabel || 'Итого сейчас'), h('b', { className: 'em-num' }, money(p.total))),
      p.guarantee ? h('div', { className: 'em-est__guar' }, h(Icon, { name: 'shield', size: 16 }), p.guarantee) : null);
  }

  /* ---------- HelpPrompt: «Что беспокоит?» — the AI entry on the home screen ---------- */
  function HelpPrompt(p) {
    return h('section', { className: cx('em-card', 'em-help', p.className) },
      h('div', { className: 'em-help__head' },
        h('span', { className: 'em-msg__ava', style: { width: '40px', height: '40px', margin: 0 } }, h(Icon, { name: 'sparkle', size: 20, strokeWidth: 1.8 })),
        h('div', { style: { minWidth: 0 } }, h('div', { className: 'em-help__title' }, p.title || 'Что беспокоит?'), h('div', { className: 'em-help__sub' }, p.text || 'Подскажем врача и время · на русском и қазақша'))),
      h('button', { type: 'button', className: 'em-help__input', onClick: p.onAsk },
        h('span', null, p.placeholder || 'Опишите симптомы или задайте вопрос'), h(Icon, { name: 'mic', size: 20 })),
      p.chips ? h('div', { className: 'em-help__chips' }, p.chips.map(function (c) { return h(Chip, { key: c.label || c, icon: c.icon }, c.label || c); })) : null);
  }

  /* ---------- NextStepCard: the next thing to do, with preparation ---------- */
  function NextStepCard(p) {
    return h('section', { className: cx('em-card', 'em-next', p.className) },
      h('div', { className: 'em-next__top' },
        h('div', null, h('div', { className: 'em-next__when' }, p.when), h('div', { className: 'em-next__title' }, p.title)),
        p.badge ? h(Badge, { tone: p.badgeTone || 'info', icon: p.badgeIcon || 'clock' }, p.badge) : null),
      p.place ? h('div', { className: 'em-appt__meta-row' }, h(Icon, { name: 'pin', size: 17 }), p.place) : null,
      p.prep && p.prep.length ? h('div', { className: 'em-next__prep' },
        h('div', { className: 'em-slots__label' }, p.prepTitle || 'Подготовка'),
        p.prep.map(function (it, i) {
          return h('div', { key: i, className: cx('em-next__item', it.done && 'em-next__item--done') },
            h('span', { className: 'em-next__check', 'aria-hidden': true }, it.done ? h(Icon, { name: 'check', size: 14, strokeWidth: 2.6 }) : null),
            h('span', null, it.text));
        })) : null,
      p.actions ? h('div', { className: 'em-next__actions' }, p.actions) : null);
  }

  /* ---------- MedReminder: today's medicines ---------- */
  function MedReminder(p) {
    return h('section', { className: cx('em-card', 'em-med', p.className) },
      p.title || p.course ? h('div', { className: 'em-med__head' }, h('span', { className: 'em-med__title' }, h(Icon, { name: 'pill', size: 18 }), p.title || 'Лекарства сегодня'), p.course ? h('span', { className: 'em-med__course' }, p.course) : null) : null,
      (p.items || []).map(function (m, i) {
        return h('div', { key: i, className: cx('em-med__row', m.taken && 'em-med__row--taken') },
          h('span', { className: 'em-med__time' }, m.time),
          h('div', { className: 'em-med__text' }, h('div', { className: 'em-med__name' }, m.name), m.note ? h('div', { className: 'em-med__note' }, m.note) : null),
          h('button', { type: 'button', className: 'em-med__btn', onClick: m.onToggle, 'aria-pressed': !!m.taken, 'aria-label': (m.taken ? 'Принято: ' : 'Отметить приём: ') + m.name },
            m.taken ? h(Icon, { name: 'check', size: 18, strokeWidth: 2.4 }) : 'Принял'));
      }));
  }

  /* ---------- WellbeingCheck: «Как вы себя чувствуете?» after a visit ---------- */
  var WB = [{ id: 'better', label: 'Лучше', icon: 'arrow-up' }, { id: 'same', label: 'Так же', icon: 'minus' }, { id: 'worse', label: 'Хуже', icon: 'chevron-down' }];
  function WellbeingCheck(p) {
    var s = useControlled(p.value, p.defaultValue || null, p.onChange);
    return h('section', { className: cx('em-card', 'em-wb', p.className) },
      p.from ? h('div', { className: 'em-wb__from' }, h(Avatar, { name: p.from.name, src: p.from.photo, size: 36, zoom: p.from.photo ? 2 : 1, focus: '50% 38%' }), h('span', null, p.from.meta)) : null,
      h('h3', { className: 'em-wb__title' }, p.title || 'Как вы себя чувствуете?'),
      h('div', { className: 'em-wb__opts', role: 'radiogroup', 'aria-label': p.title || 'Самочувствие' },
        WB.map(function (o) {
          return h('button', { key: o.id, type: 'button', role: 'radio', 'aria-checked': s[0] === o.id, className: cx('em-wb__opt', 'em-wb__opt--' + o.id, s[0] === o.id && 'em-wb__opt--on'), onClick: function () { s[1](o.id); } },
            h(Icon, { name: o.icon, size: 20, strokeWidth: 2 }), o.label);
        })),
      s[0] && p.children ? h('div', { className: 'em-wb__follow' }, p.children) : null);
  }

  /* ---------- SupportCard: «Мы на связи 24/7» ---------- */
  function SupportCard(p) {
    return h('section', { className: cx('em-card', 'em-sup', p.className) },
      h('div', { className: 'em-sup__top' },
        h('div', { className: 'em-sup__faces', 'aria-hidden': true }, (p.people || ['А', 'Д', 'М']).map(function (n, i) { return h('span', { key: i, className: 'em-sup__face em-sup__face--' + i }, n); }), h('i', { className: 'em-sup__online' })),
        h('div', { style: { minWidth: 0, flex: 1 } }, h('div', { className: 'em-help__title' }, p.title || 'Мы на связи 24/7'), h('div', { className: 'em-help__sub' }, p.text || 'Ответим в чате примерно за 2 минуты'))),
      h('div', { className: 'em-sup__actions' },
        h(Button, { variant: 'primary', size: 'md', icon: 'message', onClick: p.onChat }, p.chatLabel || 'Написать'),
        h(Button, { variant: 'secondary', size: 'md', icon: 'phone', onClick: p.onCall }, p.callLabel || 'Позвонить')));
  }

  /* ---------- Device: iPhone-sized frame (393 × 852) for presenting screens ---------- */
  function SysIcons() {
    return h('svg', { width: 72, height: 13, viewBox: '0 0 72 13', fill: 'currentColor', 'aria-hidden': true },
      h('rect', { x: 0, y: 8, width: 3.2, height: 4, rx: 1 }), h('rect', { x: 4.8, y: 6, width: 3.2, height: 6, rx: 1 }),
      h('rect', { x: 9.6, y: 3.5, width: 3.2, height: 8.5, rx: 1 }), h('rect', { x: 14.4, y: 1, width: 3.2, height: 11, rx: 1 }),
      h('path', { d: 'M30.5 3.2a9.6 9.6 0 0 1 6.6 2.6l1.2-1.3A11.4 11.4 0 0 0 30.5 1.4a11.4 11.4 0 0 0-7.8 3.1l1.2 1.3a9.6 9.6 0 0 1 6.6-2.6zm0 3.6a5.9 5.9 0 0 1 4 1.6l1.2-1.3a7.7 7.7 0 0 0-10.4 0l1.2 1.3a5.9 5.9 0 0 1 4-1.6zm0 3.6c.6 0 1.1.2 1.5.6l-1.5 1.6-1.5-1.6c.4-.4.9-.6 1.5-.6z' }),
      h('rect', { x: 44.5, y: 1, width: 23, height: 11, rx: 3.4, fill: 'none', stroke: 'currentColor', strokeOpacity: 0.4 }),
      h('rect', { x: 46.5, y: 3, width: 17, height: 7, rx: 1.8 }),
      h('path', { d: 'M69 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z', fillOpacity: 0.45 }));
  }
  function Device(p) {
    return h('div', { className: cx('em-device', p.statusLight && 'em-device--light', p.className), style: p.style },
      h('div', { className: 'em-device__screen em-root' },
        h('div', { className: 'em-device__content' }, p.children),
        h('div', { className: 'em-device__status', 'aria-hidden': true }, h('span', null, p.time || '9:41'), h(SysIcons)),
        h('span', { className: 'em-device__island', 'aria-hidden': true }),
        h('span', { className: 'em-device__home', 'aria-hidden': true })));
  }

  var api = {
    Device: Device, Stories: Stories, StoryViewer: StoryViewer, OfferCard: OfferCard, BonusCard: BonusCard,
    ChatBubble: ChatBubble, AiComposer: AiComposer, AiCard: AiCard, LabValue: LabValue, QueueStatus: QueueStatus,
    FeedbackPrompt: FeedbackPrompt, TicketStatus: TicketStatus, CostEstimate: CostEstimate,
    HelpPrompt: HelpPrompt, NextStepCard: NextStepCard, MedReminder: MedReminder, WellbeingCheck: WellbeingCheck, SupportCard: SupportCard,
    Logo: Logo, Icon: Icon, Rings: Rings, Wayfinding: Wayfinding, Button: Button, Badge: Badge, Rating: Rating, Chip: Chip,
    SegmentedControl: SegmentedControl, SearchBar: SearchBar, TextField: TextField, Checkbox: Checkbox, OtpInput: OtpInput,
    Avatar: Avatar, DoctorCard: DoctorCard, ServiceTile: ServiceTile, SlotPicker: SlotPicker, PriceList: PriceList,
    PaymentMethods: PaymentMethods, BookingSummary: BookingSummary, AppointmentCard: AppointmentCard, VisitPass: VisitPass,
    DiscountCard: DiscountCard, PromoCard: PromoCard, BranchCard: BranchCard, LabResult: LabResult, ListRow: ListRow,
    TopBar: TopBar, TabBar: TabBar, Sheet: Sheet,
    iconNames: ICON_NAMES, money: money, formatPhone: formatPhone
  };
  window.EmirMed = Object.assign(window.EmirMed || {}, api);
})();
