(() => {
  if (!location.pathname.includes("/games/")) return;
  if (document.getElementById("playspark-home-menu")) return;

  const css = `
    .playspark-home-menu {
      position: fixed;
      left: 0;
      bottom: calc(18px + env(safe-area-inset-bottom, 0px));
      z-index: 2147483647;
      width: 60px;
      height: 38px;
      border-radius: 0 18px 18px 0;
      background: rgba(255, 255, 255, 0.96);
      box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 6px;
      padding-left: 10px;
      color: #243043;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      user-select: none;
      backdrop-filter: blur(4px);
    }

    .playspark-home-menu__arrow {
      font-size: 20px;
      line-height: 1;
      font-weight: 700;
      transform: translateY(-1px);
    }

    .playspark-home-menu__badge {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 32%, rgba(255,255,255,0.95) 0 8%, transparent 9%),
        radial-gradient(circle at 65% 32%, rgba(255,255,255,0.95) 0 8%, transparent 9%),
        radial-gradient(circle at 50% 68%, rgba(255,255,255,0.95) 0 10%, transparent 11%),
        linear-gradient(180deg, #ff8e32, #ff5f11);
      box-shadow: inset 0 -1px 0 rgba(0,0,0,0.18);
      position: relative;
      flex: 0 0 auto;
    }

    .playspark-home-menu__badge::before,
    .playspark-home-menu__badge::after {
      content: "";
      position: absolute;
      top: 8px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: #fff;
    }

    .playspark-home-menu__badge::before { left: 6px; }
    .playspark-home-menu__badge::after { right: 6px; }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  const button = document.createElement("a");
  button.id = "playspark-home-menu";
  button.className = "playspark-home-menu";
  button.href = "/index.html";
  button.target = "_top";
  button.rel = "noreferrer";
  button.setAttribute("aria-label", "Back to home");
  button.title = "Back to home";
  button.innerHTML = '<span class="playspark-home-menu__arrow">‹</span><span class="playspark-home-menu__badge" aria-hidden="true"></span>';

  const mount = () => document.body.appendChild(button);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
})();
