
var canvas = document.getElementById('containerChartJS').getContext('2d');
var data = {
    labels: ["リンゴ", "オレンジ", "バナナ", "マンゴー", "グレープ"],
    datasets: [
        {
            label: "フルーツ",
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(243, 152, 0, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(243, 152, 0,, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(243, 152, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(243, 152, 0,, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [12, 15, 25, 30, 28],
        }
    ]
};

var chart = new Chart(canvas, {
  type: 'bar',
  data: data
});