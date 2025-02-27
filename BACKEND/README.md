# RESTFULL API MANAJEMEN DAN SISTEM APPROVAL PENYEWAAN KENDARAAN
<br>

## Berjalan di http://localhost:3100/

## Deskripsi Projek 

**API Kelola Penyewaan Kendaraan** adalah sebuah Rest Full API yang dirancang untuk memudahkan pengelolaan data peminjaman kendaraan menggunakan Express JS sebagai framework dan sequelize dalam pemilihan orm di Node.js. API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada user, admin, kendaraan, peminjaman dan pengembalian, dan notification (sebut saja request, tabel untuk menangani request user yang ingin meminjam).


## Fitur

- **CRUD Kendaraan**: 
  - **Create**: Tambahkan kendaraan baru ke dalam data.
  - **Read**: Ambil informasi tentang kendaraan tertentu atau seluruh koleksi kendaraan.
  - **Update**: Perbarui detail kendaraan yang sudah ada.
  - **Get BY Name dan Status**: Mencari Kendaraan berdasarkan nama kendaraan dan status.
  - **Delete**: Hapus kendaraan dari dalam data.

- **CRUD User**: 
  - **Create**: Daftarkan User baru dengan informasi lengkap.
  - **Read**: Ambil detail User atau daftar semua User.
  - **Update**: Perbarui informasi USer yang sudah terdaftar.
  - **Delete**: Hapus USer dari sistem.

- **CRUD Admin**: 
  - **Register**: Daftarkan Admin baru dengan informasi lengkap.
  - **login**: Admin melakukan login dengan email dan password.
  - **logout**: Admin melakukan logout.
  - **Read**: Ambil detail Admin atau daftar semua Admin.
  - **Update**: Perbarui informasi Admin yang sudah terdaftar.
  - **Delete**: Hapus Admin dari sistem.

- **CRUD Notification**: 
  - **Create**: Daftarkan Notifikasi baru dengan informasi lengkap.
  - **Read**: Ambil detail Notifikasi atau daftar semua Notifikasi.
  - **Delete**: Perbarui informasi Notifikasi yang sudah terdaftar.

- **CRUD Peminjaman**: 
  - **Create**: Daftarkan Penyewaan baru dengan informasi lengkap.
  - **Read**: Ambil detail Penyewaan atau daftar semua Penyewaan.
  - **Update**: Perbarui informasi Penyewaan yang sudah terdaftar.

- **CRUD Pengembalian**: 
  - **Create**: Daftarkan Pengembalian baru dengan informasi lengkap.
  - **Read**: Ambil detail Pengembalian atau daftar semua Pengembalian.
  - **Update**: Perbarui informasi Pengembalian yang sudah terdaftar.

<br>

## Dependecies / Teknologi yang digunakan

1. **express**

    Express JS sebagai framework Node.js untuk mengelola request dan response HTTP

    ```bash
   npm i express
    ```

2. **mysql**

    package untuk melakukan koneksi ke database

    ```bash
    npm i mysql
    ```

3. **dotenv**

    Dotenv untuk mengatur variabel lingkungan
    ```bash
    npm i dotenv
    ```

4. **cors**

    Untuk memberikan akses pada forntEnd

    ```bash
    npm i cors
    ```
5. **sequelize**

    Sebagai Orm yang dipakai

    ```bash
    npm i sequelize
    ```
6. **bcrypt**

    Untuk melakukan hash dan compare

    ```bash
    npm i bcrypt
    ```
7. **jsonwebtoken**

    untuk melakukan pembuatan dan fungsi dengan token

    ```bash
    npm i jsonwebtoken
    ```
8. **cookie-parser**

    untuk melakukan parser terhadap data cookie

    ```bash
    npm i cookie-parser
    ```
9. **nodemon**

    jalankan dengan mengetikan perintah (nodemon namaFile)

    ```bash
    npm install nodemon
    ```

    Perintah ini akan menjalankan server secara terus menerus

    Aplikasi akan berjalan pada port yang ditentukan di file `.env` .

    <br>
    

## Cara Penggunaan

1. Pastikan Node.js dan npm telah terinstall di komputer Anda.
2. Clone atau download projek ini ke direktori lokal Anda.
3. Jalankan `npm install` untuk menginstall dependensi yang diperlukan.
4. Buat file `env` dan beri variabel PORT dan DB_NAME (sesuai nama database).
5. Jalankan `node models/index.js` untuk membuat Table.
6. Untuk melakukan testing wajib Menjalankan `node seeders/seeders.js` untuk menambah nilai default admin Pemilik.
6. Jika table database sudah dibuat jalankan aplikasi dengan command `node npm run dev` / `nodemon index.js`.
7. Aplikasi akan berjalan di `http://localhost:PORT`, dengan PORT adalah nomor port yang ditentukan dalam file `.env`.




<br>

## Router
### **user/admin/kendaraan/peminjaman/pengembalian**
- get (  /user/ ) 
- getById (/user/find/1)
- post (/user/create)
- put (/user/update)
- delete (/user/delete)
<br>

## Strukture Folder
📂 **BackEnd**
<br/>
  --📂 **controller** (untuk Membuat fungsi tiap tabel)
<br/>
  --📂 **message** ( template yang digunakan untuk response hasil )
<br/>
  --📂 **middleware** ( membuat function verifikasi token )
<br/>
  --📂 **model** ( membuat setiap tabel )
<br/>
  --📂 **public**
<br/>
  -----📂 **image** ( menyimpan gambar yang diinput )
<br/>
  --📂 **router** ( Membuat logic router setiap tabel )
<br/>
  --📂 **seeders** ( untuk memberi default value )
<br/>
  --📂 **utils** ( menghubungkan server ke database )
<br/>
--**index.js** ( file untuk route inti )






## Hal Yang Berkaitan

Beberapa Contoh Gambar Yang Berkaitan Terkait Projek REST FULL API Manajemen Penyewaan Kendaraan

- **Class Diagram**
<img src="./image/classdiagram (2).png" />

- **ERD (Entity Relationship Diagram)**
<img src="./image/erd22.png" />


- **Use Case**
<img src="./image/useCase.png" />

<br/>

**Ruang Request / Notification**
\
Users (1) ------> (n) Notification
\
Kendaraan (1) ------> (n) Notification

**Pengembalian**
\
Peminjaman (1) ------> (1) Pengembalian

<br/>

## NOTES

1. jalankan `node seeders/seeders.js` untuk menambah data admin(Pemilik) sebagai default agar dapat melakukan register admin. jika gagal tolong tambahkan melalui database langsung
2. Nilai default pemilik `dickyfernando@gmail.com` dan password `dicky123` / cek pada seeders.
3. register pada admin memerlukan `confirmasi password`.


## Kontribusi

Jika Anda ingin berkontribusi pada projek ini, silakan lakukan pull request dengan perubahan yang Anda inginkan. Pastikan perubahan Anda sesuai dengan tujuan dan struktur projek ini.

```
    Buat Code Disini
```

<br>

## Kontak

- **Nama:** Syahreza Imam Wahyudi
- **Email:** [syahrezaimamwahyudi976@gmail.com](mailto:syahrezaimamwahyudi976@gmail.com)
- **Website:** [www.https://github.com/Syahrezaimamw.com](https://github.com/Syahrezaimamw)

<br>


![Lisensi](https://img.shields.io/badge/license-MIT-blue.svg) ![Versi](https://img.shields.io/badge/version-100.10.10-brightgreen.svg)



