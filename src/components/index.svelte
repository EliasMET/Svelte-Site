<script>
	function copyScript() {
	  const script = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/betalord1231/Rbx-Scripts/main/Load_Hub"))()';
	  navigator.clipboard.writeText(script);
	  alert("Script copied to clipboard.");
	}
  </script>
  
  <style>
	:global(body) {
	  background-color: #000;
	  font-family: 'San Francisco', Arial, sans-serif;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  margin: 0;
	  padding: 0;
	  height: 100vh;
	}
  
	header {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  background-color: #333;
	  padding: 10px;
	  width: 100%;
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 1;
	}
  
	.logo {
	  width: 30px;
	  height: auto;
	}
  
	h1 {
	  font-size: 24px;
	  font-weight: bold;
	  color: #fff;
	  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	  margin-bottom: 0;
	  text-align: center;
	  flex-grow: 1;
	}
  
	.dropdown {
	  position: relative;
	}
  
	.dropdown-content {
	  display: none;
	  position: absolute;
	  background-color: #f9f9f9;
	  min-width: 160px;
	  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	  padding: 12px 16px;
	  z-index: 1;
	  top: 100%;
	  left: 50%;
	  transform: translateX(-50%);
	}
  
	.dropdown:hover .dropdown-content {
	  display: block;
	}
  
	.dropdown-btn {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: space-between;
	  padding: 8px 4px;
	  font-size: 20px;
	  background-color: transparent;
	  color: #fff;
	  border: none;
	  cursor: pointer;
	  transition: transform 0.2s ease-in-out;
	}
  
	.dropdown-lines {
  width: 20px;
  height: 2px;
  background-color: #fff;
  margin: 2px 0;
  margin-right: 4px; /* Add this line to create a gap on the right side */
}

  
	.btn-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	  margin-top: 20px;
	  height: calc(100vh - 200px); /* Adjust the height as needed */
	}
  
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  padding: 16px 32px;
	  font-size: 20px;
	  font-weight: bold;
	  background-color: #666;
	  color: #fff;
	  border: none;
	  border-radius: 8px;
	  cursor: pointer;
	  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
	  text-align: center;
	  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	  margin-top: 20px;
	  max-width: 300px;
	  width: 100%;
	}
  
	.btn:hover {
	  transform: translateY(-2px);
	  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
	}
  
	.btn:active {
	  transform: translateY(1px);
	  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	}
  
	.copy-btn {
	  padding: 20px 32px;
	  font-size: 20px;
	  margin-top: 10px;
	  background-color: #444;
	}
  
	.discord-bar {
	  background-color: #333;
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10px 20px;
	  width: 100%;
	  position: fixed;
	  bottom: 0;
	  left: 0;
	  z-index: 1;
	}
  
	.discord-btn {
	  padding: 10px 20px;
	  font-size: 16px;
	  font-weight: bold;
	  background-color: transparent;
	  color: #7289DA; /* Updated color */
	  border: none;
	  border-radius: 8px;
	  cursor: pointer;
	  transition: transform 0.2s ease-in-out;
	}
  
	.discord-btn:hover {
	  transform: scale(1.05);
	}
  </style>
  
  <header>
	<img class="logo" src="https://api.trophyhub.me/cdn/main_img.png" alt="Small Logo">
	<h1>Trophy Hub</h1>
	<div class="dropdown">
	  <button class="dropdown-btn">
		<div class="dropdown-lines"></div>
		<div class="dropdown-lines"></div>
		<div class="dropdown-lines"></div>
	  </button>
	  <div class="dropdown-content">
		<a href="javascript:void(0)">Option 1</a>
		<a href="javascript:void(0)">Option 2</a>
		<a href="javascript:void(0)">Option 3</a>
	  </div>
	</div>
  </header>
  
  <main>
	<div class="btn-container">
	  <button class="btn copy-btn" on:click={copyScript}>Copy Script</button>
	  <button class="btn">Get Key</button>
	</div>
  </main>
  
  <div class="discord-bar">
	<a class="discord-btn" href="https://discord.gg/rk9yVaFGdu">Join Discord</a>
  </div>
  