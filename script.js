document.getElementById("applicationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").classList.remove("hidden");
    this.reset();
  });
  