const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const deadlineformat = document.querySelectorAll(".deadline-format h4");

//for new date
// let tempdate = new Date();
// let tempyear = tempdate.getFullYear();
// let tempmonth = tempdate.getMonth();
// let tempday = new tempdate.getDate();



const futuredate = new Date(2025, 12, 26, 19, 30, 0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
let days = futuredate.getDate();
days = weekdays[days];
const date = futuredate.getDate();
const futuretime = futuredate.getTime();

giveaway.textContent = `Giveaway ends on ${days}, ${date} ${month} ${year} at ${hours}:${minutes}AM`;

function getcountdown(){
const today = new Date().getTime();
const t = futuredate - today;

const oneDay = 24 * 60 * 60 * 1000;
const oneHours = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const day = Math.floor(t / oneDay);
const hours = Math.floor((t % oneDay) / oneHours );
const minutes = Math.floor((t % oneHours) / oneMinute);
const seconds = Math.floor((t % oneMinute) / 1000);

const value = [day, hours, minutes, seconds];

function format(item){
  if(item < 10){
  return (item = `0${item}`);
  }
  return item;
}
deadlineformat.forEach(function(item, index){
      item.innerHTML = format(value[index]);
});
if(item < 0){
  clearInterval(countdown);
  deadline.innerHTML = `<h4 class="expired"> Sorry, the giveaway has expired</h4>`;

}
}
let countdown = setInterval(getcountdown, 1000);
getcountdown();




