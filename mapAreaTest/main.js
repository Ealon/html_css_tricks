const img = $('img');
const offset = img.offset();
const zoomAvatar = $('#zoomAvatar');
const tooltip = $('#tooltip');

function showTooltip(self) {
  const coords = self.coords.split(',');
  let length = coords.length;
  let centerX = 0;
  let centerY = 0;

  let smallestX = 100000;
  let largestX = 0;
  let smallestY = 100000;
  let largestY = 0;

  for (let index = 0; index < length; index+=2) {
    const coordX = parseInt(coords[index]);
    const coordY = parseInt(coords[index+1]);

    centerX += coordX;
    centerY += coordY;

    if (smallestX > coordX) {
      smallestX = coordX;
    }
    if (smallestY > coordY) {
      smallestY = coordY;
    }
    if (largestX < coordX) {
      largestX = coordX;
    }
    if (largestY < coordY) {
      largestY = coordY;
    }
  }

  length /= 2; // number of coord pairs, i.e. (x, y)
  centerX /= length;
  centerY /= length;

  // centerX = (smallestX + largestX)/2;
  // centerY = (smallestY + largestY)/2;

  const width = largestX - smallestX;
  const height = largestY - smallestY;


  const left = centerX - 100;
  // const zoomAvatar = $('#zoomAvatar').css({ width, height, left: smallestX, top: offset.top+smallestY });
  zoomAvatar.css({ left, top: offset.top+smallestY-150 });
  tooltip.css({ left: left+75, top: offset.top+smallestY-110, opacity: 1 });
  $(`#${self.title}`).css({ opacity: 1 });
  $('#tooltip p').html(self.title);

  // setTimeout(() => {
  //   $("#zoomAvatar").click();
  // }, 0);
}


function zoomThis() {
  setTimeout(() => {
    $("#zoomAvatar").click();
  }, 0);
}

onMouseOut = (self) => {
  $(`#${self.title}`).css({ opacity: 0 });
  tooltip.css({ opacity: 0 });
}