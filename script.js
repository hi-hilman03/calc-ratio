document.addEventListener("DOMContentLoaded", function ()
{
    const form = document.getElementById("equity-form");
    const equityInput = document.getElementById("equity");
    const marginInput = document.getElementById("margin");
    const resultContainer = document.getElementById("result");
    const themeToggle = document.getElementById("theme-toggle");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const equity = parseFloat(equityInput.value);
        const marginRequired = parseFloat(marginInput.value);

        if (isNaN(equity) || isNaN(marginRequired) || marginRequired === 0) {
            resultContainer.innerHTML = "<p style='color:red;'>Masukkan angka yang valid!</p>";
            return;
        }

        const equityRatio = (equity / marginRequired) * 100;
        const jumlahLot = Math.floor((marginRequired / 300) * 2);
        const biayaInap = jumlahLot * 5.55;
        const fee = jumlahLot * 16.65;
        const equityFee = equity - fee;
        const estimasiMenginap = equityFee / biayaInap;

        resultContainer.innerHTML = `
            <p>Equity Ratio: ${equityRatio.toFixed(2)}%</p>
            <p>Jumlah Lot: ${jumlahLot}</p>
            <p>Biaya Inap: $${biayaInap.toFixed(2)} per malam</p>
            <p>Fee: $${fee.toFixed(2)}</p>
            <p>Equity-Fee: $${equityFee.toFixed(2)}</p>
            <b>Estimasi Menginap: ${estimasiMenginap.toFixed(2)} hari</b>`
        ;
    });
	{
	function padZero(num) {
		return num.toString().padStart(2, '0');
		}
	function updateClock() {
		const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
		const now = new Date();
		
		const day = days[now.getDay()];
		const date = now.toLocaleDateString('id-ID', {
			day: 'numeric', month: 'long', year: 'numeric'
			});
		
		const hours = padZero(now.getHours());
		const minutes = padZero(now.getMinutes());
		const seconds = padZero(now.getSeconds());
		
		const time = `${hours}:${minutes}:${seconds}`;
		
		document.getElementById('jam').textContent = `${day}, ${date} - ${time}`;
    }
	
	setInterval(updateClock, 1000);
	
	updateClock(); // panggil sekali saat awal
	}
});
