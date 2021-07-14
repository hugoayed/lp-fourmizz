<template>
    <div id="FORM" >
        <div class="sib-form">
            <div id="sib-form-container" class="sib-form-container custom-form">
                <div id="sib-container" class="sib-container--large sib-container--vertical" >
                <form id="sib-form" method="POST"  action="https://b1d2e1ad.sibforms.com/serve/MUIEAOnFqPZ9_Pvuwd_R8gPi3CM9LEPfs_XxkuxaIIvWmwwidgkC0IbJVbxog9TnDlN1nhzAV43UZgC0Hcp5_EApXjtVtDI9SSWDE-6F6O9D8lkx1a11sq0OcJzhEys-89QeHo3KGGGYbhbtZ1BWTFZ_I9wa3o7evDKt2YHGDHkCj4jPtzvJiILn3ajmiRy5OLIlbyJ7Pf5Y4TqK" data-type="subscription">
                    <div style="padding: 8px 0;">
                        <div class="sib-input sib-form-block">
                            <div class="form__entry entry_block">
                                <div class="form__label-row ">
                                    <div class="entry__field d-flex">
                                    <input class="input custom-input" type="text" id="EMAIL" name="EMAIL" autocomplete="on" placeholder="Adresse email" data-required="true" required/>
                                    <button class="sib-form-block__button sib-form-block__button-with-loader custom-btn" style="font-size:16px; text-align:right; font-weight:700; font-family:'Inter', sans-serif; color:#FFFFFF; background-color:#22ae5b; border-radius:3px; border-width:0px;" form="sib-form" type="submit">
                                        S'INSCRIRE
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="padding: 8px 0;">
                    <div class="sib-optin sib-form-block" data-required="true">
                        <div class="form__entry entry_mcq">
                        <div class="form__label-row ">
                            <div class="entry__choice">
                            <label style="display: flex;">
                                <input type="checkbox" class="input_replaced custom-checkbox" value="1" id="OPT_IN" name="OPT_IN" required />
                                <span class="checkbox checkbox_tick_positive"></span><span style="font-size:14px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#3C4858; background-color:transparent;"><p>J'accepte de recevoir vos e-mails et confirme avoir pris connaissance de votre politique de confidentialité et mentions légales.</p><span data-required="*" style="display: inline;" class="entry__label entry__label_optin"></span></span> </label>
                            </div>
                        </div>
                        <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
                        </label>
                        </div>
                    </div>
                    </div>
                    <input type="hidden" name="email_address_check" value="" class="input--hidden">
                    <input type="hidden" name="locale" value="fr">
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  .custom-input {
      display: flex;
        padding: 0.375rem 0.75rem;
        border-radius: 10px 0px 0px 10px;
        border: none;
        background-color: #fbfbfb;
        width: 70%;
      font-size: 1.5em;
  }

  .custom-input::placeholder {
      color: black !important;
  }

  .custom-checkbox {
      margin: 0 1em;
  }

  .custom-btn {
      background-color: #96e6b3 !important;
      padding: 0.3em 1em;
      font-size: 1.5em !important;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">

<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';
  window.LOCALE = 'fr';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";

  window.REQUIRED_ERROR_MESSAGE = "Merci de renseigner ce champ. ";

  window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer.";




  window.translation = {
    common: {
      selectedList: '{quantity} liste sélectionnée',
      selectedLists: '{quantity} listes sélectionnées'
    }
  };

</script>
<script src="https://sibforms.com/forms/end-form/build/main.js"></script>