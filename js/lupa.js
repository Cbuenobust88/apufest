$(function () {
    $("#img_01").imageLens();
    $("#img_02").imageLens({ lensSize: 200 });
    $("#img_03").imageLens({ imageSrc: "sample01.jpg" });
    $("#img_04").imageLens({ borderSize: 8, borderColor: "#06f" });
});	


(function(){
    var bsa = document.createElement('script');
       bsa.type = 'text/javascript';
       bsa.async = true;
       bsa.src = '//s3.buysellads.com/ac/bsa.js';
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
  })();