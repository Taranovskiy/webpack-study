import * as $ from 'jquery';
import Post from '@models/Post';
import '@/styles/styles';
import '@/styles/less.less';
import '@/styles/scss.scss';
import WebpackLogo from '@/assets/webpack-logo.png';
import json from '@/assets/json';
import xml from '@/assets/data.xml';
import csv from '@/assets/data.csv';

const post = new Post('Webpack post title', WebpackLogo);

$('pre').addClass('code').html(post.toString(json));

console.log('post.toString() -->', post.toString());
console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);