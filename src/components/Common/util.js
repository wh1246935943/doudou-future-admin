/** 获取osicon */
let osIcons = {};
const files = require.context('./../../assets/os_icon', false, /\.png$/);

files.keys().forEach(key => {
  osIcons[key.replace(/(\.\/|\.png)/g, '')] = require(`./../../assets/os_icon${key.replace('.', '')}`)
});

export function getOsIcon(os) {
  return osIcons[os||'img_error']
}

export function imgError(e) {
  e.target.src = osIcons.img_error;
}