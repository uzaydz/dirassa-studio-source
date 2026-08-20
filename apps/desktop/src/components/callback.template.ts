export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate">
  <meta http-equiv="Pragma" content="no-cache">
  <title>Dirassa Studio Auth</title>
  <style>
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font-weight: 400;
    }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      text-align: center;
      background-color: #f8f9fa;
    }
    .container {
      padding: 30px;
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
    .logo {
      width: 190px;
      height: auto;
      margin-bottom: 20px;
    }
    p {
      font-size: 21px;
      line-height: 26px;
      color: #12161F;
      margin: 0;
    }
    .error {
      color: #dc2626;
      margin-top: 12px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="178" height="44" viewBox="0 0 178 44" fill="none"> <defs> <linearGradient id="ds-cb" gradientUnits="userSpaceOnUse" x1="4" y1="0" x2="20" y2="44"> <stop stop-color="#FFA51C"/> <stop offset="0.55" stop-color="#FC8213"/> <stop offset="1" stop-color="#F45E07"/> </linearGradient> <mask id="ds-cbn" maskUnits="userSpaceOnUse" x="0" y="0" width="39.4" height="44"> <rect width="39.4" height="44" fill="#fff"/> <rect x="21.77" y="15.14" width="7.1" height="22.91" rx="3.55" fill="#000"/> <rect x="27.67" y="20.43" width="7.1" height="13.19" rx="3.55" fill="#000"/> </mask> </defs> <path mask="url(#ds-cbn)" fill="url(#ds-cb)" d="M2.01 0H22.11A17.28 22 0 0 1 22.11 44H2.01A2.01 2.01 0 0 1 0 41.99V34.63H22.11A7.9 12.62 0 0 0 22.11 9.38H0V2.01A2.01 2.01 0 0 1 2.01 0Z"/> <path fill="url(#ds-cb)" d="M2.77 11.93L13.49 19.73Q16.61 22 13.49 24.27L2.77 32.07Q0 34.09 0 30.67L0 13.33Q0 9.91 2.77 11.93Z"/> <rect x="17.69" y="22.17" width="3.62" height="9.64" rx="1.81" fill="url(#ds-cb)"/> <rect x="23.45" y="16.81" width="3.75" height="19.56" rx="1.88" fill="url(#ds-cb)"/> <rect x="29.35" y="22.11" width="3.75" height="9.85" rx="1.88" fill="url(#ds-cb)"/>  <text x="52" y="29.4" fill="#12161F" font-family="Geist Sans, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif" font-size="19" font-weight="600" letter-spacing="-0.45">Dirassa<tspan font-weight="400" opacity="0.6" letter-spacing="-0.2"> Studio</tspan></text> </svg>
    <p id="message">You are now signed in. Please re-open the Dirassa Studio desktop app to continue.</p>
    <div id="error-container"></div>
  </div>
</body>
</html>
`;
