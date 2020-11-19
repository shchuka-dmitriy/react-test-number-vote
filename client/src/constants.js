const env = process.env.NODE_ENV || 'development';
const serverIP = 'localhost';
const serverPort = env === 'production' ? 3000 : 9633;

export default {
  STATIC_IMAGES_PATH: '/staticImages/',
  BASE_URL: `http://${ serverIP }:${ serverPort }/`,
  HOME_URL: `http://${ serverIP }:3000`,

  BACKGROUND_COLOR: [
    '#B21F00',
    '#C9DE00',
    '#2FDE00',
    '#00A6B4',
    '#6800B4',
    '#0356d2',
    '#02b894',
    '#9d02b8',
    '#888589',
  ],
  HOVER_BACKGROUND_COLOR: [
    '#501800',
    '#4B5000',
    '#175000',
    '#003350',
    '#35014F',
    '#013e9a',
    '#027d64',
    '#640278',
    '#585658',
  ],
};