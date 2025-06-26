/**
 * Mengonversi angka menjadi teks dalam bahasa Indonesia (Terbilang).
 * @param {number} angka Angka yang akan dikonversi.
 * @return {string} Representasi teks dari angka.
 * @customfunction
 */
function TERBILANG(angka) {
  if (typeof angka !== 'number') {
    return 'Input harus berupa angka';
  }

  if (angka === 0) {
    return "Nol Rupiah";
  }

  let negatif = false;
  if (angka < 0) {
    negatif = true;
    angka = Math.abs(angka);
  }

  const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan"];
  const belasan = ["Sepuluh", "Sebelas", "Dua Belas", "Tiga Belas", "Empat Belas", "Lima Belas", "Enam Belas", "Tujuh Belas", "Delapan Belas", "Sembilan Belas"];
  const puluhan = ["", "", "Dua Puluh", "Tiga Puluh", "Empat Puluh", "Lima Puluh", "Enam Puluh", "Tujuh Puluh", "Delapan Puluh", "Sembilan Puluh"];
  const unitPos = ["", "Ribu", "Juta", "Miliar", "Triliun"];

  function convertChunk(num) {
    let tempStr = "";
    const ratus = Math.floor(num / 100);
    const sisaPuluhan = num % 100;

    if (ratus > 0) {
      if (ratus === 1) {
        tempStr += "Seratus";
      } else {
        tempStr += satuan[ratus] + " Ratus";
      }
    }

    if (sisaPuluhan > 0) {
      if (tempStr !== "") {
        tempStr += " ";
      }
      if (sisaPuluhan >= 10 && sisaPuluhan <= 19) {
        tempStr += belasan[sisaPuluhan - 10];
      } else {
        tempStr += puluhan[Math.floor(sisaPuluhan / 10)];
        if (sisaPuluhan % 10 > 0) {
          if (puluhan[Math.floor(sisaPuluhan / 10)] !== "") {
            tempStr += " ";
          }
          tempStr += satuan[sisaPuluhan % 10];
        }
      }
    }
    return tempStr.trim();
  }

  let tempAngka = Math.floor(angka);
  let result = "";
  let unitIndex = 0;

  if (tempAngka === 0) {
    return "Nol"; // Handled at the beginning for "Nol Rupiah"
  }

  while (tempAngka > 0) {
    const chunk = tempAngka % 1000;
    if (chunk > 0) {
      let chunkWords = convertChunk(chunk);
      if (unitIndex > 0) {
        // Special case for "Seribu"
        if (chunk === 1 && unitIndex === 1 && Math.floor(angka / 1000) === 0) { // Ensures only 1000, not 1,001,000
             chunkWords = "Seribu";
        } else if (chunk === 1 && unitIndex === 1 && Math.floor(angka / 1000) === 1) { // 1000, 1001 etc.
             chunkWords = "Seribu";
        } else if (chunk === 1 && unitIndex === 1) { // Hanya untuk 1.000 saja
             chunkWords = "Seribu";
        }
        else {
             chunkWords += " " + unitPos[unitIndex];
        }

      }
      result = chunkWords + (result === "" ? "" : " " + result);
    }
    tempAngka = Math.floor(tempAngka / 1000);
    unitIndex++;
  }

  if (negatif) {
    result = "Minus " + result;
  }

  return result.trim().toUpperCase() + " RUPIAH";
}
