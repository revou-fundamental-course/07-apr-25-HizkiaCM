document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pesanForm');
    const namaTampilan = document.getElementById('namaTampilan');
    const tanggalLahirTampilan = document.getElementById('tanggalLahirTampilan');
    const jenisKelaminTampilan = document.getElementById('jenisKelaminTampilan');
    const pesanTampilan = document.getElementById('pesanTampilan');
    const waktuTampilan = document.getElementById('waktuTampilan');
    const welcomeHeading = document.querySelector('.welcome h1');

    // Contoh data awal
    const defaultName = 'Harfi';
    namaTampilan.textContent = 'Harfi Nourian';
    tanggalLahirTampilan.textContent = '01/11/1995';
    jenisKelaminTampilan.textContent = 'Laki-Laki';
    pesanTampilan.textContent = 'Lagi Belajar buat Website';
    welcomeHeading.textContent = `Hai ${defaultName}, Selamat Datang`;

    function updateWaktu() {
        const sekarang = new Date();
        const opsiWaktu = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        waktuTampilan.textContent = sekarang.toLocaleString('id-ID', opsiWaktu);
    }

    // Update waktu setiap detik
    updateWaktu();
    setInterval(updateWaktu, 1000);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const tanggalLahir = document.getElementById('tanggalLahir').value;
        const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
        const pesan = document.getElementById('pesan').value;

        // Memperbarui tampilan data
        namaTampilan.textContent = nama;
        tanggalLahirTampilan.textContent = tanggalLahir;
        jenisKelaminTampilan.textContent = jenisKelamin;
        pesanTampilan.textContent = pesan;
        
        // Memperbarui welcome heading dengan nama dari form
        const firstName = nama.split(' ')[0]; // Mengambil nama pertama saja
        welcomeHeading.textContent = `Hai ${firstName}, Selamat Datang`;
    });
});