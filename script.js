let washCar = document.getElementById("wash-car");
let mowLawn = document.getElementById("mow-lawn");
let pullWeed = document.getElementById("pull-weed");
let textContent = document.getElementById("text-content");
let textContent2 = document.getElementById("text-content2");
let totalAmount = document.getElementById("total-amount");
let totalValue = document.getElementById("total-value");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let total = 0;


function reply_click(e) {
    if(e.target.id === "wash-car") {
        count1++;
        if(count1 === 1) {
        printItem("Wash Car", 10, "remove-wash", "textContent1")
        }
    } else if(e.target.id === "mow-lawn") {
        count2++;
        if(count2 === 1) {
        printItem("Mow Lawn", 20, "remove-mow", "textContent2")
        }
    } else {
        count3++;
        if(count3 === 1) {
        printItem("Pull Weed", 30, "remove-pull", "textContent3")
        }
    }
  }

  function printItem(type,price,id, id2) {
      textContent.innerHTML += `<div class="task-total-detail-box" id = "${id2}">
      <div>
      <span id="wash-car-text">${type}</span> <span class="remove-btn" id="${id}" onclick="remove(event, ${price})">Remove</span>
      </div>
      <div>
          <span style="color: #918E9B">$</span><span id="wash-car-price">${price}</span>
      </div>
  </div>`

  calcTotal(price);

  }

  function calcTotal(price) {
      total += price;
      totalValue.textContent = total;
      return total;
  }


  function remTotal(price) {
      total -= price;
      totalValue.textContent = total;
  }

  function remove(e,price) {
    if(e.target.id === "remove-wash") {
        let removeWash = document.getElementById("textContent1");
        removeWash.remove();
        remTotal(price);
        count1 = 0;
    }
    if(e.target.id === "remove-mow") {
        let removeWash = document.getElementById("textContent2");
        removeWash.remove();
        remTotal(price);
        count2 = 0;
    }
    if(e.target.id === "remove-pull") {
        let removeWash = document.getElementById("textContent3");
        removeWash.remove();
        remTotal(price);
        count3 = 0;
    }

  }

  function remTotal(price) {
    total -= price;
    totalValue.textContent = total;
}

function resetButton() {
window.location.reload();
}

