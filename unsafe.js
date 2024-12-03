const cityData = {
    bhopal: {
        safeZone: [
          { name: "Lalghati", lat: 23.2345, long: 77.4094 },
          { name: "RGPV University", lat: 23.2023, long: 77.4237 },
          { name: "Shymala Hills", lat: 23.2762, long: 77.4376 },
          { name: "Vijay Nagar", lat: 23.2576, long: 77.4123 },
          { name: "TT Nagar", lat: 23.2702, long: 77.4029 },
          { name: "Bairagarh", lat: 23.270, long: 77.391 },
          { name: "Arera Hills", lat: 23.234, long: 77.411 },
        ],
        unsafeZone: [
          { name: "Industrial Area", lat: 23.211, long: 77.493 },
          { name: "Karond", lat: 23.283, long: 77.404 },
          { name: "Raisen Road", lat: 23.206, long: 77.477 },
        ],
        lessCrowdedZone: [
          { name: "Sehore Naka", lat: 23.270, long: 77.421 },
          { name: "Ayodhya Bypass", lat: 23.242, long: 77.442 },
          { name: "Kolar Road", lat: 23.168, long: 77.472 },
          { name: "Mandideep", lat: 23.115, long: 77.516 },
          { name: "Misrod", lat: 23.186, long: 77.501 },
        ],
    },
    indore: {
        safeZone: [
            { name: "Rajwada", lat: 22.720, long: 75.854 },
            { name: "Treasure Island Mall", lat: 22.722, long: 75.897 },
            { name: "Vijay Nagar", lat: 22.751, long: 75.888 },
            { name: "Chappan Dukan", lat: 22.728, long: 75.885 },
            { name: "Sarafa Bazaar", lat: 22.718, long: 75.855 },
            { name: "Rajendra Nagar", lat: 22.681, long: 75.832 },
            { name: "Ralamandal", lat: 22.676, long: 75.849 },
            { name: "Pipliyapala Lake", lat: 22.686, long: 75.873 },
        ],
        unsafeZone: [
            { name: "Banganga", lat: 22.753, long: 75.890 },
            { name: "Mhow Naka", lat: 22.735, long: 75.869 },
            { name: "Musakhedi", lat: 22.746, long: 75.884 },
        ],
        lessCrowdedZone: [
            { name: "Rau", lat: 22.645, long: 75.799 },
            { name: "Khajrana", lat: 22.736, long: 75.902 },
            { name: "Annapurna", lat: 22.703, long: 75.868 },
            { name: "Super Corridor", lat: 22.732, long: 75.912 },
        ],
    },
    ujjain: {
        safeZone: [
            { name: "Mahakaleshwar Temple", lat: 23.182, long: 75.768 },
            { name: "Ramghat", lat: 23.184, long: 75.771 },
            { name: "Harsiddhi Mandir", lat: 23.180, long: 75.771 },
            { name: "Kal Bhairav Temple", lat: 23.146, long: 75.812 },
            { name: "Sandipani Ashram", lat: 23.175, long: 75.810 },
        ],
        unsafeZone: [
            { name: "Agar Road", lat: 23.210, long: 75.765 },
            { name: "Kaliyadeh Palace Road", lat: 23.201, long: 75.778 },
            { name: "Badnagar", lat: 23.041, long: 75.640 },
            { name: "Nagda", lat: 23.456, long: 75.421 },
            { name: "Maksy Road", lat: 23.155, long: 75.758 },
            { name: "Chintaman Ganesh Temple Area", lat: 23.121, long: 75.731 },
            { name: "Bhukhi Mata Mandir", lat: 23.166, long: 75.769 },
            { name: "Vikram University", lat: 23.190, long: 75.799 },
        ],
        lessCrowdedZone: [
            { name: "Gopal Mandir", lat: 23.179, long: 75.766 },
            { name: "Pingleshwar", lat: 23.231, long: 75.768 },
        ],
    },
    jabalpur: {
        safeZone: [
            { name: "Rani Durgavati Museum", lat: 23.166, long: 79.955 },
            { name: "Madan Mahal", lat: 23.159, long: 79.949 },
            { name: "Gwarighat", lat: 23.146, long: 79.896 },
            { name: "Adhartal", lat: 23.197, long: 79.918 },
            { name: "Shahpura", lat: 23.126, long: 80.012 },
            { name: "Kachnar City Shiva Temple", lat: 23.177, long: 79.949 },
            { name: "Dumna Nature Reserve", lat: 23.183, long: 79.999 },
        ],
        unsafeZone: [
            { name: "Gorakhpur", lat: 23.178, long: 79.975 },
            { name: "Bhedaghat", lat: 23.092, long: 79.831 },
            { name: "Madanganj", lat: 23.190, long: 79.975 },
        ],
        lessCrowdedZone: [
            { name: "Vijay Nagar", lat: 23.157, long: 79.953 },
            { name: "Bargi Dam", lat: 23.078, long: 79.892 },
            { name: "Sadar Bazaar", lat: 23.161, long: 79.946 },
            { name: "Katni Bypass", lat: 23.276, long: 80.400 },
            { name: "Patan", lat: 23.172, long: 79.894 },
        ],
    },
    gwalior: {
        safeZone: [
            { name: "Gwalior Fort", lat: 26.203, long: 78.169 },
            { name: "Jai Vilas Palace", lat: 26.209, long: 78.165 },
            { name: "Sun Temple", lat: 26.204, long: 78.194 },
            { name: "Moti Mahal", lat: 26.213, long: 78.179 },
            { name: "Phool Bagh", lat: 26.212, long: 78.170 },
            { name: "Gola Ka Mandir", lat: 26.221, long: 78.206 },
            { name: "University Area", lat: 26.233, long: 78.217 },
        ],
        unsafeZone: [
            { name: "Laskar Area", lat: 26.199, long: 78.156 },
            { name: "Hajira", lat: 26.221, long: 78.183 },
            { name: "Thatipur", lat: 26.227, long: 78.217 },
            { name: "Morar", lat: 26.260, long: 78.224 },
            { name: "Badagaon", lat: 26.222, long: 78.178 },
        ],
        lessCrowdedZone: [
            { name: "Bahodapur", lat: 26.184, long: 78.151 },
            { name: "Baradari", lat: 26.208, long: 78.193 },
            { name: "Tansen Nagar", lat: 26.243, long: 78.198 },
        ],
    },
};


