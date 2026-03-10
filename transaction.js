function addTransaction(title) {

    const container = document.getElementById("transaction-container");

    const div = document.createElement("div");

    div.className =
        "bg-base-100 p-4 rounded-xl flex justify-between items-center shadow";

    div.innerHTML = `
<div class="flex items-center gap-3">

<div class="bg-base-200 p-3 rounded-full">
<i class="fa-solid fa-money-bill-transfer text-primary"></i>
</div>

<div>
<h3 class="font-semibold">${title}</h3>
<p class="text-sm text-neutral/60">${new Date().toLocaleString()}</p>
</div>

</div>

<i class="fa-solid fa-ellipsis-vertical text-gray-400"></i>
`;

    container.prepend(div);
}