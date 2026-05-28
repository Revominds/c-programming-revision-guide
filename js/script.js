  function show(n) {

    document.querySelectorAll('.topic').forEach((topic, i) => {
      topic.classList.toggle('visible', i === n);
    });

    document.querySelectorAll('.nav-btn').forEach((btn, i) => {
      btn.classList.toggle('active', i === n);
    });

  }
  
  
  function copyCode(id) {

    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    alert("Source code copied successfully!");

  }