const cards = $(".card");
const reflectionLayers = cards.find(".reflection-layer");
reflectionLayers.mouseenter(function (e) {
  $(e.currentTarget).css("opacity", 1);
});
reflectionLayers.mouseleave(function (e) {
  $(e.currentTarget).css("opacity", 0);
});
cards.mousemove(function (e) {
  const cardDimensions = {
    width: e.currentTarget.offsetWidth,
    height: e.currentTarget.offsetHeight
  };
  const mousePosition = {
    x: e.pageX - $(e.currentTarget).offset().left,
    y: e.pageY - $(e.currentTarget).offset().top
  };
  const centerPoint = {
    x: cardDimensions.width / 2,
    y: cardDimensions.height / 2
  };
  const RotationValues = {
    rotateX: Math.min(
      ((centerPoint.x - mousePosition.x) / (cardDimensions.width / 2)) * 20,
      20
    ),
    rotateY: Math.min(
      ((mousePosition.y - centerPoint.y) / (cardDimensions.height / 2)) * 20,
      20
    )
  };
  let transformCssValue = `
          perspective(100vw) 
          rotateY(${RotationValues.rotateX}deg) 
          rotateX(${RotationValues.rotateY}deg)
          translateZ(50px)
        `;
  $(e.currentTarget).css("transform", transformCssValue);
});
cards.mouseleave(function (e) {
  // Reset card transform and position
  $(e.currentTarget).css(
    "transform",
    `perspective(100vw)  
           rotateY(0deg) 
           rotateX(0deg) 
           translateZ(0px)`
  );
});
