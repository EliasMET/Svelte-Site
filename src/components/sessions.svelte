<script>
  import { onMount, onDestroy } from "svelte";

  let token = null;
  let success = false;
  let errorMessage = "";

  const sessionIdToken = getCookie("session_id");

  onMount(() => {
    if (!sessionIdToken) {
      window.location.href = "https://trophyhub.me/bypass_error";
    }

    fetch("https://api.trophyhub.me/session/page_1.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ session_id: sessionIdToken }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        deleteCookie("session_id");
        window.location.href = "https://trophyhub.me/bypass_error";
      });

    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  });

  onDestroy(() => {
    clearInterval(timerId);
  });

  let timerId;
  let countdown = 5;

  function startTimer() {
    timerId = setInterval(() => {
      countdown -= 1;
      if (countdown === 0) {
        clearInterval(timerId);
        verifyCaptcha();
      }
    }, 1000);
  }

  function verifyCaptcha() {
    if (!token) {
      alert("Please complete the reCAPTCHA to continue.");
      return;
    }
    fetch("https://api.trophyhub.me/captcha/verify.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-requested-with": "XMLHttpRequest",
      },
      body: JSON.stringify({ recaptchaResponse: token }),
    })
      .then((response) => {
        if (response.ok) {
          success = true;
          window.location.href =
            "https://direct-link.net/432261/tropy-op-hub-good-scripts1";
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data && data.message) {
          errorMessage = data.message;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        deleteCookie("session_id");
        window.location.href = "https://trophyhub.me/bypass_error";
      });
  }

  // Get cookie value by name
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Delete cookie by name
  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  // reCAPTCHA callback function
  window.recaptchaCallback = function (response) {
    token = response;
  };
</script>

<style>
  :global(body) {
    background-image: url("https://images.unsplash.com/photo-1542281286-9e0a16bb7366");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Open Sans", sans-serif;
  }

  .container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    max-width: 800px;
  }

  h1 {
    font-size: 36px;
    color: #000;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #000;
    margin-bottom: 40px;
  }

  #timer {
    font-size: 24px;
    color: #000;
    margin-bottom: 40px;
  }

  #successMessage {
    display: none;
    font-size: 36px;
    color: #4caf50;
    margin-bottom: 40px;
  }

  .g-recaptcha {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #submitButton {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    transition: background-color 0.2s ease-in-out;
    outline: none;
  }

  #submitButton:hover {
    background-color: #3e8e41;
  }

  @media (max-width: 480px) {
    .container {
      padding: 10px;
      max-width: 90%;
    }

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }

    #timer {
      font-size: 20px;
    }

    #successMessage {
      font-size: 28px;
    }
  }
</style>

<div class="container">
  <h1>Checkpoint 1 of 3</h1>
  <p>Completing the reCAPTCHA below is required to continue.</p>
  {#if countdown > 0}
    <div id="timer">{countdown} seconds remaining</div>
  {:else if countdown === 0}
    <div id="timer">Processing...</div>
  {/if}
  <form id="myForm">
    <div class="g-recaptcha" data-sitekey="6Ld_XvQkAAAAAMkYNj1hYAHrd6SppzjYjwPLVBTk"></div>
    <br />
    <button id="submitButton" on:click="{startTimer}" disabled="{success}">
      {#if countdown > 0}
        Submit
      {:else}
        Processing...
      {/if}
    </button>
  </form>
  {#if success}
    <div id="successMessage">Success! You may now access the next Linkvertise.</div>
  {/if}
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
</div>
