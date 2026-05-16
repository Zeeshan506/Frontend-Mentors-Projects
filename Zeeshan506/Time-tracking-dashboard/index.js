const dataCards = document.querySelectorAll("[data-card]");
let currentTimeFrame = "daily";
let data = [];
async function loadData() {
  const response = await fetch("./data.json");
  data = await response.json();
  render(currentTimeFrame);
}

function render(timeframe = currentTimeFrame) {
  dataCards.forEach((card) => {
    const activity = card.getAttribute("data-card");
    const item = data.find((d) => d.title === activity);
    if (!item) return;

    const { current, previous } = item.timeframes[timeframe];
    card.innerHTML = `<div class="flex flex-row justify-center px-8">
             <p class="mr-auto">${item.title}</p>
           <img
              src="/images/icon-ellipsis.svg"
              alt="icon-ellipsis"
              class="w-4 ml-auto mt-2 h-2 cursor-pointer"
            />
          </div>
          <div class="flex flex-row lg:flex-col justify-between lg:items-start items-center lg:justify-start px-8 gap-4">
          <h1 class="text-5xl font-light">${current}hrs</h1>
             <p class="lg:mr-auto text-[#7b8e99]">Last Week - ${previous}hrs</p>
           </div>
    `;
  });
}

const buttons = document.querySelectorAll("#btns");

function resetButtons() {
  buttons.forEach((btn) => {
    btn.classList.remove("text-white");
    btn.classList.add("text-[#7b8e99]");
    btn.classList.remove("scale-115");
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetButtons();
    currentTimeFrame = btn.value;
    btn.classList.remove("text-[#7b8e99]");
    btn.classList.add("text-white");
    btn.classList.add("scale-115");
    render(currentTimeFrame);
  });
});

loadData();

// `
//         `;
