const cards = document.getElementsByClassName("card_button");

for (let card of cards) {
  console.log(card);
  card.addEventListener("click", (e) => {
    const imageName = e.target.dataset.imageName;
    console.log(imageName);
    const dialogWrapper = document.createElement("div");
    dialogWrapper.classList.add("dialog");

    // const dialog = document.createElement("div");
    // dialog.classList.add("dialog_image_wrapper");
    // dialogWrapper.appendChild(dialog);

    // const dialogTitleWrapper = document.createElement("div");
    // dialogTitleWrapper.classList.add("dialog_title_wrapper");

    // const dialogTitle = document.createElement("p");
    // dialogTitle.textContent = "Menu";
    // dialogTitleWrapper.appendChild(dialogTitle);

    const closeIcon = document.createElement("img");
    closeIcon.src = "assets/images/close-icon.png";
    closeIcon.classList.add("dialog_close_icon");
    dialogWrapper.appendChild(closeIcon);
    closeIcon.addEventListener("click", () => {
      document.body.removeChild(dialogWrapper);
    });

    // dialog.appendChild(dialogTitleWrapper);

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image_wrapper");

    const img = document.createElement("img");
    img.src = `assets/images/menu/${imageName}.webp`;
    img.classList.add("dialog_image");
    imageWrapper.appendChild(img);

    dialogWrapper.appendChild(imageWrapper);
    document.body.append(dialogWrapper);
  });
}
