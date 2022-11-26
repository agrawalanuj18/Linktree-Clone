const shareButtons = document.querySelectorAll(".title-share");
async function copyText(e) {
  // prevent button going to the site
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the url: " + link);
  } catch (err) {
    console.error(err);
  }
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);


