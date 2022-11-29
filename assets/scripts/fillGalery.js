img_find();

function img_find() {
  const imgs = document.querySelectorAll("a img");

  for (let i = 0; i < imgs.length; i++)
    imgs[i].src = "../resources/" + (i + 1) + ".webp";
}
