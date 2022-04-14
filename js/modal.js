const dbMayora = [
  {
    judul: "Aplikasi Laporan Pelanggaran",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Codeigniter Version 3.0", "Bootstrap Version 4.0", "Css", "DataTables", "jquery", "SBAdmin", "Fontawesome", "DBMS MySql"],
  },
  {
    description: "Aplikasi ini diperuntukan untuk melakukan pengendalian terhadap karyawan dan visitor Pada PT.Mayora TBK yang memang melakukan tindakan yang tidak sesuai Standar operasional prosedur",
  },
];
const dbSpk = [
  {
    judul: "Aplikasi Decision Support System",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Laravel Version 7.1", "Bootstrap Version 5.0", "Css", "DataTables", "jquery", "Vanila JavaScrip", "Adminlte", "Fontawesome", "DBMS MySql"],
  },
  {
    description: "Aplikasi ini gunakan Untuk Pengambilan keputusan dalam menentukan Sanksi kinerja karyawan yang sifatnya terstruktur dengan beberapa kategori pelanggaran dengan menggunakan metode Simple Additive Weighting (SAW)",
  },
];
const dbEvoting = [
  {
    judul: "Aplikasi Evoting(Pemilihan)",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Codeigniter Version 3.0", "Bootstrap Version 4.0", "Css", "DataTables", "jquery", "Vanila JavaScrip", "Adminlte", "Fontawesome", "DBMS MySql"],
  },
  {
    description: "Aplikasi ini gunakan Untuk Voting kepala Desa, Rt, Rw, yang dilakukan secara online",
  },
];
const dbQuila = [
  {
    judul: "Aplikasi Penjulan",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Codeigniter Version 3.0", "Bootstrap Version 4.0", "Css", "DataTables", "jquery", "Vanila JavaScrip", "Adminlte", "Fontawesome", "DBMS MySql"],
  },
  {
    description: "Aplikasi ini gunakan Untuk melakukan Transaksi Penjualan pada toko Sepatu Selain itu juga bisa Melihat data pelanggan serta melakukan laporan harian",
  },
];
const dbPcc = [
  {
    judul: "Aplikasi Monitoring Planing",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Codeigniter Version 3.0", "Bootstrap Version 4.0", "Css", "DataTables", "jquery", "Vanila JavaScrip", "Adminlte", "Fontawesome", "DBMS MySql"],
  },
  {
    description:
      "Aplikasi ini gunakan Untuk melakukan Monitoring Planing pembuatan Sample Sepatu Pada PT.Adis Dimension Footwear, Selain itu juga dapat melihat bahan baku yang tersedia saat ini sehingga mempermudah user dalam melakukan planing",
  },
];
const dbdigantara = [
  {
    judul: "Aplikasi Administrasi Desa Include Rest Api",
  },
  {
    spesifikasi: ["PHP Language", "FrameWork Laravel Version 8.0", "JWT", "Bootstrap Version 5.0", "Css", "DataTables", "jquery", "Vanila JavaScrip", "Adminlte", "Fontawesome", "DBMS MySql"],
  },
  {
    description: "Aplikasi ini gunakan Untuk Digitalisasi Nusantara Yang Peruntukan di setiap Desa Dan Bagian Dari Salah satu VISI MISI Perusahaan Startup yang berada di Bogor",
  },
];

const detail = document.querySelectorAll("#detail");
detail.forEach(function (b) {
  b.addEventListener("click", () => {
    let n = b.getAttribute("data-detail");
    console.log(n);
    isi(n);
  });
});

const parent = document.querySelector(".modal-body");
const title = document.querySelector(".judul");
const spec = document.querySelector("#spec");
const close = document.querySelector("#tutup");
const isiSpec = document.querySelector(".isiSpec");
const desc = document.querySelector(".desc");
const PDesc = document.querySelector(".PaDesc");
const ptitle = document.querySelector(".modal-header");
const childSpc = document.querySelector("#childSpc");

function isi(x) {
  if (x == 0) {
    let texttitle = dbMayora[x].judul;
    let specifikasi = dbMayora[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }
    let newDesc = `<p class="text-light"> ${dbMayora[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  } else if (x == 1) {
    let texttitle = dbSpk[x - 1].judul;
    let specifikasi = dbSpk[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }
    //description
    let newDesc = `<p class="text-light"> ${dbSpk[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  } else if (x == 2) {
    let texttitle = dbEvoting[x - 2].judul;
    let specifikasi = dbEvoting[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }

    let newDesc = `<p class="text-light"> ${dbEvoting[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  } else if (x == 3) {
    let texttitle = dbQuila[x - 3].judul;
    let specifikasi = dbQuila[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }

    let newDesc = `<p class="text-light"> ${dbQuila[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  } else if (x == 4) {
    let texttitle = dbPcc[x - 4].judul;
    let specifikasi = dbPcc[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }

    let newDesc = `<p class="text-light"> ${dbPcc[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  } else {
    let texttitle = dbdigantara[x - 5].judul;
    let specifikasi = dbdigantara[1].spesifikasi;
    title.textContent = texttitle;
    for (let i = 0; i < specifikasi.length; i++) {
      let li = document.createElement("li");
      let datali = `${specifikasi[i]}`;
      li.append(datali);
      spec.appendChild(li);
      close.addEventListener("click", () => {
        li.parentNode.removeChild(li);
        location.reload();
      });
    }

    let newDesc = `<p class="text-light"> ${dbdigantara[2].description}</p>`;
    desc.insertAdjacentHTML("beforebegin", newDesc);
  }
}
