const db = [
  {
    mayora: `Aplikasi ini diperuntukan untuk melakukan pengendalian terhadap karyawan dan visitor Pada PT.Mayora TBK yang memang melakukan tindakan yang tidak sesuai Standar operasional prosedur.
  Aplikasi dibuat menggunakan Framwork Php CodeIgniter versi 3.0,Bootstrup versi 4.0, Dengan DBMS MySql.
  `,
  },
  {
    evoting: `Aplikasi ini gunakan Untuk Voting kepala Desa, Rt, Rw, yang dilakukan secara online. Aplikasi dibuat menggunakan Framwork Php CodeIgniter versi 3.0,Bootstrup versi 4.0, Css, dan JavaScript Dengan DBMS MySql.`,
  },
  {
    quila: `Aplikasi ini gunakan Untuk melakukan Transaksi Penjualan pada toko Sepatu Selain itu juga bisa Melihat data pelanggan serta melakukan laporan harian Apliksi dibuat Framwork Php CodeIgniter versi 3.0,Bootstrup versi 4.0, Css, dan JavaScript Dengan DBMS MySql `,
  },
  {
    adis: `Aplikasi ini gunakan Untuk melakukan Monitoring Planing pembuatan Sample Sepatu Pada PT.Adis Dimension Footwear, Selain itu juga dapat melihat bahan baku yang tersedia saat ini sehingga mempermudah user dalam melakukan planing . Aplikasi dibuat menggunakan Framwork Php CodeIgniter versi 3.0,Bootstrup versi 4.0, Css, dan JavaScript Dengan DBMS MySql`,
  },
  {
    spk: `Aplikasi ini gunakan Untuk Pengambilan keputusan dalam menentukan Sanksi kinerja karyawan yang sifatnya terstruktur dengan beberapa kategori pelanggaran. Aplikasi dibuat menggunakan Framwork Php Laravel versi 7.0,Bootstrup versi 5.0, Css, dan JavaScript Dengan DBMS MySql `,
  },
];
const main = document.querySelector(".main");
const detail = document.querySelectorAll(".detail");
const wraper = document.querySelector(".modal-wrapper");
const boxWrapper = document.querySelector(".box-wrapper");
detail.forEach(function (b) {
  b.addEventListener("click", function () {
    wraper.classList.toggle("open");
    const x = parseInt(b.getAttribute("data-detail"));
    isi(x);
  });
});

const dataBtn = document.querySelector(".detail");
function isi(x) {
  if (x == 0) {
    let textmayora = db[x].mayora;
    main.textContent = textmayora;
  } else if (x == 1) {
    let textEvoting = db[x].evoting;
    main.textContent = textEvoting;
  } else if (x == 2) {
    let textQuila = db[x].quila;
    main.textContent = textQuila;
  } else if (x == 3) {
    let textadis = db[x].adis;
    main.textContent = textadis;
  } else {
    let textspk = db[x].spk;
    main.textContent = textspk;
  }
}

const tutup = document.querySelector("#tutup");
tutup.addEventListener("click", function () {
  wraper.classList.toggle("open");
});
