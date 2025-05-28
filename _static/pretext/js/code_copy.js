document.addEventListener("click", (ev) => {
  const button = ev.target.closest("button")
  const codeBox = ev.target.closest(".code-box")
  if (codeBox && navigator.clipboard) {
    preBox = codeBox.querySelector("pre")
    navigator.clipboard.writeText(preBox.textContent)
    message = document.createElement("span")
    message.textContent = "✓"
    message.classList.add("code-copy")
    message.style.opacity = 1;
    message.style.color = "mediumseagreen";
    message.style.fontSize = "larger";
    button.replaceWith(message)
    setTimeout(() => {
      message.replaceWith(button)
    }, 1000)
  }
})

document.addEventListener("DOMContentLoaded", () => {
  document.head.insertAdjacentHTML("beforeend", `<style type="text/css">
    .ptx-content .code-box {
      position: relative;
  }

  .ptx-content .code-box .code-copy {
      position: absolute;
      right: 5px;
      top: 15px;
      opacity: 0.25;
      border-width: 0;
  }

  .ptx-content .code-box .code-copy:hover {
      opacity: 0.6;
  }
  </style>`)
})