const dropdown = document.getElementById("city");
const tableBody = document.querySelector("#zonesTable tbody");
const chartCanvas = document.getElementById("zoneChart");
let chartInstance;

dropdown.addEventListener("change", () => {
    const city = dropdown.value;
    tableBody.innerHTML = "";

    if (city === "none") return;

    const categories = ["safeZone", "unsafeZone", "lessCrowdedZone"];
    categories.forEach(category => {
        cityData[city][category].forEach(area => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${area.name}</td>
                <td>${category}</td>
                <td>${area.lat}</td>
                <td>${area.long}</td>
            `;

            // Apply row color based on the category
            if (category === "safeZone") {
                row.style.backgroundColor = "#d4edda"; // Light green
            } else if (category === "unsafeZone") {
                row.style.backgroundColor = "#f8d7da"; // Light red
            } else if (category === "lessCrowdedZone") {
                row.style.backgroundColor = "#fff3cd"; // Light yellow
            }

            tableBody.appendChild(row);
        });
    });

    updateChart(city);
});

function updateChart(city) {
    const data = {
        safeZone: cityData[city].safeZone.length,
        unsafeZone: cityData[city].unsafeZone.length,
        lessCrowdedZone: cityData[city].lessCrowdedZone.length,
    };

    const chartData = {
        labels: ["Safe Zone", "Unsafe Zone", "Less Crowded Zone"],
        datasets: [
            {
                label: `${city} Zone Distribution`,
                data: [data.safeZone, data.unsafeZone, data.lessCrowdedZone],
                backgroundColor: ["#d4edda", "#f8d7da", "#fff3cd"],
            },
        ],
    };

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(chartCanvas, {
        type: "bar",
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: `${city.charAt(0).toUpperCase() + city.slice(1)} Zone Analysis`,
                },
            },
        },
    });
}
