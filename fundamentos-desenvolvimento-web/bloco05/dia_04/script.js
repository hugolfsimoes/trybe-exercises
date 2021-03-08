function refreshPage(event) {

  let btnRefresh = document.querySelector('.btn-refresh');
  let backgroundPageColor = document.querySelector('#backGroundColorBox');
  let textColor = document.querySelector('#textColorBox');
  let fontSize = document.querySelector('#fontSizeBox');
  let lineHeight = document.querySelector('#lineHeightBox');
  let fontFamily = document.querySelector('#fontFamilyBox');
  bodyStyle = document.querySelector('body')


  btnRefresh.addEventListener('click', function (event) {
    bodyStyle.style.backgroundColor = backgroundPageColor.value;
    bodyStyle.style.color = textColor.value;
    bodyStyle.style.fontSize = fontSize.value + 'px';
    bodyStyle.style.lineHeight = lineHeight.value + 'em';
    bodyStyle.style.fontFamily = fontFamily.value;

    backgroundPageColor.value = '';
    textColor.value = '';
    fontSize.value = '';
    lineHeight.value = '';
    fontFamily.value = '';
  });

}

refreshPage();