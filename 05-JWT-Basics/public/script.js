$(function () {
  const formDOM = $(".form");
  const usernameInputDOM = $(".username-input");
  const passwordInputDOM = $(".password-input");
  const formAlertDOM = $(".form-alert");
  const resultDOM = $(".result");
  const btnDOM = $("#data");
  const tokenDOM = $(".token");

  formDOM.submit(async (e) => {
    formAlertDOM.removeClass("text-success");
    tokenDOM.removeClass("text-success");
    e.preventDefault();

    const username = usernameInputDOM.val();
    const password = passwordInputDOM.val();

    try {
      const { data } = await axios.get("/api/v1/login", {
        username,
        password,
      });

      formAlertDOM.css("display", "block");
      formAlertDOM.text(data.msg);
      formAlertDOM.addClass("text-success");
      usernameInputDOM.val(null);
      passwordInputDOM.val(null);

      localStorage.setItem("token", data.token);
      resultDOM.empty();
      tokenDOM.text("token present");
      tokenDOM.addClass("text-success");
    } catch (error) {
      formAlertDOM.css("display", "block");
      formAlertDOM.text(error.response.data.msg);
      localStorage.removeItem("token");
      resultDOM.empty();
      tokenDOM.text("no token present");
      tokenDOM.removeClass("text-success");
    }
    setTimeout(() => {
      formAlertDOM.hide();
    }, 2000);
  });

  btnDOM.on("click", async () => {
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get("/api/v1/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resultDOM.html(`<h5>${data.msg}</h5><p>${data.secret}</p`);
      data.secret;
    } catch (error) {
      localStorage.removeItem("token");
      resultDOM.html(`<p>${error.response.data.msg}</p>`);
    }
  });

  const checkToken = () => {
    tokenDOM.removeClass("text-success");
    const token = localStorage.getItem("token");
    if (token) {
      tokenDOM.text("token present");
      tokenDOM.addClass("text-success");
    }
  };

  checkToken();
});
