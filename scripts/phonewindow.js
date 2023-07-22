var s = document.createElement('style');
s.innerHTML='#footer{display:flex;justify-content:center;align-content:center;flex-wrap:wrap;align-items:center;gap:10px;margin-bottom:25px;text-decoration:none!important}#footerimg{width:25px;height:25px}#footertext{color:#fff;font-family:Gilroy;font-weight:600;font-size:25px}';
document.head.appendChild(s);
var f = document.createElement('a');
f.id='footer';
f.href='https://itsfoxdev.github.io';
f.innerHTML='<img id="footerimg" src="https://itsfoxdev.github.io/assets/branding/logo.svg"><span id="footertext">Made by FoxDev</span>';
document.body.appendChild(f);
