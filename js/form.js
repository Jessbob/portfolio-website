(() => {
  const form = document.querySelector("form");
  const formResponse = document.getElementById("js-form-response");

  form.onsubmit = e => {
    e.preventDefault();

    const data = {};
    const formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    console.log(JSON.stringify(data));

    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.send(JSON.stringify(data));

    xhr.onloadend = response => {
      if (response.target.status === 200) {
        form.reset();
        formResponse.innerHTML = "Your message has been sent!";
      } else {
        formResponse.innerHTML = "Something went wrong";
        console.error(JSON.parse(response.target.response).message);
      }
    };
  };
})();
