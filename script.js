// Saat gambar diklik → tampilkan popup
    img.onclick = function() {
        popup.style.display = "block";
        popupImg.src = this.src;
        downloadLink.href = this.src; // set link download
    }

    // Saat klik tombol close
    closeBtn.onclick = function() {
        popup.style.display = "none";
    }

    // Klik di luar gambar untuk tutup
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});

