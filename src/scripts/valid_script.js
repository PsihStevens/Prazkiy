$(document).ready(function(){
  $('input[placeholder], textarea[placeholder]').placeholder();
  $("input[name=phone]").mask("+3 8(999) 999-99-99");
  $('popup-fancybox').fancybox({padding: 0});
  $('.fancybox-popup').fancybox({
    beforeShow : function() {
      var carName = this.title;
      // this.inner.find('input.carName').attr('value', carName);
      // console.log(carName);
    },
    helpers : {
      title : null
    },
    padding : 0
  });

  var options = {
    delegation: true,
    clearForm: false,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      // console.log('Before Submit callback');
      $.fancybox.close();      
    },
    success: function() {
      console.log('success');
      $.fancybox({href: "#popupThanks", type: 'inline'});
    },
    error: function() {
      console.log('error');
      $.fancybox({href: "#popupError", type: 'inline'});
    }
  }
  
  // $('#rozstrochka').ajaxForm(options);
  // $('#popupRecallForm').ajaxForm(options);
  // $('#Pereglyad').ajaxForm(options);
  // $('#Konsultacia').ajaxForm(options);
  // $('#Excursion').ajaxForm(options);
  // $('#Bronuvanya').ajaxForm(options);
  // $('#downloadPresent').ajaxForm(options);
  // $('#downloadPlan').ajaxForm(options);
});

$("#rozstrochka").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#popupRecallForm").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#Pereglyad").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#Konsultacia").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#Excursion").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#Bronuvanya").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#downloadPresent").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    // email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

$("#downloadPlan").validate({
  rules:{
    name:{required: true, maxlength: 100,},    
    phone:{required: true, minlength: 18, maxlength: 19,},
    // email:{required: true, maxlength: 100,},    
  },
  messages:{
    name:{required: "", maxlength: "",},
    // way:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
    email:{required: "", minlength: "", maxlength: "",},

    
  }
});

