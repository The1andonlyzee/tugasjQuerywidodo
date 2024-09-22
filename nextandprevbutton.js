import { dataJiko } from "./dataJiko.js"; //supaya rapi aja

export function scrollJiko() {
  let index = -1; //krn tombol awal pas load web itu sebenarnya sudah next, spy klo masuk ke jiko, index pas2 nol hehe

  function updateDisplay() {
    $('#title').text(dataJiko[index].member);
    $('#isi').text(dataJiko[index].jikoshoukai);
    $('#next').text(dataJiko[(index + 1) % dataJiko.length].member + "  ->"); 
    
    // harus bgini krn nd dari awal ada button prev
    if ($('#prev').length) {
      $('#prev').text("<-  " + dataJiko[(index - 1 + dataJiko.length) % dataJiko.length].member); 
    }
  }


  $(document).on('click', '#next', function() {
    //button back klo sudah masuk ke jiko
    if ($('#prev').length === 0) {
      $('<button id="prev"></button>').insertBefore('#next');
    }

    index = (index + 1) % dataJiko.length;
    updateDisplay();
  });

  $(document).on('click', '#prev', function() {
    index = (index - 1 + dataJiko.length) % dataJiko.length; 
    updateDisplay();
  });
}
