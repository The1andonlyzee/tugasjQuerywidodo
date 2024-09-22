import $ from 'jquery';
import './style.css'
import { scrollJiko } from './nextandprevbutton.js'
window.$ = $;
window.jQuery = $;


$('#app').html(
  `
  <div class="container">
        <h1 id="title">Apa ya kira kira</h1>
        <h2 id="isi">hint: 48</h2>
        <div class="wrapbutton">
          <button id="next">Hmmmm....</button>
        </div>
      </div>
  `
);

//supaya load ki dlu yg di atas baru dipanggil ini barang
$(document).ready(function() { 
  scrollJiko();
});
